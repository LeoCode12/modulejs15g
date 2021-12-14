/**Selecionar Elementos
 * 1. Seleccion por ID
 */

// 1. Seleccion por ID
document.getElementById('head__title')
document.getElementsByTagName('li')
document.getElementsByClassName('link__menu')

document.querySelector('#head__title')
document.querySelector('li')
document.querySelector('.link__menu') //Solo devuelve el primero
document.querySelectorAll('.link__menu')

/**
 * Obtener Atributos
 * Setear Atributos
 */

//get
let title = document.querySelector('#head__title').getAttribute('data-title')
console.log(title);
let level = document.querySelector('#head__title').getAttribute('data-level')
console.log(level);

//set
document.querySelector('#head__title').setAttribute('data-custom', 'random')
// document.querySelector('#head__title').setAttribute('class', 'tres cuatro')

//Agregar Clases
document.querySelector('#head__title').classList.add('clase4')
//remover clases
document.querySelector('#head__title').classList.remove('clase1')

//Comprobar si exosten los atributos
document.querySelector('#head__title').hasAttribute('class')

/**Seleccionar padres e hijos */

/** Manipulacion del DOM */

// let ulElement = document.createElement('ul')

// let liFirst = document.createElement('li')
// liFirst.textContent = 'item 1'
// ulElement.appendChild(liFirst)

// let liSecond = document.createElement('li')
// liSecond.textContent = 'item 2'
// ulElement.appendChild(liSecond)

// document.getElementsByTagName('body')[0].appendChild(ulElement)

/**
 * Ejercicio 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */


    let ulMenu = document.createElement('ul')
    ulMenu.classList.add('menu')
    ulMenu.setAttribute('id','menu')
    
    let liMenuHome = document.createElement('li')
    liMenuHome.classList.add('item__menu')
    liMenuHome.textContent = 'Home'
    ulMenu.appendChild(liMenuHome)
    
    let liMenuProducts = document.createElement('li')
    liMenuProducts.classList.add('item__menu')
    liMenuProducts.textContent = 'Products'
    ulMenu.appendChild(liMenuProducts)
    
    let liMenuAboutUs = document.createElement('li')
    liMenuAboutUs.classList.add('item__menu')
    liMenuAboutUs.textContent = 'About Us'
    ulMenu.appendChild(liMenuAboutUs)
    
    document.getElementsByTagName('body')[0].appendChild(ulMenu)