//Selecionando elementos do menu mobile
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

// selecionar os elementos dos slides
const slides = document.querySelectorAll (".banner"); //selecionou todos os 'classbanners' do html

const dots = document.querySelectorAll(".dot");
//variavel de controle
let slideIndex = 1;

function showSlides(){
    console.log(slides)
    for(let i=0; i < slides.length; i++){
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }

    slideIndex++; //avançando a variavel de 1 para 2 (++)
    if(slideIndex > slides.length){
        slideIndex = 1;

    }
    console.log(slideIndex)
    console.log(slides[slideIndex -1])
    slides[slideIndex -1].classList.add("active")
    dots[slideIndex -1].classList.add("active")
    setTimeout(showSlides, 3000) // 3 segundo é 3000 ação que realiza a rotação entre o slide 
    

}


// //Ativar Menu Mobile
// // menuBtn.addEventListener("click", (e) =>{   //mesma coisa que: function (){ , arrow function , function default // (e) é o (event)
//     menu.classList.add("menu-active")

// });

// closeMenuBtn.addEventListener("click", (e) =>{
//     menu.classList.add("menu-active")

// });
//Fechar menu
// about.addEventListener("click", (e) =>{
//     menu.classList.add("menu-active")

// });

[menuBtn, closeMenuBtn], forEach( (btn) =>{
    btn.addEventListener("click", (e) =>{
        menu.classList.toggle("menu-active")  //toggle propriedade do javascript que sig. alternar entre os menus
    })
    
})






//Inicialização //chamando função p/ executar
showSlides()













































































































































// DOM
// Navegar no documento html do person hardman
// const brand = document.querySelector("#brand"); //#brand no html é o id // estou armazenando na minha variavel brand o elemento id html

// brand.addEventListener('click', function(event){ //função atribuida ao meu elemento h2 - escuta algum evento que ocorre na brand (mouse move, dobble click e etc)
    // console.log("testando o click")
    // console.log(event.target);
    // event.target.style.color = "blue"; // Troca de cor da palavra dentro do html passando pelo CSS mas que teve ação do javascript


// });
