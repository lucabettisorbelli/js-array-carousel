let ArrayImmagini = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
];

let box = document.querySelector(".box");

for (let i = 0; i < ArrayImmagini.length; i++) {
    let img = document.createElement("img");   
    img.src = ArrayImmagini[i];  
    img.classList.add("slide");  // applica classe slide a img
    // Nascondi tutte le immagini tranne la prima
    if (i > 0) { 
        img.classList.add("hidden");
    }
    box.appendChild(img);  // elemento creato nel DOM dentro ".box"
}

let slides = document.getElementsByClassName("slide");
let btnBack = document.getElementById("btnBack");
let btnNext = document.getElementById("btnNext");
let immagineCorrente = 0;

btnBack.addEventListener("click", function () {
    if (immagineCorrente > 0) {
        immagineCorrente--;
    } else {
        immagineCorrente = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        
        if(i == immagineCorrente) {
            slide.classList.remove("hidden");
        } else {
            slide.classList.add("hidden");
        }
    }
})

btnNext.addEventListener("click", function () {
    if (immagineCorrente < slides.length - 1) {
        immagineCorrente++;
    } else {
        immagineCorrente = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        
        if(i == immagineCorrente) {
            slide.classList.remove("hidden");
        } else {
            slide.classList.add("hidden");
        }
    }
})