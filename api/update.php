<?php
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->id) && isset($data->name) && isset($data->phone)) {
    $id = $data->id;
    $name = $data->name;
    $phone = $data->phone;

    $query = "UPDATE contacts SET name='$name', phone='$phone' WHERE id=$id";
    if (mysqli_query($conn, $query)) {
        echo json_encode(['message' => 'Kontak berhasil diperbarui']);
    } else {
        echo json_encode(['error' => 'Gagal memperbarui kontak']);
    }
}
?>
