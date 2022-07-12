const toPage = (pageNumber) => {

    // Get Pages
    const pages = document.getElementsByClassName('pages')
    let allPages = []
    for (let i = 0; i < pages.length; i++) {
        allPages.push(document.getElementById(pages[i].id))
    }

    // Move Pages
    for (let j = 0; j < allPages.length; j++) {
        if(j < pageNumber){
            allPages[j].style.left = '-100vw'
        } else if (j == pageNumber){
            allPages[j].style.left = '0vw'
        } else {
            allPages[j].style.left = '100vw'
        }
    }

    // Close Menu Bar
    document.getElementById("burger-line-1").className = 'burger-menu-line-1'
    document.getElementById("burger-line-2").className = 'burger-menu-line-2'
    document.getElementById("burger-line-3").className = 'burger-menu-line-3'
    document.getElementById("navbar-opened-id").className = 'navbar-opened flex-center'

    // To Top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    //Active Link

    const navbaritems = document.getElementsByClassName('navbar-menu-item')
    for (let k = 0; k < navbaritems.length; k++) {
        if(k == pageNumber){
            navbaritems[k].className = 'navbar-menu-item navbar-menu-item-active'
        } else {
            navbaritems[k].className = 'navbar-menu-item'
        }
    }

}