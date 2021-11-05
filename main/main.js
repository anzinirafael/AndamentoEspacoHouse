/*Importação da biblioteca swiper para criação do corrocel */
/*Declaração de constantates para selecionar os elementos do documento html*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
/*Enquando houver elemento dentro de toggle cada vez que houver um evento de click
realiza a função de abrir e fechar o menu de navegação*/
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/*Enquanto houver um item link dentro de links cada vez que o link for disparado
o evento de click é disparada a função para fechar o menu de navegação*/
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/*Cada vez em que ocorrer um evento de scroll é disparada a função que irá
habilitar o scroll do eixo vertical dentro da aplicação, cada vez que o scroll
estiver em repouso a barra de scroll do eixo vertical será escondida*/
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
/*Carrocel com os testemunhos da cliente do salão de beleza com swiper */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1, 
    pagination:{
      el:".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true
  }
);

