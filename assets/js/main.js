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




    var content = document.querySelectorAll('.content')
    var navIcon = document.getElementById('nav-icon')
    var navLeft = document.querySelector('.left')
    navIcon.onclick = () =>{
        navLeft.classList.toggle('block')
        navLeft.style.zIndex = 998
        content.style.zIndex = 997
        content.style.backgroundImage = ("/assets/images/Home-background/Home_background.jpg")
        content.style
    }
 



    var statusFirst = document.querySelector('.status-first')
    var statusSecond = document.querySelector('.status-second')

    statusFirst.style.display = "none"
    statusSecond.style.display = "none"
    setTimeout(() => {
        setInterval(() => {
            statusFirst.style.display = "block"
            statusSecond.style.display = "none"
        }, 4000);
        setInterval(() => {
            statusFirst.style.display = "none"
            statusSecond.style.display = "block"
        }, 8000);
    }, 9000);
    
}