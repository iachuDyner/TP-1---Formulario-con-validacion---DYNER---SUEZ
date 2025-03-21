document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById('formularioRegistro');
    const nombreCompletoInput = document.getElementById('nombreCompleto');
    const emailInput = document.getElementById('email');
    const contrasenaInput = document.getElementById('contrasena');
    const confirmarContrasenaInput = document.getElementById('confirmarContrasena');

    const errorNombreCompleto = document.getElementById('errorNombreCompleto');
    const errorEmail = document.getElementById('errorEmail');
    const errorContrasena = document.getElementById('errorContrasena');
    const errorConfirmarContrasena = document.getElementById('errorConfirmarContrasena');

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexContrasena = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

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

    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() === '') {
            mostrarError(emailInput, 'El correo electrónico es obligatorio.');
        } else if (!regexEmail.test(emailInput.value.trim())) {
            mostrarError(emailInput, 'Ingrese un correo electrónico válido.');
        } else {
            mostrarExito(emailInput);
        }
    });

    contrasenaInput.addEventListener('input', () => {
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

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
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
            alert('Formulario enviado con éxito');
            formulario.reset();
            document.querySelectorAll('.valido').forEach(input => input.classList.remove('valido'));
        }
    });
});
