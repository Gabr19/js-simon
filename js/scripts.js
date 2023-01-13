// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// 1 variabile collegata ad html
// 2 funzione random number
// 3 for per creare i 5 numeri
// 4 timing function 30s

function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const gridContainer = document.getElementById('grid-container')


const number =[];
let container = gridContainer.append(number)


console.log(number)

for (let i = 1 ; i <=5 ; i++){

    let randomNumber = getRandomNumber(1, 100);

    while (number.includes(randomNumber)){
        randomNumber = getRandomNumber(1, 100)
    }

    number.push(randomNumber)
    console.log(randomNumber)
}


function ciclo (){
    let u = parseInt(prompt('inserisci il primo numero'))
    let d = parseInt(prompt('inserisci il secondo numero'))
    let t = parseInt(prompt('inserisci il terzo numero'))
    let q = parseInt(prompt('inserisci il quarto numero'))
    let c = parseInt(prompt('inserisci il quinto numero'))

    if(number.includes(u)){
        alert('hai indovinato il primo numero')
    } else {
        alert('primo numero sbagliato')
    }
    if(number.includes(d)){
        alert('hai indovinato il secondo numero')
    } else {
        alert('secondo numero sbagliato')
    }
    if(number.includes(u)){
        alert('hai indovinato il terzo numero')
    } else {
        alert('terzo numero sbagliato')
    }
    if(number.includes(d)){
        alert('hai indovinato il quarto numero')
    } else {
        alert('quarto numero sbagliato')
    }
    if(number.includes(u)){
        alert('hai indovinato il quinto numero')
    } else {
        alert('quinto numero sbagliato')
    }
}

let timeOut = setTimeout (ciclo, 3000)









// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// array dove salvare dati inseriti da utente
//  prompt