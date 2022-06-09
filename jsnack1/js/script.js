// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

// Array di numeri
const numbers = [1, 2, 3, 4, 5 ,6]

// Scorro i numeri nell'array 
for (let i = 0; i < numbers.length; i ++) {
    const thisNumber = numbers[i];

    // Se i numeri sono pari li stampo nell'id green 
    // altrimenti li stampo nell'id red
    if (thisNumber % 2 === 0) {
        document.getElementById('green').innerHTML += thisNumber + ' ';
    } else {
        document.getElementById('red').innerHTML += thisNumber + ' ';
    }
}