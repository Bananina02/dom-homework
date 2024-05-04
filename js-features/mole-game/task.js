let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let deadCounter = 0;
let lostCounter = 0;
let holes = document.querySelectorAll('.hole');
holes.forEach((hole, index) => {
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            if (deadCounter === 9) { 
                lostCounter = 0;
                deadCounter = 0;
                alert('Ты победил!');
            } else {
                deadCounter++;
            }
            dead.textContent = deadCounter;
        } else {
            if (lostCounter === 4) { 
                lostCounter = 0;
                deadCounter = 0;
                alert('Ты проиграл!');
            } else {
                lostCounter++;
            }
            lost.textContent = lostCounter;
        }
    }
});
