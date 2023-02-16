const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const indexTab = document.getElementById('index-tab')
const hexTab = document.getElementById('hex-tab')
btn.addEventListener('click', function(){
   const randomNumber = getRandomNumber(colors)
   document.body.style.backgroundColor = colors[randomNumber]
   color.textContent = colors[randomNumber]
   color.style.color = colors[randomNumber]
})





function getRandomNumber(arr){
    return Math.floor(Math.random()*arr.length)
}