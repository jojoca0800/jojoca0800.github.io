<?php

// Ativar exibição de erros
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

// Capturar dados do formulário (conforme o HTML enviado)
$nome     = $_POST['name']     ?? '';
$email    = $_POST['email']    ?? '';
$telefone = $_POST['phone']    ?? '';
$servico  = $_POST['service']  ?? '';
$mensagem = $_POST['message']  ?? '';

// Criar instância do PHPMailer
$mail = new PHPMailer(true);

try {
    // Debug para arquivo
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {
        file_put_contents('debug_smtp.txt', $str . "\n", FILE_APPEND);
    };

    // Configuração do servidor SMTP
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'joaquimdequadrosp@gmail.com';
    $mail->Password   = 'szpjgdfjopwofzkd'; // aqui vai a senha de app sem espaço
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom('joaquimdequadrosp@gmail.com', 'Formulário do site');
    $mail->addAddress('joaquimdequadrosp@gmail.com'); // destinatário (pode ser você mesmo ou outro)

    // Conteúdo do e-mail
    $mail->isHTML(false);
    $mail->Subject = 'Novo contato do site Belari Moveis';
    $mail->Body    = "Nome: $nome\nE-mail: $email\nTelefone: $telefone\nServiço: $servico\nMensagem:\n$mensagem";

    // Enviar
    $mail->send();
    header("Location: obrigado.html");
    exit;

} catch (Exception $e) {
    file_put_contents('erro_envio.txt', "Erro ao enviar e-mail: {$mail->ErrorInfo}\n", FILE_APPEND);
    header("Location: erro.html");
    exit;
}
