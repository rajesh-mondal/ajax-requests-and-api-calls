<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json');
$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

// $submittedData = [
//     'the-username' => $data['username'],
//     'the_password' => $data['password']
// ];

// echo json_encode($submittedData);

$result = [];
if ($data['username'] == 'admin@example.com' && $data['password'] == 'password123') {
    $result['success'] = true;
    $result['message'] = "Hello Admin";
} else {
    $result['success'] = false;
    $result['message'] = "Access Denied";
}

echo json_encode($result);