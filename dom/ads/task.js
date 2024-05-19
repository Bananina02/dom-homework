const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let activeIndex = 0;

setInterval(() => {
    rotator[activeIndex].classList.remove('rotator__case_active');
    activeIndex = (activeIndex + 1) % rotator.length;
    rotator[activeIndex].classList.add('rotator__case_active');
}, 1000);