// object.addEventListner(event,function)
// myDiv.addEventListener("click",doSomething)
// function doSomething(e){
//     console.log(e.type) //click
//     console.log(e.target)
//     return 7;
// }

document.addEventListener("DOMContentLoaded",eventListeners);
function eventListeners(){

// Use a Function Declaration
let btn= document.getElementById("btn");
btn.addEventListener("click", buttonClicked);


// Use a Function Declaration
let link= document.getElementById("link")
link.addEventListener("click",linkClicked);
function linkClicked(e){
    e.preventDefault();//Will prevent the link to be followed.
    console.log(e.type, e.target, e.currentTarget)
}

// YOU CAN ALSO USE AN ANNONYMOUS FUNCTION LIKE THIS
// let link= document.getElementById("link")
link.addEventListener("click",function(e){
    e.preventDefault();//Will prevent the link to be followed.
    console.log(e.type, e.target, e.currentTarget)   
})
// USE ES6 SYNTAX
// let link= document.getElementById("link")
link.addEventListener("click",(e)=>{
    e.preventDefault();//Will prevent the link to be followed.
    console.log(e.type, e.target, e.currentTarget)   
})

// Use a  Function Declaration
let txt= document.getElementById("txt")
txt.addEventListener("txt",inputComplete)
function inputComplete(e){
    console.log(e.target, e.target.value)
}

// 
txt.addEventListener("input",(e)=>{
    console.log(e.type, e.target, e.currentTarget)
})
txt.addEventListener("change",(e)=>{
    console.log(e.type, e.target, e.currentTarget)
})
txt.addEventListener("blur",(e)=>{
    console.log(e.type, e.target, e.currentTarget)
})

//Use an annonymous Function
txt.addEventListener("click", function(e){
    console.log(e.target, e.target.value)
})

// Use ES6 syntax
txt.addEventListener("click",(e)=>{
    console.log(e.target, e.target.value)
})

}
function buttonClicked(e){
    // console.log(e.type)
    console.log(e.type, e.target, e.currentTarget)
}
