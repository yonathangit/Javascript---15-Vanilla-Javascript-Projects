const btnIncrease = document.querySelector(".increase")
const btnReset = document.querySelector(".reset")
const btnDecrease = document.querySelector(".decrease")
const val = document.getElementById("value")
let count = 0;

btnIncrease.addEventListener("click", function(){
    count++;
    colorChanger()
    val.textContent = count
})

btnDecrease.addEventListener("click", function(){
    count--
    colorChanger()
    val.textContent = count
})

btnReset.addEventListener("click", function(){
    count = 0;
    colorChanger()
    val.textContent = count
})

/*

const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('decrease'){
            count--
        }
        
       else if(styles.contains('increase'){
            count++
        }

        else{
            count = 0
        }
        

        if(count>0){
            value.style.color = "green"
        }
        else if(count < 0){
            value.style.color = "red"
        }
        else{
            value.style.color = "#222"
        }
        )

        value.textContent = count
        )
    })
})

*/



function colorChanger(){
    if(count>0){
        val.style.color = "green"
    }
    else if(count<0){
        val.style.color = "red"
    }
    else{
        val.style.color = "#102a42"
    }
}