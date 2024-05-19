const reveal = Array.from(document.querySelectorAll('.reveal'));
setInterval(()=>{
    reveal.forEach((el) =>{
        const{top,bottom} = el.getBoundingClientRect();
        if(top < window.innerHeight){
            el.classList.add('reveal_active')
        } else if(bottom < 0){
            el.classList.remove('reveal_active')
        } else {
            el.classList.remove('reveal_active')
        }
    })
},1000)
