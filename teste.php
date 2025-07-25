<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

$mail = new PHPMailer(true);
$mail->SMTPDebug = 2; // modo detalhado
$mail->Debugoutput = 'html';

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.titan.email';
    $mail->SMTPAuth = true;
    $mail->Username = 'edson@moveisbelari.com.br';
    $mail->Password = 'Belari1234@';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('edson@moveisbelari.com.br');
    $mail->addAddress('joaquimdequadrosp@gmail.com');
    $mail->Subject = 'Teste SMTP';
    $mail->Body = 'Teste de envio';

    $mail->send();
    echo "E-mail enviado com sucesso!";
} catch (Exception $e) {
    echo "Erro: " . $mail->ErrorInfo;
}
