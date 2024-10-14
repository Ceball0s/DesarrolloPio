<?php
header('Content-Type: application/json');

// Ruta del archivo JSON
$file_path = 'reviews.json';

// Obtener datos del formulario
$data = json_decode(file_get_contents('php://input'), true);

// Verificar que se hayan recibido los datos
if (isset($data['name']) && isset($data['review']) && isset($data['rating'])) {
    $name = htmlspecialchars(trim($data['name']));
    $review = htmlspecialchars(trim($data['review']));
    $rating = intval($data['rating']);

    // Cargar reseñas existentes
    if (file_exists($file_path)) {
        $json_data = file_get_contents($file_path);
        $reviews = json_decode($json_data, true);
    } else {
        $reviews = [];
    }

    // Agregar nueva reseña
    $new_review = [
        'name' => $name,
        'review' => $review,
        'rating' => $rating
    ];
    $reviews[] = $new_review;

    // Guardar en el archivo JSON
    file_put_contents($file_path, json_encode($reviews, JSON_PRETTY_PRINT));
    echo "hola";
}

// Devolver todas las reseñas en formato JSON
echo json_encode($reviews);
?>
