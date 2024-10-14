// script.js

// Función para cargar las reseñas desde el archivo JSON
function loadReviews() {
    // Realiza una solicitud a 'reviews.json'
    fetch('reviews.json')
        .then(response => {
            // Verifica si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error en la carga del archivo JSON');
            }
            // Convierte la respuesta en formato JSON
            return response.json();
        })
        .then(reviews => {
            // Obtiene la referencia al div donde se mostrarán los comentarios
            const commentsDiv = document.getElementById('comments');
            commentsDiv.innerHTML = ''; // Limpia los comentarios existentes

            // Verifica si hay reseñas
            if (reviews.length > 0) {
                // Itera sobre cada reseña y crea un elemento HTML para mostrarla
                reviews.forEach(review => {
                    const reviewDiv = document.createElement('div'); // Crea un nuevo div para la reseña
                    reviewDiv.classList.add('review'); // Agrega la clase 'review' para aplicar estilos
                    // Inserta el contenido de la reseña en el div
                    reviewDiv.innerHTML = `<strong>${review.name}</strong> (${review.rating}/5): <p>${review.review}</p>`;
                    commentsDiv.appendChild(reviewDiv); // Agrega el div de la reseña al contenedor de comentarios
                });
            } else {
                // Si no hay reseñas, muestra un mensaje indicándolo
                commentsDiv.innerHTML = '<p>No hay comentarios todavía.</p>';
            }
        })
        .catch(error => console.error('Error al cargar reseñas:', error)); // Maneja cualquier error que ocurra
}

// Agrega un evento al formulario para manejar el envío de reseñas
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Obtiene los valores del formulario
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

    // Envía la reseña al archivo 'review.php'
    fetch('review.php', {
        method: 'POST', // Método de la solicitud
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido que se está enviando
        },
        body: JSON.stringify({ name, review, rating }) // Convierte los datos en formato JSON
    })
    .then(response => response.json()) // Convierte la respuesta en formato JSON
    .then(data => {
        console.log('Reseña enviada:', data); // Muestra en consola la respuesta de la solicitud
        loadReviews(); // Carga las reseñas después de enviar una nueva
        // Limpia el formulario
        document.getElementById('reviewForm').reset();
    })
    .catch(error => console.error('Error al enviar reseña:', error)); // Maneja cualquier error que ocurra
});

// Carga las reseñas al cargar la página
window.onload = loadReviews;
