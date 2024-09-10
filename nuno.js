const open = document.querySelector('.open')
const close = document.querySelector('.close')
const responsive = document.querySelector('.responsive')

open.addEventListener('click',()=>{
     if(responsive.classList.contains('responsive')){
        responsive.classList.remove('responsive')
        responsive.style.display = "none"
        // open.style.display = "none"
    }
    else{
        responsive.classList.add('responsive')
        responsive.style.display = "block"
        // close.style.display = "block"
    }
})

   