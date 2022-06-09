// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// Creazione di un array vuoto
const array = [];

// Chiedo per 6 volte all’utente di inserire un numero
for( i = 0; i < 6; i++) {
    const number = parseInt( prompt ('Inserisci un numero') );

    // se è dispari lo inserisco nell’array
    if(number % 2 !== 0) {
        array.push(number);
    }
}

// Stampo l'array nel DOM
document.getElementById('odd-numbers').innerHTML = `I numeri dispari nell'array sono:[${array}]`;
    