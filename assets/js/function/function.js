//animation du statu/page home
var statusFirst = document.querySelector('.status-first')
var statusSecond = document.querySelector('.status-second')

var getAnimation = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                setInterval(() => {
                    statusFirst.classList.add('block')
                    statusSecond.classList.remove('block')
                }, 4000),
                setInterval(() => {
                    statusFirst.classList.remove('block')
                    statusSecond.classList.add('block')
                }, 8000),
            ])
        }, 9000);
    })
}

var displayAnimation = async () =>{
    await getAnimation();
}






