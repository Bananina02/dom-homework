let click = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let speedClick = document.getElementById('speed__counter')
let count = 0;

function changeSizes(){
    if(cookie.width === 200){
        cookie.width = 300
    } else{
        cookie.width = 200
    }
}
cookie.onclick = function(){
    click.textContent = count;
    count++;
    changeSizes();
}