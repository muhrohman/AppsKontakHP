<?php
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) && isset($data->phone)) {
    $name = $data->name;
    $phone = $data->phone;

    $query = "INSERT INTO contacts (name, phone) VALUES ('$name', '$phone')";
    if (mysqli_query($conn, $query)) {
        echo json_encode(['message' => 'Kontak berhasil ditambahkan']);
    } else {
        echo json_encode(['error' => 'Gagal menambahkan kontak']);
    }
}
?>
