// SCROLL UP //

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.goTop__container')
        .classList.add('show');
    }else{
        document.querySelector('.goTop__container')
        .classList.remove('show');
    }   
}

document.querySelector('.goTop__container')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});