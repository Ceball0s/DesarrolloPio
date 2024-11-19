// Inicializa el contador del carrito
let cartCount = 0;

// Función para agregar al carrito
function addToCart() {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
    console.log("Producto añadido al carrito. Total: " + cartCount);
}

// Escucha el evento de carga del documento
document.addEventListener("DOMContentLoaded", function() {
    // Evento delegado para el botón de añadir al carrito
    document.body.addEventListener("click", function(event) {
        if (event.target && event.target.id === "addToCartButton") {
            addToCart();
            alert("Producto añadido al carrito");
        }
    });
    console.log("JavaScript cargado correctamente y listo para delegar el evento.");
});
