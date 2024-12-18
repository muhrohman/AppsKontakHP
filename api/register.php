<?php
include 'config.php';

// Decode JSON input
$data = json_decode(file_get_contents("php://input"));

// Validasi input
if (isset($data->username) && isset($data->password)) {
    $username = $data->username;
    $password = $data->password;

    // Cek koneksi database
    if (!$conn) {
        echo json_encode(['error' => 'Database connection failed']);
        exit();
    }

    // Cek username sudah ada atau belum
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo json_encode(['error' => 'Username sudah ada']);
        exit();
    }

    // Hash password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert data menggunakan prepared statement
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $hashed_password);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Register berhasil']);
    } else {
        echo json_encode(['error' => 'Gagal menyimpan data']);
    }

    $stmt->close();
} else {
    echo json_encode(['error' => 'Username dan password wajib diisi']);
}

$conn->close();
?>
