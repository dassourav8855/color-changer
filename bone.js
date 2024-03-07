const body= document.querySelector("body")
const buttons= document.querySelectorAll(".button")
buttons.forEach((but)=>{
but.addEventListener('click',(e)=>{

if(e.target.id=='gray'){
    body.style.backgroundColor=e.target.id
}
if(e.target.id=='white'){
    body.style.backgroundColor=e.target.id
}
if(e.target.id=='blue'){
    body.style.backgroundColor=e.target.id
}
if(e.target.id=='yellow'){
    body.style.backgroundColor=e.target.id
}
})
})






