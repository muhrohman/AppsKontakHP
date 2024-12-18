<?php
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->username) && isset($data->password)) {
    $username = $data->username;
    $password = $data->password;

    $query = "SELECT * FROM users WHERE username = '$username'";
    $result = mysqli_query($conn, $query);

    if ($row = mysqli_fetch_assoc($result)) {
        if (password_verify($password, $row['password'])) {
            echo json_encode(['message' => 'Login sukses']);
        } else {
            echo json_encode(['error' => 'Password salah']);
        }
    } else {
        echo json_encode(['error' => 'User tidak ditemukan']);
    }
}
?>
