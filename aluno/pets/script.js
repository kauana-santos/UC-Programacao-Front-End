let btnCachorro = document.getElementById('btn-cao')
let btnGato = document.getElementById('btn-gato')
let imagemPet = document.getElementById('imagem-pet')


btnGato.addEventListener("click", function(){
    let fotoGato = "https://images.pexels.com/photos/19511759/pexels-photo-19511759.jpeg";

    imagemPet.src = fotoGato;
})

btnCachorro.addEventListener("click", function(){
    let fotoCachorro = "https://images.pexels.com/photos/38221522/pexels-photo-38221522.jpeg";

    imagemPet.src = fotoCachorro;
})

let btnBg = document.getElementById('btn-background');
let cores = ['#b37f7f', '#aea8ff', '#ace2f0', '#e785e2'];
let body = document.querySelector('body')


btnBg.addEventListener("click", function() {
        
     body.style.backgroundColor = cores[0]
         
})