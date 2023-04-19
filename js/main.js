let ArrayImmagini = document.getElementsByClassName("slide");
let btnBack = document.getElementById("btnBack");
let btnNext = document.getElementById("btnNext");
let immagineCorrente = 0;

btnBack.addEventListener("click", function () {
    // al click, se l'immagine visualizzata è maggiore di 0 (la prima immagine) allora scala di una, altrimenti (meno di 0) ritorna all'ultima (4)
    if (immagineCorrente > 0) {
        immagineCorrente--;
    } else {
        immagineCorrente = 4;
    }

    for (let i = 0; i < ArrayImmagini.length; i++) {
        const slide = ArrayImmagini[i];
        
        if(i == immagineCorrente) {
            slide.classList.remove("hidden");
        } else {
            slide.classList.add("hidden");
        }
    }
})

// prova in lezione con Luca

// btnBack.addEventListener("click", function () {
//     if (immagineCorrente>0) {
//     for (let i = 0; i < ArrayImmagini.length; i++) {
//         const slide = ArrayImmagini[i];
        
//         if(i == immagineCorrente-1) {
//             slide.classList.remove("hidden");
//         } else {
//             slide.classList.add("hidden");
//         }
//     }
//     } else {
        
//     }

    // immagineCorrente--;
// })

btnNext.addEventListener("click", function () {
    // se l'immagine corrente è minore della lunghezza dell'Array(-1), aumenta di uno, ritorna a 0; 
    if (immagineCorrente < ArrayImmagini.length -1) {
        immagineCorrente++;
    } else {
        immagineCorrente = 0;
    }

    for (let i = 0; i < ArrayImmagini.length; i++) {
        const slide = ArrayImmagini[i];
        
        if(i == immagineCorrente) {
            slide.classList.remove("hidden");
        } else {
            slide.classList.add("hidden");
        }
    }
})

//prova in lezione con Luca

// btnNext.addEventListener("click", function () {
//     if (immagineCorrente<4) {
//     for (let i = 0; i < ArrayImmagini.length-1; i++) {
//         const slide = ArrayImmagini[i];
        
//         if(i == immagineCorrente+1) {
//             slide.classList.remove("hidden");
//         } else {
//             slide.classList.add("hidden");
//         }
//     }
//     }

//     immagineCorrente++;
// })

