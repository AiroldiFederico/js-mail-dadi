






function lancia() {
    console.log('lancia')

    // Array per i numeri del primo dado
    let dado1 = [1, 2, 3, 4, 5, 6];

    // Array per i numeri del secondo dado
    let dado2 = [1, 2, 3, 4, 5, 6];

    // Generiamo due numeri casuali tra 1 e 6, uno per ciascun dado
    let numeroDado1 = dado1[Math.floor(Math.random() * dado1.length)];
    let numeroDado2 = dado2[Math.floor(Math.random() * dado2.length)];

    document.getElementById('dado1').innerHTML = numeroDado1;
    document.getElementById('dado2').innerHTML = numeroDado2;
    
    if (numeroDado1 > numeroDado2) {
        
        document.getElementById('result').innerHTML = `HAI VINTO`;
        

    } else if (numeroDado1 < numeroDado2) {
        
        document.getElementById('result').innerHTML = `HAI PERSO`;

    } else {
        
        document.getElementById('result').innerHTML = `PAREGGIO`;
    }
}