const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'))
function tabSwitch(event){
    const clickedTab = event.currentTarget;
    tab.forEach(el => {
        el.classList.remove('tab_active')
    });
    clickedTab.classList.add('tab_active')
    tabContent.forEach((el,index) => {
        el.classList.remove('tab__content_active')
        if(index === tab.indexOf(clickedTab)){
            el.classList.add('tab__content_active')
        }
    })

}
tab.forEach(el =>{
    el.addEventListener('click', tabSwitch)
})