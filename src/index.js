import './default.scss'

const teub = document.querySelector('.teub');

teub.addEventListener('click', ()=> {
    teub.style.marginLeft = '-100%'
})

const graf = document.querySelector('.graf');
const teubdeu = document.querySelector('.teubdeu');

graf.addEventListener('click', ()=> {
    graf.style.marginLeft = '-200%';
    teubdeu.style.marginLeft ='-200%';
})