const BurgerMenu = () => {
    document.getElementById("burger-line-1").classList.toggle('burger-menu-line-1-open')
    document.getElementById("burger-line-2").classList.toggle('burger-menu-line-2-open')
    document.getElementById("burger-line-3").classList.toggle('burger-menu-line-3-open')
    document.getElementById("navbar-opened-id").classList.toggle('navbar-opened-toggle')
}

const navBarBlack = () => {

    const navBarCont = document.getElementById("navbar-cont-id")
    console.log(window.screenY);
    if(window.scrollY >= 120){
        navBarCont.className='navbar-cont navbar-cont-black'
    } else {
        navBarCont.className='navbar-cont navbar-cont-transparent'
    }

}


window.addEventListener("scroll", navBarBlack);