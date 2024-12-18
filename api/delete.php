<?php
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->id)) {
    $id = $data->id;

    $query = "DELETE FROM contacts WHERE id=$id";
    if (mysqli_query($conn, $query)) {
        echo json_encode(['message' => 'Kontak berhasil dihapus']);
    } else {
        echo json_encode(['error' => 'Gagal menghapus kontak']);
    }
}
?>
