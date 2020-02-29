const text = ["Website", "Apps", "Game"]
    let count = 0
    let index = 0
    let anggotaText = ""
    let huruf = ""
    if(count === text.length) {
        count = 0
    }
(function type(){
    if(count === text.length) {
        count = 0
    }
    anggotaText = text[count]
    huruf = anggotaText.slice(0,index++)
    document.querySelector(".typing").textContent = huruf
    if(huruf.length === anggotaText.length){
        count++
        index = 0
    }
    setTimeout(type,550)
}())

var mouseCursor = document.querySelector('.cursor')
var navLinks = document.querySelectorAll('.nav-links a')

window.addEventListener('mousemove', cursor)

function cursor(e){
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-change')
        link.style.color = 'rgb(25,25,25)'
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-change')
        link.style.color = 'rgb(238,238,238)'
    })
})