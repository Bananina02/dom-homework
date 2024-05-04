
let time = document.getElementById('timer');
let count = 59;

function counter() {
    time.textContent = count;
    count--;

    if (count === 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе!');
    }
}

let timer = setInterval(counter, 1000);


