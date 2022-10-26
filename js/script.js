const arr = ['email1', 'email2', 'email3'];

const eleForm = document.querySelector('form');
const eleEmail = document.getElementById('user-email');
const eleOutput = document.getElementById('output');

eleForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let emailFound = false;
    for (let i = 0; i < arr.length; i++) {
        const emailSearched = eleEmail.value;
        if (emailSearched === arr[i]) {
            console.log('trovata');
            emailFound = true;
        }         
        
        if (emailFound) {
        eleOutput.innerHTML = 'E-mail trovata!'
            
        }        
        else {
        eleOutput.innerHTML = 'E-mail non trovata :('
        }
    }
})