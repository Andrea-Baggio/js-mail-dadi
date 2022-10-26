const eleUserNumber = document.getElementById('user-number');
const eleComputerNumber = document.getElementById('computer-number');
const eleOutPut = document.getElementById('output');

const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

eleUserNumber.innerHTML = userNumber;
eleComputerNumber.innerHTML = computerNumber;

let msg;
if (userNumber > computerNumber) {
    msg = 'Hai vinto!';
} if (computerNumber > userNumber) {
    msg = 'Ha vinto il computer...';
} if (computerNumber == userNumber) {
    msg = 'Pareggio.'
}

eleOutPut.innerHTML = msg;