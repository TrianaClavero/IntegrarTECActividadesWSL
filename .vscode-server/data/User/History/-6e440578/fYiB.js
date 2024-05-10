window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('form-validation').addEventListener('submit', function(event){
        event.preventDefault(); //Evita que el formulario se envie antes de la validacion 

        let firstName = document.getElementById('first-name').value;
        let lastName  = document.getElementById('last-name').value;
        let username  = document.getElementById('username').value;
        let password  = document.getElementById('password').value;
        let passwordConfirm  = document.getElementById('confirm-password').value;
        let birthday  = document.getElementById('birthday').value;
        let check = document.getElementById('check').checked;

        let hasErrors = false;
        let nameRegExp = /^[a-zA-Z]+$/;

        if (firstName === '' || lastName === '' || username === '' || password === '' || passwordConfirm === '' || birthday === '') {
            alert('Por favor complete todos los campos');
            return;
        }

        if(!nameRegExp.test(firstName) && !firstName.lenght < 2){
            alert('Por favor ingrese un nombre valido (solo se permiten caracteres alfabéticos)');
            hasErrors = true;
        }

        if(!nameRegExp.test(lastName) && !lastName.lenght < 2){
            alert('Por favor ingrese un apellido valido (solo se permiten caracteres alfabéticos)');
            hasErrors = true;
        }

        if (password !== passwordConfirm) {
            alert('Las contraseñas no coinciden');
            hasErrors = true;
          }

        // Si no hay errores, se puede enviar el formulario
         if (!hasErrors) {
         alert('Formulario enviado');
        }

    })




})


