// Chiedi un numero di 4 cifre all’utente nel prompt
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedo un numero all'utente
const userNumber = prompt('Dimmi un numero di 4 cifre');

// Scorro i numeri
let sumNumbers = 0;
for(let i=0; i < userNumber.length; i++) {
    const singleNumber = parseInt(userNumber[i]);

    // Calcolo la somma di tutte le cifre che compongono il numero
    sumNumbers += singleNumber;
}

console.log(sumNumbers);