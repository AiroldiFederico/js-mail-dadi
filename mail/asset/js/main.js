/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/



let arrayEmail = ['emma.smith@gmail.com', 'paul.taylor@gmail.com', 'liam.lee@gmail.com', 'frank.jones@gmail.com', 'steve.evans@gmail.com', 'steve.taylor@gmail.com', 'isabel.klein@gmail.com', 'mary.lee@gmail.com', 'bob.davis@gmail.com', 'mary.irwin@gmail.com', 'isabel.patel@gmail.com', 'liam.carter@gmail.com', 'tina.brown@gmail.com', 'henry.nguyen@gmail.com', 'grace.carter@gmail.com', 'tina.patel@gmail.com', 'isabel.robinson@gmail.com', 'isabel.irwin@gmail.com', 'emma.robinson@gmail.com', 'paul.carter@gmail.com']


function check() {

    let emailtocheck = document.getElementById('emailtocheck').value;
    
    //metodo 1
    // if (arrayEmail.indexOf(emailtocheck) !== -1) {
    //     document.getElementById('result').innerHTML = 'corretto';
    // }
    // else {
    //     document.getElementById('result').innerHTML = 'sbagliato';
    // }

    //metodo 2


    for (let i = 0; i < arrayEmail.length; i++) {

        let arrayEmail = ['emma.smith@gmail.com', 'paul.taylor@gmail.com', 'liam.lee@gmail.com', 'frank.jones@gmail.com', 'steve.evans@gmail.com', 'steve.taylor@gmail.com', 'isabel.klein@gmail.com', 'mary.lee@gmail.com', 'bob.davis@gmail.com', 'mary.irwin@gmail.com', 'isabel.patel@gmail.com', 'liam.carter@gmail.com', 'tina.brown@gmail.com', 'henry.nguyen@gmail.com', 'grace.carter@gmail.com', 'tina.patel@gmail.com', 'isabel.robinson@gmail.com', 'isabel.irwin@gmail.com', 'emma.robinson@gmail.com', 'paul.carter@gmail.com']

        
        let emailtocheck = document.getElementById('emailtocheck').value;

        if (arrayEmail[i] == emailtocheck) {
            document.getElementById('result').innerHTML = 'corretto';
            console.log(arrayEmail[i])
        } else {
            document.getElementById('result').innerHTML = 'sbagliato';
            console.log(arrayEmail[i])
        }
    }


}

function add() {
    let addemail = document.getElementById('addemail').value;
    arrayEmail.push(addemail);
    document.getElementById('addcorrect').innerHTML = 'Aggiunto correttamente';
}
