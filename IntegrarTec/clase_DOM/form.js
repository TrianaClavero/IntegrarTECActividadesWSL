const addForm = document.getElementById("form-validation");
addForm.addEventListener("submit", (e) => { /* (e) = evento */
    if(addForm.checkValidity() === false){
        e.preventDefault();
        e.stopPropagation(); 
        addForm.classList.add('was-validate');
        return false
    }
    var firstName = document.getElementById("first-name").value;
    var lastName  = document.getElementById("last-name").value;
    var username  = document.getElementById("userame").value;
    var password  = document.getElementById("password").value;
    var passwordConfirm  = document.getElementById("confirm-password").value;
    var birthday  = document.getElementById("birthday").value;






    
} )

