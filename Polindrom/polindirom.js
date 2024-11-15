const myform=document.querySelector("#myform")
const checkanswer=document.querySelector("#checkanswer")
const myinp=document.querySelector("#myinp")
let terseded=122


myform.addEventListener("submit",function (e) {
    e.preventDefault()
    if (myinp.value===terseded) {
        console.log("salam");
        
    }
    
    
})