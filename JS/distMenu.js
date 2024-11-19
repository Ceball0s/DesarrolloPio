
function fmenu(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('cuerpoPag').innerHTML = data;
        }).catch(error => console.log('Error al cargar la página', error));
};

$(document).ready(function(){
   
    $('#registroForm').parsley({
        trigger: 'input'
    });
    $('input').on('input', function () {
        $(this).parsley().validate();
    });

    $('#registroForm').on('submit', function(event){
        event.preventDefault();
        if ($(this).parsley().isValid()){ 
            const nroDoc = document.getElementById('nroDoc').value;
            console.log('Nro.Documento: ', nroDoc);
            const tipoDoc = document.getElementById('tipoDoc').value;
            console.log('Tipo Documento: ', tipoDoc);
            const nombres = document.getElementById('nombres').value;
            console.log('Nombre: ', nombres);
            console.log ('Formulario valido. Los datos se enviaran a donde tu le digas ....');

            $('#exampleModal').modal('hide'); 
            alert('Su perfil ha sido guardado con éxito');

            $('#exampleModal').on('hidden.bs.modal', function () {
                $('#registroForm')[0].reset(); // Restablece todos los campos del formulario a sus valores iniciales
                $('#registroForm').parsley().reset(); // Restablece cualquier mensaje de error de Parsley
            });
        }
    }); 
});

$(document).ready(function(){
    // Inicializa Parsley para el formulario de contacto
    $('#contactoForm').parsley({
        trigger: 'input'
    });
 
    // Valida los campos en tiempo real
    $('input, textarea').on('input', function () {
        $(this).parsley().validate();
    });
 
    // Maneja el evento de envío del formulario
    $('#contactoForm').on('submit', function(event){
        event.preventDefault(); // Evita que el formulario se envíe por defecto
 
        // Verifica si el formulario es válido
        if ($(this).parsley().isValid()){ 
            const nombre = document.getElementById('nombre').value;
            console.log('Nombre: ', nombre);
            const correo = document.getElementById('correo').value;
            console.log('Correo: ', correo);
            const mensaje = document.getElementById('mensaje').value;
            console.log('Mensaje: ', mensaje);
 
            console.log('Formulario válido. El mensaje se enviará ahora...');
 
            alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
 
            // Restablece el formulario después del envío
            $('#contactoForm')[0].reset(); // Restablece todos los campos
            $('#contactoForm').parsley().reset(); // Restablece los mensajes de error
        }
    });
 });
 