
function adicionarEmail() {
    const nameInput = document.getElementById('newName');
    const emailInput = document.getElementById('newEmail');
    const turmaSelect = document.getElementById('newTurma');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const turma = turmaSelect.value.trim();

    if (name === "" || email === "" || turma === "ㅤㅤ") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const tableBody = document.getElementById('emailTableBody');
    let emails = JSON.parse(localStorage.getItem('emails')) || [];
    let existingRow = null;
    let rowIndex = -1;

    Array.from(tableBody.rows).forEach((row, index) => {
        if (row.cells[0].textContent.trim() === name) {
            existingRow = row;
            rowIndex = index;
        }
    });

    if (existingRow) {
        const emailCell = existingRow.cells[1];
        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.className = 'email';
        newCheckbox.value = email;
        emailCell.appendChild(newCheckbox);
        emailCell.append(` ${email} `);

        const existingEntry = emails[rowIndex];
        if (!existingEntry.emails) {
            existingEntry.emails = [existingEntry.email];
            delete existingEntry.email;
        }
        existingEntry.emails.push(email);
    } else {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td><input type="checkbox" class="email" value="${email}"> ${email}</td>
            <td>${turma}</td>
        `;
        tableBody.appendChild(newRow);

        emails.push({ name, emails: [email], turma });
    }

    localStorage.setItem('emails', JSON.stringify(emails));
    ordenarTabela();

    nameInput.value = "";
    emailInput.value = "";
    turmaSelect.value = "ㅤㅤ";
}

function redirecionarGmail() {
    const emailsSelecionados = [];
    document.querySelectorAll('.email:checked').forEach(checkbox => {
        emailsSelecionados.push(checkbox.value);
    });

    if (emailsSelecionados.length === 0) {
        alert("Selecione pelo menos um e-mail.");
        return;
    }

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&bcc=${encodeURIComponent(emailsSelecionados.join(','))}`;
    window.open(mailtoLink, '_blank');
}

function desmarcarTodos() {
    document.querySelectorAll('.email').forEach(checkbox => {
        checkbox.checked = false;
    });
}

function marcarTodos() {
    document.querySelectorAll('.email').forEach(checkbox => {
        checkbox.checked = true;
    });
}

function removerSelecionados() {
    const checkboxes = document.querySelectorAll('.email:checked');
    let emails = JSON.parse(localStorage.getItem('emails')) || [];

    if (checkboxes.length === 0) {
        alert("Selecione pelo menos um e-mail para remover.");
        return;
    }

    if (confirm("Deseja realmente remover os emails selecionados?")) {
        checkboxes.forEach(checkbox => {
            const email = checkbox.value;
            const row = checkbox.closest('tr');
            const name = row.cells[0].textContent.trim();

            const entryIndex = emails.findIndex(e => e.name === name);
            if (entryIndex !== -1) {
                const entry = emails[entryIndex];
                const emailList = Array.isArray(entry.emails) ? entry.emails : (entry.email ? [entry.email] : []);
                const emailIndex = emailList.indexOf(email);

                if (emailIndex !== -1) {
                    emailList.splice(emailIndex, 1);
                    checkbox.nextSibling.remove();
                    checkbox.remove();

                    if (emailList.length === 0) {
                        row.remove();
                        emails.splice(entryIndex, 1);
                    } else {
                        entry.emails = emailList;
                    }
                }
            }
        });

        localStorage.setItem('emails', JSON.stringify(emails));
        alert("Emails selecionados foram removidos com sucesso!");
    }
}

function carregarDados() {
    const tableBody = document.getElementById('emailTableBody');
    let emails = JSON.parse(localStorage.getItem('emails')) || [];

    // Se o localStorage estiver vazio, inicializar com os dados do HTML
    if (emails.length === 0) {
        const initialData = [];
        // Capturar os dados da tabela HTML antes de limpar
        const rows = Array.from(tableBody.getElementsByTagName('tr'));
        rows.forEach(row => {
            const name = row.cells[0].textContent.trim();
            const emailElements = row.cells[1].querySelectorAll('.email');
            const emailsList = Array.from(emailElements).map(cb => cb.value);
            const turma = row.cells[2].textContent.trim();
            initialData.push({ name, emails: emailsList, turma });
        });

        // Se houver dados na tabela HTML, salvá-los no localStorage
        if (initialData.length > 0) {
            emails = initialData;
            localStorage.setItem('emails', JSON.stringify(emails));
        }
    }

    // Limpar a tabela e recarregar do localStorage
    tableBody.innerHTML = "";
    emails.forEach(entry => {
        const newRow = document.createElement('tr');
        let emailContent = '';
        const emailList = Array.isArray(entry.emails) ? entry.emails : (entry.email ? [entry.email] : []);
        emailList.forEach(email => {
            emailContent += `<input type="checkbox" class="email" value="${email}"> ${email} `;
        });
        newRow.innerHTML = `
            <td>${entry.name}</td>
            <td>${emailContent}</td>
            <td>${entry.turma}</td>
        `;
        tableBody.appendChild(newRow);
    });
}
function ordenarTabela() {
    const tableBody = document.getElementById('emailTableBody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const nameA = a.cells[0].textContent.trim().toLowerCase();
        const nameB = b.cells[0].textContent.trim().toLowerCase();
        return nameA.localeCompare(nameB);
    });

    tableBody.innerHTML = "";
    rows.forEach(row => tableBody.appendChild(row));

    const emailsOrdenados = rows.map(row => {
        const emailCheckboxes = row.cells[1].querySelectorAll('input.email');
        const emails = Array.from(emailCheckboxes).map(cb => cb.value);
        return {
            name: row.cells[0].textContent.trim(),
            emails: emails,
            turma: row.cells[2].textContent.trim(),
        };
    });

    localStorage.setItem('emails', JSON.stringify(emailsOrdenados));
}

document.getElementById('paginaSelect').addEventListener('change', function () {
    const url = this.value; 
    if (url) {
        window.location.href = url; 
    }});


document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada, chamando carregarDados...");
    carregarDados();

    // Adicionar o evento para o select de navegação
    document.getElementById('paginaSelect').addEventListener('change', function () {
        const url = this.value;
        if (url) {
            window.location.href = url;
        }
    });
});

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},
    "image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,
        "speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,
            "size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1}
            ,"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,
                "attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas",
                    "events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},
                    "resize":true},"modes":{"grab":{"distance":0,"line_linked":{"opacity":0.2989295091900624}},
                    "bubble":{"distance":400,"size":111.67569378524759,"duration":4.467027751409904,"opacity":8,"speed":3},
                    "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
                    "retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); 
                    stats.domEl .style.position = 'absolute'; stats.domElement.style.left = '0px'; 
                    stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles =
                     document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if
                         (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
                         { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
                         requestAnimationFrame(update); }; requestAnimationFrame(update);;