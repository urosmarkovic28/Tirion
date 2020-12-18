const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const prezime = document.getElementById('prezime');
const brojTelefona = document.getElementById('brojTelefona');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});
function checkInputs(){
    //get the values
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const prezimeValue = prezime.value.trim();
    const brojTelefonaValue = brojTelefona.value.trim();

    if(usernameValue === ''){
        setErrorFOr(username, 'Ime ne može biti prazno');
    }else if (usernameValue.length <= 2){
        setErrorFOr(username, 'Ime mora biti duže od 2 karaktera');
    }else{
        setSuccessFor(username)
    }

    if(emailValue === ''){
        setErrorFOr(email, 'Email ne moze btit prazan');
    }else{
        setSuccessFor(email);
    }
    if (prezimeValue === ''){
        setErrorFOr(prezime, 'Prezime ne moze biti prazno');
    } else{
        setSuccessFor(prezime);
    }
    if (brojTelefonaValue === ''){
        setErrorFOr(brojTelefona, 'Broj telefona ne može biti prazan');
    
    }else{
        setSuccessFor(brojTelefona);
    }
    
}
function setErrorFOr(input, message){
    const formElement = input.parentElement;
    const small = document.getElementsByClassName('error-message');
    small.inerText = message;

    formElement.className = 'form-element error'
}
function setSuccessFor(input){
    const formElement = input.parentElement;
    formElement.className = 'form-element success'
}
//add function isEmail()