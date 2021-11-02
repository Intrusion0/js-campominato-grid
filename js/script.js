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

1. Genero la griglia di gioco con le varie celle in base alla difficoltà selezionata => for
    1.2 Se seleziona "Facile" (difficoltà 1), eseguirò un ciclo for che si ripeterà 100 volte, visto che dovrò stampare 100 celle. => for i < 100
    1.2 Se seleziona "Medio" (difficoltà 2), eseguirò un ciclo for che si ripeterà 81 volte, visto che dovrò stampare 81 celle. => for i < 81
    1.3 Se seleziona "Difficile" (difficoltà 3), eseguirò un ciclo for che si ripeterà 49 volte, visto che dovrò stampare 49 celle. => for i < 49
2. Creo un evento al click della cella, in modo che si colora quando viene selezionata
    2.1 Creo una funzione all'interno del ciclo => function squareActive()
        2.1.1 Creo un elemento => "div"
        2.1.2 Aggiungo una classe all'elemento creato => classList.add("square")
        2.1.3 Appendo l'elemento con la classe alla variabile che fa riferimento all'id di un tag html => .append 

*/

console.log("Eccomi, sono Campo Minato!!");