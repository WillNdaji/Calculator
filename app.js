const toggleBtn = document.getElementById("toggle-btn");
const bodyEl = document.body; // Get the body element
const toggleDiv = document.querySelector(".toggle")

toggleBtn.addEventListener("click", function() {
    toggleBtn.classList.toggle("moved");

    
    if (bodyEl.style.backgroundColor === "rgb(59, 70, 100)") {
        bodyEl.style.backgroundColor = "#d23e35";
        toggleBtn.style.background = "#3b4664"
      

    } else {
        bodyEl.style.backgroundColor = "#3b4664";
        toggleBtn.style.background = "#d23e35"
    }
});


if (toggleBtn.classList.contains("moved")) {
    bodyEl.style.backgroundColor = "#d23e35";
    toggleBtn.style.background = "#3b4664"
} else {
    bodyEl.style.backgroundColor = "#3b4664";
   
    toggleBtn.style.background = "#d23e35"
}




const sevenBtn = document.getElementById("7-btn")
const eightBtn = document.getElementById("8-btn")
const nineBtn = document.getElementById("9-btn")
const delBtn = document.getElementById("del-btn")
const fourBtn = document.getElementById("4-btn")
const fiveBtn = document.getElementById("5-btn")
const sixBtn = document.getElementById("6-btn")
const addBtn = document.getElementById("add-btn")
const oneBtn = document.getElementById("1-btn")
const twoBtn = document.getElementById("2-btn")
const threeBtn = document.getElementById("3-btn")
const subtractBtn = document.getElementById("subtract-btn")
const dotBtn = document.getElementById("dot-btn")
const zeroBtn = document.getElementById("zero-btn")
const divideBtn = document.getElementById("divide-btn")
const multiplyBtn = document.getElementById("multiply-btn")
const resetBtn = document.getElementById("reset-btn")
const equalsBtn = document.getElementById("equals-btn")
let dashText = document.getElementById("dash-text")

const body = document.querySelector("body")


let dashArr = [ ]
dashText.textContent = "0"



sevenBtn.addEventListener("click", function(){
  
    dashArr.push("7")
    dashText.textContent = dashArr.join('')
    console.log(dashArr)
})
eightBtn.addEventListener("click", function(){
    dashArr.push("8")
    dashText.textContent = dashArr.join('')
    console.log(dashArr)
})
nineBtn.addEventListener("click", function(){
    dashArr.push("9")
    dashText.textContent = dashArr.join('')
    console.log(dashArr)
})
fourBtn.addEventListener("click", function(){
    dashArr.push("4")
    dashText.textContent = dashArr.join('')
})
fiveBtn.addEventListener("click", function(){
    dashArr.push("5")
    dashText.textContent = dashArr.join('')
})
sixBtn.addEventListener("click", function(){
    dashArr.push("6")
    dashText.textContent = dashArr.join('')
})
oneBtn.addEventListener("click", function(){
    dashArr.push("1")
    dashText.textContent = dashArr.join('')
})
twoBtn.addEventListener("click", function(){
    dashArr.push("2")
    dashText.textContent = dashArr.join('')
})
threeBtn.addEventListener("click", function(){
    dashArr.push("3")
    dashText.textContent = dashArr.join('')
})
dotBtn.addEventListener("click", function(){
    dashArr.push(".")
    dashText.textContent = dashArr.join('')
})
zeroBtn.addEventListener("click", function(){
    dashArr.push("0")
    dashText.textContent = dashArr.join('')
})

delBtn.addEventListener("click", function(){
    dashArr.pop()
     dashText.textContent =  dashArr.join('')
     console.log(dashArr)
})



resetBtn.addEventListener("click", function(){
    console.log("jdi")
    dashArr = []
    dashText.textContent = "0"
})


addBtn.addEventListener("click", function(a, b){
    dashArr.push("+")
    dashText.textContent = dashArr.join("")
    
})
subtractBtn.addEventListener("click", function(a, b){
    dashArr.push("-")
    dashText.textContent = dashArr.join("")
    
})
multiplyBtn.addEventListener("click", function(a, b){
    dashArr.push("*")
    dashText.textContent = dashArr.join("")
    
})
divideBtn.addEventListener("click", function(a, b){
    dashArr.push("/")
    dashText.textContent = dashArr.join("")
    
})

equalsBtn.addEventListener("click", function() {
    const expression = dashArr.join('');
    const result = math.evaluate(expression);
 
    dashText.textContent = result.toString();
});



























//ALTERNATIVE WAY TO MAKE IT WORK IF
// equalsBtn.addEventListener("click", function() {
//     const expression = dashArr.join('');
//     const result = calculateExpression(expression);
//     dashText.textContent = result.toString();
// });

// function calculateExpression(expression) {
//     try {
//         return new Function('return ' + expression)();
//     } catch (error) {
//         return 'Error';
//     }
// }

