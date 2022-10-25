/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

/* Mail:
Chiedi mail
Ricercare la mail in una libreria precedentemente creata
Controllare che la mail inserita si trovi all'interno della libreria
SE è presente allora si da conferma
SE INVECE non è presente dare errore
*/

const userEmail = parseInt(prompt('Inserisci la tua e-mail!'));
let arr = ['email1', 'email2', 'email3'];

if (userEmail === arr) {
    alert('E-mail inserita correttamente');
} else if (userEmail != arr) {
    alert('Questa e-mail non esiste');
}