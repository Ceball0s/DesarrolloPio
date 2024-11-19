$(document).ready(function() {
    // Manejo del inicio de sesión
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        
        // Obtener los valores del formulario
        const email = $('#email').val();
        const password = $('#password').val();

        // Verificar las credenciales (esto es solo un ejemplo simple)
        if (email === 'usuario@ejemplo.com' && password === '123456') {
            // Si las credenciales son correctas, guardar el estado de autenticación en el almacenamiento local
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);

            // Mostrar el mensaje de éxito y ocultar el formulario de login
            alert('Inicio de sesión exitoso');
            $('#loginModal').modal('hide');
            mostrarMenuLogueado();
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    });

    // Mostrar u ocultar el menú dependiendo de si el usuario está logueado
    function mostrarMenuLogueado() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            $('#btnLogin').hide();  // Ocultar el botón de login
            $('#btnLogout').show(); // Mostrar el botón de logout
        } else {
            $('#btnLogin').show();  // Mostrar el botón de login
            $('#btnLogout').hide(); // Ocultar el botón de logout
        }
    }

    // Manejar el cierre de sesión
    $('#btnLogout').on('click', function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        alert('Has cerrado sesión');
        mostrarMenuLogueado();  // Actualizar el menú
    });

    // Verificar si el usuario está logueado al cargar la página
    mostrarMenuLogueado();
});