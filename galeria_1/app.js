const titulo = document. querySelector("titulo")
const contenedor = document. querySelector("contenedor")
const btnPrev = document. querySelector("btnPrev")
const btnNext = document. querySelector("btnNext")

function Prev() {
console.log(i)

}
 function next(){

 console.log(i)
 if (i === 5) {
  i = 0

}
titulo.textContent = titulos [i]
contenedor.style.marginLeft = `-${400 * i}px`
contenedor.style.transitionDuration = ",5s"
i++ //i = 1

}

btnPrev.addEventListener("click", Prev)
btnNext.addEventListener("click", next)
