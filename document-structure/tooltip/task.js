const a = Array.from(document.querySelectorAll('.has-tooltip'));
a.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const popup = document.createElement('div');
        popup.textContent = el.getAttribute('title');
        popup.classList.add('tooltip');
        el.appendChild(popup);
        popup.classList.toggle('tooltip_active');
        document.addEventListener('click', (event) => {
            if (event.target !== el) {
                popup.classList.remove('tooltip_active');
            }
        });
    });
});