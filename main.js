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
    })
    link.addEventListener('mouseleave', function () {
        mouseCursor.classList.remove('cursor-change')
        link.style.color = 'rgb(238,238,238)'

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

var clicked = false
var burgerLine1 = document.querySelector('#line1')
var burgerLine2 = document.querySelector('#line2')
var burgerLine3 = document.querySelector('#line3')

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
    var hidden = document.querySelector('.hidden')
    var hiddenExist = window.innerHeight*1.5
    var hiddenAppear = hiddenExist/1.3
    if(distanceToTop<hiddenExist){
        hidden.style.display = 'block'
    }
    else if(distanceToTop>hiddenExist){
        hidden.style.display = 'none'
    }
    if(distanceToTop<hiddenAppear){
        hidden.style.opacity = '1'
    }
    else if(distanceToTop>hiddenAppear){
        hidden.style.opacity = '0'
        hidden.style.transform = 'translateX(83%)'
        clicked = false
        burgerLine1.style.transform ='rotate(0deg)'
        burgerLine2.style.opacity = '1'
        burgerLine3.style.transform ='rotate(0deg)'
    }
 }

 window.addEventListener('scroll', Appear)


 function unhide(){
    var burger = document.querySelector('.burger')
    var hidden = document.querySelector('.hidden')
    var links = document.querySelectorAll('.nav-hidden a')
    var mouseCursor = document.querySelector('.cursor')
    burger.addEventListener('click', function(){
        if (clicked == false){
            hidden.style.transform = 'translateX(0%)'
            clicked = true
            burgerLine1.style.transform ='rotate(-45deg) translate(-10px,10px)'
            burgerLine2.style.opacity = '0'
            burgerLine3.style.transform ='rotate(45deg) translate(-10px,-10px)'
        }
        else {
            hidden.style.transform = 'translateX(83%)'
            clicked = false
            burgerLine1.style.transform ='rotate(0deg)'
            burgerLine2.style.opacity = '1'
            burgerLine3.style.transform ='rotate(0deg)'
        }
    })
    burger.addEventListener('mouseover', function () {
        mouseCursor.classList.add('cursor-change2')
    })
    burger.addEventListener('mouseleave', function () {
        mouseCursor.classList.remove('cursor-change2')
    })
    links.forEach(function(link){
        link.addEventListener('click',function(){
            hidden.style.transform = 'translateX(83%)'
            clicked = false
            burgerLine1.style.transform ='rotate(0deg)'
            burgerLine2.style.opacity = '1'
            burgerLine3.style.transform ='rotate(0deg)'
        })
        link.addEventListener('mouseenter', function () {
            mouseCursor.classList.add('cursor-change2')
            link.style.opacity ='1'
        })
        link.addEventListener('mouseleave', function () {
            mouseCursor.classList.remove('cursor-change2')
            link.style.opacity ='0.7'
        })
    })

}

unhide()