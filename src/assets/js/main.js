import Swiper from 'swiper'
import {Navigation} from "swiper/modules"

const swiper = new Swiper('.slider__inner', {
    modules: [Navigation],
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
    },
    loop: true
})

const menu = document.querySelector('.menu__list')
const menuBtn = document.querySelector('.menu-button')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})