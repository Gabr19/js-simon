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
gridContainer.append(number)



function ciclo (){
    for (let i = 1 ; i <=5 ; i++){

        let randomNumber = getRandomNumber(1, 100);

        while (number.includes(randomNumber)){
            randomNumber = getRandomNumber(1, 100)
        }

        number.push(randomNumber)
        console.log(randomNumber)
    }
}

setTimeout (ciclo(), 1000)







// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// array dove salvare dati inseriti da utente
//  prompt