const font = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book__content');

font.forEach((el, index) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        font.forEach(elem => elem.classList.remove('font-size_active')); 
        el.classList.add('font-size_active'); 
        if(el.classList.contains('font-size_small')){
            book.classList.remove('book_fs-big')
            book.classList.add('book_fs-small')
        } else if(el.classList.contains('font-size_big')){
            book.classList.remove('book_fs-small')
            book.classList.add('book_fs-big')
        } else{
            book.classList.remove('book_fs-small')
            book.classList.remove('book_fs-big')
        }
    });
});
