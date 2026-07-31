const tovc1 =document.querySelector(".tovc1")
const arvan9 =document.querySelector(".arvan9")
const tovc2 =document.querySelector(".tovc2")
const tovc3 =document.querySelector(".tovc3")
let count = 0

arvan9.textContent = count

tovc1.addEventListener("click" , function () {
  count = count - 1
  arvan9.textContent = count
})
tovc2.addEventListener("click" , function(){
    count = 0
    arvan9.textContent = count
})
tovc3.addEventListener("click" , function(){
    count = count + 1
    arvan9.textContent = count
})