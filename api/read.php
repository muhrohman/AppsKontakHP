<?php
include 'config.php';

$query = "SELECT * FROM contacts";
$result = mysqli_query($conn, $query);

$contacts = [];
while ($row = mysqli_fetch_assoc($result)) {
    $contacts[] = $row;
}

echo json_encode($contacts);
?>
