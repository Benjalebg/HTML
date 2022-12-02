import './default.scss'

const teub = document.querySelector('.teub');

teub.addEventListener('click', ()=> {
    teub.style.marginLeft = '-100%'
})

const graf = document.querySelector('.graf');

graf.addEventListener('click', ()=> {
    teub.style.marginLeft = '-200%'
})