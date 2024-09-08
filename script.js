const root = document.documentElement;
const dark = document.querySelector('#dark')

dark.addEventListener('change', ()=>{
    if(!dark.checked){
        root.style.setProperty('--bgcolor', '')
        root.style.setProperty('--bgcolor2', '')
        root.style.setProperty('--color2', '')
        return;
    }
    root.style.setProperty('--bgcolor', '#1b1b1b')
    root.style.setProperty('--bgcolor2', '#2b2b2b')
    root.style.setProperty('--color2', '#f0f0f0')
})

//menu
const menu = document.querySelector('#burger-tags')
const menuBtn = document.querySelector('#burger-btn')

function menuOn(){
    menu.style.transform = 'scale(1)'
    menu.style.right = '0'
}
function menuOff(){
    menu.style.transform = ''
    menu.style.right = ''
}
menuBtn.addEventListener('change', ()=>{
    if(!menuBtn.checked){
        menuOff() 
        return
    }
    menuOn()
})

//scroll
const enlacesHeader = document.querySelectorAll('header a', '#hero .btns a');
    enlacesHeader.forEach(enlace => {
        enlace.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace siga el href #

            const targetId = this.getAttribute('href'); // Obtiene el ID del destino del enlace
            const targetElement = document.querySelector(targetId); // Selecciona el elemento destino

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Hace scroll suavemente hacia el elemento destino
            }
        });
    });