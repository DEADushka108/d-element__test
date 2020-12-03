import '../styles/style.scss'
import { openModal } from './modal.js'
import { toggleMenu } from './nav.js'

/**
 *
 * @param {File} r loaded file for svg sprite
 */
const requireAll = (r) => r.keys().forEach(r)
requireAll(require.context('../img/icons', true, /\.svg$/))

const button = document.querySelector('.page-footer__button')
const btnMenu = document.querySelector('.main-nav__toggle')
const siteMenu = document.querySelector('.main-nav__list')
const pageHeader = document.querySelector('.page-header')

button.addEventListener('click', (evt) => {
  evt.preventDefault()
  openModal()
})

btnMenu.classList.remove('main-nav__toggle--nojs')
btnMenu.classList.toggle('main-nav__toggle--close')
siteMenu.classList.toggle('main-nav__list--open')
toggleMenu(btnMenu, siteMenu, pageHeader)
