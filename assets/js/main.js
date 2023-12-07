window.onload = () =>{


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





    var navIcon = document.getElementById('nav-icon')
    var navLeft = document.querySelector('.left')
    navIcon.onclick = () =>{
        navLeft.classList.toggle('block')
    }
}