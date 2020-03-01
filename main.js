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
    var imageSlider = document.querySelector('.image-container')
    const imageNext = document.querySelector('.nextBtn img')
    const imagePrev = document.querySelector('.prevBtn img')
    var distanceToTopSlider = imageSlider.getBoundingClientRect().top
    if(distanceToTopSlider<positionAppear/1.4){
        imageSlider.style.opacity = '1'
        imageSlider.style.transform = 'translateY(0px)'
        imageNext.style.opacity = '0.4'
        imageNext.style.transform = 'translateX(0px)'
        imagePrev.style.opacity = '0.4'
        imagePrev.style.transform = 'translateX(0px)'
    }
    else if(distanceToTopSlider>positionAppear*1.3){
     imageSlider.style.opacity = '0'
     imageSlider.style.transform = 'translateY(70px)'
     imageNext.style.opacity = '0'
     imageNext.style.transform = 'translateX(-50px)'
     imagePrev.style.opacity = '0'
     imagePrev.style.transform = 'translateX(50px)'
    }
 }

 window.addEventListener('scroll', Appear)


 function unhide(){
    var burger = document.querySelector('.burger')
    var hidden = document.querySelector('.hidden')
    var navHidden = document.querySelector('.nav-hidden')
    var links = document.querySelectorAll('.nav-hidden a')
    const buttonContainer = document.querySelector('.button')
    navHidden.addEventListener('mouseover',function(){
        buttonContainer.style.zIndex = '-1'
        mouseCursor.style.zIndex = '3'
    })
    navHidden.addEventListener('mouseleave',function(){
        buttonContainer.style.zIndex = '0'
        mouseCursor.style.zIndex = '-1'
        mouseCursor.classList.remove('cursor-change2')
    })
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
            link.style.transform = 'translateY(-8px)'
        })
        link.addEventListener('mouseleave', function () {
            mouseCursor.classList.remove('cursor-change2')
            link.style.transform = 'translateY(0px)'
        })
    })

}
unhide()


const imageSlider = document.querySelector('.image-slider')
const images = document.querySelectorAll('.image-slider img')
const prevBtn = document.querySelector('.prevBtn')
let counter = 1
const nextBtn = document.querySelector('.nextBtn')
const buttonContainer = document.querySelector('.button')
const width = images[0].clientWidth
imageSlider.style.transform ='translateX('+(-width*counter)+'px)'


nextBtn.addEventListener('click',function(){
    if(counter >= images.length - 1) return
    imageSlider.style.transition = "transform 0.4s ease"
    counter++
    imageSlider.style.transform ='translateX('+(-width*counter)+'px)'
})
prevBtn.addEventListener('click',function(){
    if(counter <= 0) return
    imageSlider.style.transition = "transform 0.4s ease"
    counter--
    imageSlider.style.transform ='translateX('+(-width*counter)+'px)'
})

const imageNext = document.querySelector('.nextBtn img')
const imagePrev = document.querySelector('.prevBtn img')
nextBtn.addEventListener('mouseover', function () {
    mouseCursor.classList.add('cursor-change2')
    imageNext.style.opacity = '0.9'
})
nextBtn.addEventListener('mouseleave', function () {
    mouseCursor.classList.remove('cursor-change2')
    imageNext.style.opacity = '0.4'
})
prevBtn.addEventListener('mouseover', function () {
    mouseCursor.classList.add('cursor-change2')
    imagePrev.style.opacity = '0.9'
})
prevBtn.addEventListener('mouseleave', function () {
    mouseCursor.classList.remove('cursor-change2')
    imagePrev.style.opacity = '0.4'
})
imageSlider.addEventListener('transitionend',function(){
    if(images[counter].id == 'last-clone'){
        imageSlider.style.transition = 'none'
        counter = images.length - 2
        imageSlider.style.transform ='translateX('+(-width*counter)+'px)'
    }
    if(images[counter].id == 'first-clone'){
        imageSlider.style.transition = 'none'
        counter = images.length - counter
        imageSlider.style.transform ='translateX('+(-width*counter)+'px)'
    }
})

(function button(){
    const project = document.querySelector('.project')
    buttonContainer.style.bottom = project.offsetTop - project.offsetHeight/2.6 +'px'
}())

const masukan = document.querySelector('.kiri')
const contactSection = document.querySelector('.contact')