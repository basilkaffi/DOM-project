//kursor bulat

var mouseCursor = document.querySelector('.cursor')
var navLinks = document.querySelectorAll('.nav-links a')

window.addEventListener('mousemove', cursor)

function cursor(e){
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
}


//hover nav link

navLinks.forEach(function(link) {
    link.addEventListener('mouseover', function () {
        mouseCursor.classList.add('cursor-change')
        link.style.color = 'rgb(34,40,49)'
        link.style.fontSize = '25px'
    })
    link.addEventListener('mouseleave', function () {
        mouseCursor.classList.remove('cursor-change')
        link.style.color = 'rgb(238,238,238)'
        link.style.fontSize = '16px'
    })
})


//tampilan mengetik

const text = ["Website ", "Games ", "Apps "]
let count = 0
let index = 0
let textMember = ""
let letter = ""
if(count === text.length) {
    count = 0
}
(function type(){
    if(count === text.length) {
        count = 0
    }
    textMember = text[count]
    letter = textMember.slice(0,index++)
    document.querySelector(".typing").textContent = letter
    if(letter.length === textMember.length){
        count++
        index = 0
    }
    setTimeout(type,550)
}())


//tampilan appear

function Appear(){
    var appearing = document.querySelector('.appear')
    var distanceToTop = appearing.getBoundingClientRect().top
    var positionAppear = window.innerHeight/1.3
    if(distanceToTop<positionAppear){
        appearing.style.opacity = '1'
        appearing.style.transform = 'translateY(0px)'
    }
    else if(distanceToTop>positionAppear*1.3){
     appearing.style.opacity = '0'
     appearing.style.transform = 'translateY(20px)'
    }
    var burger = document.querySelector('.burger')
    var burgerExist = window.innerHeight*1.5
    var burgerAppear = burgerExist/1.3
    if(distanceToTop<burgerExist){
        burger.style.display = 'block'
    }
    else if(distanceToTop>burgerExist){
        burger.style.display = 'none'
    }
    if(distanceToTop<burgerAppear){
        burger.style.opacity = '1'
    }
    else if(distanceToTop>burgerAppear){
     burger.style.opacity = '0'
    }
 }

 window.addEventListener('scroll', Appear)