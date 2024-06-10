// funzionalità per il carosello


// devo ricreare i div con le immagini, perché se il mio DB aumenta o diminuisce questo si modifica in automatico


// creao il mio array con le immagini al loro interno (poi andrà a prenderlo da un DB esterno)

const imagineArray = [
    "img/01.webp", 
    "img/02.webp", 
    "img/03.webp", 
    "img/04.webp", 
    "img/05.webp"
];

//richiamo il contenitore dove andrò ad inserire i DIV
let containerCard = document.querySelector(".card_container");


// prendo i singoli elementi del mio array -> ciclo FOR
for(i = 0; i< imagineArray.length; i++){
    console.log(imagineArray[i]);

    // per ogni "i" questo ciclo mi deve creare un div con le immagini
    let card = `<div class="item">
                    <img src=${imagineArray[i]} alt="">
                 </div>`;

    // dove metto questo div? Nel mio contenitore che è il [div class="col"] quindi aggiungo a riga 18 il richiamo del div

    // inserisco il div nel contenitore
    containerCard.innerHTML += card;
    // vedo che mi si creano sotto le freccie, quindi faccio un ulteriore contenitore
}

// ho creato i miei div e ora devo mettere l'active al primo div che poi al click passerà al successivo e così via

// visto che sono tanti e non posso farlo manualmente creerò anche qua un array -> getElemnts!

const cardItem = document.getElementsByClassName("item");
console.log(cardItem);

// in questo modo seleziono il div numero 4 (quello col gatto)
console.log(cardItem[3]);

// inserisco la classe active di prova:
// cardItem[3].classList.add("active");

// non potendo cambiare i numeri a mano creo una variabili per andare ad indicare l'indice 
let indexCardItem = 0; //lo setto a 0 come valore iniziale

cardItem[indexCardItem].classList.add("active");