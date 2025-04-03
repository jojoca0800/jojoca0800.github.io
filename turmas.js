function redirecionarPagina() {
    const select = document.getElementById('paginaSelect');
    const url = select.value; // Obtém o valor selecionado (URL)
    if (url) {
        window.location.href = url; // Redireciona para a página
    }
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

    checkboxes.forEach(checkbox => {
        const emailValue = checkbox.value;
        const row = checkbox.closest('tr');
        const name = row.cells[0].textContent.trim();

        const entryIndex = emails.findIndex(e => e.name === name);
        if (entryIndex !== -1) {
            const entry = emails[entryIndex];
            const emailList = Array.isArray(entry.emails) ? entry.emails : (entry.email ? [entry.email] : []);
            const emailIndex = emailList.indexOf(emailValue);

            if (emailIndex !== -1) {
                emailList.splice(emailIndex, 1);
                checkbox.nextSibling.remove(); // Remove o texto do e-mail
                checkbox.remove(); // Remove o checkbox

                if (emailList.length === 0) {
                    row.remove(); // Remove a linha se não houver mais e-mails
                    emails.splice(entryIndex, 1); // Remove a entrada do array
                } else {
                    entry.emails = emailList; // Atualiza a lista de e-mails
                }
            }
        }
    });

    localStorage.setItem('emails', JSON.stringify(emails));
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