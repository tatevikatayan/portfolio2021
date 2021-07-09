
const menuClose = document.querySelector('.menu__close');
const nav = document.querySelector('.nav');
const navWrapper = document.querySelector('.nav__wrapper');
const footerItem = document.querySelectorAll('.footer__item');

menuClose.addEventListener('click', function(e) {
  

    this.classList.toggle('active');
    if(this.classList.contains('active')){
        nav.style.display = 'block';
        navWrapper.classList.add('shade');
        disableScroll();
    }else{
        this.classList.remove('active');
        nav.style.display = 'none';
        navWrapper.classList.remove('shade');
        enableScroll();
    }
});
const disableScroll = () => {
            document.body.dbScrollY = window.scrollY;
            const widthScroll = window.innerWidth - document.body.offsetWidth;
            document.body.style.cssText= `
            position: fixed;
            width: 100%;
            top: ${-window.scrollY}px;
            left: 0;
            height: 100vh;
            overflow: hidden;
            padding-right: ${widthScroll}px`;
        
        }
const enableScroll = () => {
            document.body.style.cssText="";
            window.scroll({
                top: document.body.dbScrollY,
            })
        }
navWrapper.addEventListener('click', event => {
    const target = event.target;
    if(target.classList.contains('shade')){
        menuClose.classList.remove('active');
        nav.style.display = 'none';
        navWrapper.classList.remove('shade');
        enableScroll();
    }
    
});


    footerItem.forEach(item => {
        item.addEventListener('click', function(e){
            this.children[1].classList.toggle('ulhide');
        });
});

let sweetch = document.querySelector('.sweetch');
let body = document.querySelector('body');

sweetch.onclick = function(){
    sweetch.classList.toggle('active');
    body.classList.toggle('dark');
}





