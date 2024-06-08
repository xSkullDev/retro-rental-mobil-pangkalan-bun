<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $namaLengkap = htmlspecialchars($_POST['namaLengkap']);
    $email = htmlspecialchars($_POST['email']);
    $nomorHp = htmlspecialchars($_POST['nomorHp']);
    $subject = htmlspecialchars($_POST['subject']);
    $pesan = htmlspecialchars($_POST['pesan']);

    $to = "x.skull.dev@gmail.com"; // Ganti dengan alamat email tujuan
    $subjectEmail = "Formulir Kontak: $subject";

    // Format email
    $body = "Nama Lengkap: $namaLengkap\n";
    $body .= "Email: $email\n";
    $body .= "Nomor HP: $nomorHp\n\n";
    $body .= "Pesan:\n$pesan";

    $headers = "From: $email";

    // Mengirim email
    if (mail($to, $subjectEmail, $body, $headers)) {
        echo "Pesan berhasil dikirim.";
    } else {
        echo "Pesan gagal dikirim.";
    }
} else {
    echo "Metode pengiriman tidak valid.";
}
?>