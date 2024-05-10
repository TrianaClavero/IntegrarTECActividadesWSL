window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('form-validation').addEventListener('submit', function(event){
        event.preventDefault(); //Evita que el formulario se envie antes de la validacion 
    })

    let firstName = document.getElementById('first-name').value;
    let lastName  = document.getElementById('last-name').value;
    let username  = document.getElementById('username').value;
    let password  = document.getElementById('password').value;
    let passwordConfirm  = document.getElementById('confirm-password').value;
    let birthday  = document.getElementById('birthday').value;
    let check = document.getElementById('check').checked;

    

})


