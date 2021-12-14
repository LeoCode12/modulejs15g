/**
 * Comprobar si el titulo tiene class
 * Si si,  comprobar:
 * Si tiene clase2
 * ---Agregar class2
 * Si no:
 * ---Agregar clase custom
 */

if (document.querySelector('#head__title').hasAttribute('class')) {
    if (document.querySelector('#head__title').getAttribute('class') === 'clase1 clase2') {
        document.querySelector('#head__title').classList.add('clase3')
    }else{
        document.querySelector('#head__title').classList.add('custom')
    }
}