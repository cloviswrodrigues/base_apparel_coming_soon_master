const form = document.getElementById('form');
const inputEmail = document.getElementById('email');
const spanEmail = document.getElementById('msg-error-email');

form.addEventListener('submit', (e) => {             
    e.preventDefault();   
    let validate = validateInputs();
    if (!validate) {
        document.location.reload();
    }
})

form.addEventListener('focusin', (e) => {
    activeErrorInputEmail(false);
});

function validateInputs() {
   if (!isValidEmail(inputEmail.value)){
        activeErrorInputEmail(true);
        return true;
    }else{
        activeErrorInputEmail(false);
        return false;
    }
}

function isValidEmail(email){
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.exec(email) == null ? false : true;
}

function activeErrorInputEmail(active) {
    if (active){
        inputEmail.classList.add('error-active');
        spanEmail.classList.add('error');
    }else {
        inputEmail.classList.remove('error-active');
        spanEmail.classList.remove('error');
    }
}