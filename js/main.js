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
let containerCard = document.querySelector(".col");


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

}