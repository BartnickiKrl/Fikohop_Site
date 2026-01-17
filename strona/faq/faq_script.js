const title = document.querySelectorAll('.title'); 
const text = document.querySelectorAll('.myText'); 
title.forEach((el) => { 
el.addEventListener('click', (e) =>{
        e.preventDefault()
        if( el.nextElementSibling.classList.contains('active') )
        {
            remover();
        }
        else 
        {
            console.log(el.nextElementSibling); 
            remover(); 
            el.nextElementSibling.classList.add('active'); 
        }
    }) 
}); 
function remover() { 
    text.forEach((ele) => { 
        ele.classList.remove('active'); 
    });
}