const menu = document.querySelector('.dropdown__list');
const arrayDropdown = Array.from(document.querySelectorAll('.dropdown__link'))
const dropDown = document.querySelector('.dropdown_link')
const dropValue = document.querySelector('.dropdown__value')

function openMenu(){
    if(menu.classList.contains('dropdown__list_active')){
        menu.classList.remove('dropdown__list_active')
    } else{
        menu.classList.add('dropdown__list_active')
    }
}
function value(e){
    e.preventDefault()
    dropValue.textContent = this.textContent;
    menu.classList.remove('dropdown__list_active')
}
document.querySelector('.dropdown__value').addEventListener('click', openMenu)
arrayDropdown.forEach(el => {
    el.addEventListener('click', value)
})