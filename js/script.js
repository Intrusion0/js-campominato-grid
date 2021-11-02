// Griglia Campo Minato

/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).
*/

/*

--DONE  1. Genero la griglia di gioco con le varie celle in base alla difficoltà selezionata => for
    --DONE  1.2 Se seleziona "Facile" (difficoltà 1), eseguirò un ciclo for che si ripeterà 100 volte, visto che dovrò stampare 100 celle. => for i < 100
    --DONE  1.2 Se seleziona "Medio" (difficoltà 2), eseguirò un ciclo for che si ripeterà 81 volte, visto che dovrò stampare 81 celle. => for i < 81
    --DONE  1.3 Se seleziona "Difficile" (difficoltà 3), eseguirò un ciclo for che si ripeterà 49 volte, visto che dovrò stampare 49 celle. => for i < 49
--DONE  2. Creo un elemento => "div"
--DONE  3. Aggiungo una classe all'elemento creato => classList.add("square")
--DONE  4. Appendo l'elemento con la classe alla variabile che fa riferimento all'id di un tag html => .append 
--DONE  5. Creo un evento al click della cella, in modo che si colora quando viene selezionata
    --DONE  5.1 Creo una funzione => function squareActive()
    --DONE  5.2 Aggiungo una classe all'elemento creato precedentemente ("div") => div.append("square-active")

*/

const gridCont = document.getElementById("grid");
const easyGame = document.getElementById("easy-btn");
const mediumGame = document.getElementById("medium-btn");
const difficultGame = document.getElementById("difficult-btn");
const mySquare = document.querySelector(".square");

let difficult = 100;
let classes = 'easy';
easyGame.addEventListener("click", function() {
    difficult = 100;
    let classes = 'easy';
    play(difficult, classes);
});

mediumGame.addEventListener("click", function() {
    difficult = 100;
    let classes = 'medium';
    play(difficult, classes);
});


difficultGame.addEventListener("click", function() {
    difficult = 100;
    let classes = 'difficult';
    play(difficult, classes);
});


function play(difficult, classes) {

    if (document.querySelectorAll('.square').length) {
    for (let j = 0; j < 100; j++) {
        document.querySelector('.square').remove();
    }}
    
    for (let i = 0; i < difficult; i++) {
        let squareCont = generateElement("div", "square", "square-" + classes);
        squareCont.addEventListener("click",
            function() {
                this.classList.add("square-active");
            }
        );
        gridCont.appendChild(squareCont);
    }
}




// FUNZIONI

// Permette di creare un elemento e aggiungere fino a 2 classi.
const generateElement = (inputElement, inputClass, inputClassPlus) => {
    let myCreateElement = document.createElement(inputElement); 
    myCreateElement.classList.add(inputClass, inputClassPlus);
    return myCreateElement
}