window.onload = () =>{
    //changement sur le lien actif
    const currentUrl = window.location.href;
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const menuItem = item.querySelector('a');
        const linkUrl = menuItem.getAttribute('href');

        if (currentUrl.endsWith(linkUrl)) {
            item.classList.add('active');
            item.style.backgroundColor = "#efefef";
        }
    })


    //affichage du menu déroulant
    var content = document.querySelectorAll('.content')
    var navIcon = document.getElementById('nav-icon')
    var navLeft = document.querySelector('.left')
    navIcon.onclick = () =>{
        navLeft.classList.toggle('block')
        navLeft.style.zIndex = 998
        content.style.zIndex = 997
    }


    displayAnimation()
    showSkills()

}