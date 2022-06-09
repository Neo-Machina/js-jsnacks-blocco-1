// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Il software chiede per 10 volte all’utente di inserire un numero
let sumNumbers = 0;
for(i = 0; i < 10; i++) {
    const number = parseInt( prompt('Inserisci un numero') ); 
    
    sumNumbers += number;
    console.log(sumNumbers);
}

// Stampo la somma di tutti i numeri inseriti
document.getElementById('sum-numbers').innerHTML = `La somma totale è ${sumNumbers}`;


