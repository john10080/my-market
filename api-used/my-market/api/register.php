<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header("Content-Type: application/json");

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
$required_fields = [
    "email", "password", "first_name", "last_name",
    "birth_date", "contact_number", "address"
];

// Check for missing fields
$missing_fields = [];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        $missing_fields[] = $field;
    }
}
if (!empty($missing_fields)) {
    http_response_code(400);
    echo json_encode([
        "error" => "Missing required fields",
        "fields" => $missing_fields
    ]);
    exit();
}

// Hash the password before storing
$data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);

// Database connection
$host = 'localhost';
$db   = 'mymarketdb';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    $sql = "INSERT INTO users (email, first_name, last_name, password, birth_date, contact_number, address)
            VALUES (:email, :first_name, :last_name, :password, :birth_date, :contact_number, :address)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':email' => $data['email'],
        ':first_name' => $data['first_name'],
        ':last_name' => $data['last_name'],
        ':password' => $data['password'],
        ':birth_date' => $data['birth_date'],
        ':contact_number' => $data['contact_number'],
        ':address' => $data['address'],
    ]);

    echo json_encode([
        "message" => "User created successfully",
        "user" => $data
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>