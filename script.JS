

document.addEventListener("DOMContentLoaded", (A) => {
    const formulario = document.getElementById('formularioRegistro');
    const nombreCompletoInput = document.getElementById('nombreCompleto');
    const emailInput = document.getElementById('email');
    const contrasenaInput = document.getElementById('contrasena');
    const confirmarContrasenaInput = document.getElementById('confirmarContrasena');

    const errorNombreCompleto = document.getElementById('errorNombreCompleto');
    const errorEmail = document.getElementById('errorEmail');
    const errorContrasena = document.getElementById('errorContrasena');
    const errorConfirmarContrasena = document.getElementById('errorConfirmarContrasena');
    A.preventDefault(); 
    
    function mostrarError(input, mensaje) {
        const errorElemento = document.getElementById('error' + input.id.charAt(0).toUpperCase() + input.id.slice(1));
        errorElemento.textContent = mensaje;
        errorElemento.style.display = 'block';
        input.classList.add('error');
        input.classList.remove('valido');
    }

    function mostrarExito(input) {
        const errorElemento = document.getElementById('error' + input.id.charAt(0).toUpperCase() + input.id.slice(1));
        errorElemento.textContent = '';
        errorElemento.style.display = 'none';
        input.classList.add('valido');
        input.classList.remove('error');
    }

    nombreCompletoInput.addEventListener('input', () => {
        if (nombreCompletoInput.value.trim().length < 3) {
            mostrarError(nombreCompletoInput, 'El nombre completo debe tener al menos 3 caracteres.');
        } else {
            mostrarExito(nombreCompletoInput);
        }
    });

    const contrasenia = contraseniaInput.value
    document.write(contrasenia)
    if(contraseniaInput != contraComparar)
    {
        alert("La contraseña no coincide")
    }


    emailInput.addEventListener('input', () => {
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailInput.value.trim() === '') {
            mostrarError(emailInput, 'El correo electrónico es obligatorio.');
        } else if (!regexEmail.test(emailInput.value.trim())) {
            mostrarError(emailInput, 'Ingrese un correo electrónico válido.');
        } else {
            mostrarExito(emailInput);
        }
    });

    contrasenaInput.addEventListener('input', () => {
        const regexContrasena = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
        if (contrasenaInput.value.trim() === '') {
            mostrarError(contrasenaInput, 'La contraseña es obligatoria.');
        } else if (!regexContrasena.test(contrasenaInput.value.trim())) {
            mostrarError(contrasenaInput, 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra y un número.');
        } else {
            mostrarExito(contrasenaInput);
        }
    });

    confirmarContrasenaInput.addEventListener('input', () => {
        if (confirmarContrasenaInput.value !== contrasenaInput.value) {
            mostrarError(confirmarContrasenaInput, 'Las contraseñas no coinciden.');
        } else {
            mostrarExito(confirmarContrasenaInput);
        }
    });

    // Validación al enviar el formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el envío del formulario
        let valido = true;

        if (nombreCompletoInput.value.trim().length < 3) {
            mostrarError(nombreCompletoInput, 'El nombre completo debe tener al menos 3 caracteres.');
            valido = false;
        }
        if (emailInput.value.trim() === '' || !regexEmail.test(emailInput.value.trim())) {
            mostrarError(emailInput, 'Ingrese un correo electrónico válido.');
            valido = false;
        }
        if (contrasenaInput.value.trim() === '' || !regexContrasena.test(contrasenaInput.value.trim())) {
            mostrarError(contrasenaInput, 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra y un número.');
            valido = false;
        }
        if (confirmarContrasenaInput.value !== contrasenaInput.value) {
            mostrarError(confirmarContrasenaInput, 'Las contraseñas no coinciden.');
            valido = false;
        }

        if (valido) {
            // Aquí puedes agregar el código para enviar los datos al servidor
            alert('Formulario enviado con éxito');
            formulario.reset();
        }
    });
})


