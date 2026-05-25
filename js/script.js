function clickmenu() {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("aberto");
}

// SLIDER MAIS VENDIDOS 
const containerMaisVendidos = document.querySelector('.container-mais-vendidos');
const sliderMaisVendidos = document.querySelector('.slider-container-mais-vendidos');

sliderMaisVendidos.querySelector('#btn-voltar').addEventListener('click', () => {
    containerMaisVendidos.scrollLeft -= 200;
});

sliderMaisVendidos.querySelector('#btn-anterior').addEventListener('click', () => {
    containerMaisVendidos.scrollLeft += 200;
});

// LABIOS 
const containerLabios = document.querySelector('.container-labios');
const sliderLabios = document.querySelector('.slider-container-labios');

sliderLabios.querySelector('#btn-voltar-labios').addEventListener('click', () => {
    containerLabios.scrollLeft -= 200;
});

sliderLabios.querySelector('#btn-anterior-labios').addEventListener('click', () => {
    containerLabios.scrollLeft += 200;
})


// ROSTO
const containerRosto = document.querySelector('.container-rosto');
const sliderRosto = document.querySelector('.slider-container-rosto');

sliderRosto.querySelector('#btn-voltar-rosto').addEventListener('click', () => {
    containerRosto.scrollLeft -= 200;
});

sliderRosto.querySelector('#btn-anterior-rosto').addEventListener('click', () => {
    containerRosto.scrollLeft += 200;
})

// OLHOS
const containerOlhos= document.querySelector('.container-olhos');
const sliderOlhos = document.querySelector('.slider-container-olhos');

sliderOlhos.querySelector('#btn-voltar-olhos').addEventListener('click', () => {
    containerOlhos.scrollLeft -= 200;
});

sliderOlhos.querySelector('#btn-anterior-olhos').addEventListener('click', () => {
    containerOlhos.scrollLeft += 200;
})

// PINCEIS
const containerPinceis = document.querySelector('.container-pinceis');
const sliderPinceis = document.querySelector('.slider-container-pinceis');

sliderPinceis.querySelector('#btn-voltar-pinceis').addEventListener('click', () => {
    containerPinceis.scrollLeft -= 200;
});

sliderPinceis.querySelector('#btn-anterior-pinceis').addEventListener('click', () => {
    containerPinceis.scrollLeft += 200;
});

//BOTÃO MOSTRA MAIS PRODUTOS
function mostrarMais() {
    const olhos = document.getElementById('secao-olhos');
    const pinceis = document.getElementById('secao-pinceis');
    const btn = document.querySelector('.btn-mostra-mais button');

    if (olhos.style.display === 'none') {
        olhos.style.display = 'block';
        pinceis.style.display = 'block';
        btn.textContent = 'Mostrar Menos'; 
    } else {
        olhos.style.display = 'none';
        pinceis.style.display = 'none';
        btn.textContent = 'Mostrar Mais Produtos'; 
    }
}