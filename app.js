let container = document.querySelector(".container")
let love = document.querySelector("#love")


container.addEventListener("dblclick",()=>{
    love.style.transform = "translate(-50%,-50%) scale(1)"
    setTimeout(()=>{
        love.style.transform = "translate(-50%,-50%) scale(0)"
    },1000)
})