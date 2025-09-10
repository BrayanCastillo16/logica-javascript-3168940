//seleciona los elementos con los que va a interractuar o los que responden a la interaccion

const pantalla = document.querySelector(".pantalla")
const btnMenos= document.querySelector(".btn-Menos")
const btnMas = document.querySelector(".btn-Mas")
 let counter = 0
//2. funcion

function incrementar () {
counter++
pantalla.textContent = counter
if (counter >= 10 && counter < 30 ) {
  pantalla.style.color = "red"
}

if(counter >= 30) {
  pantalla.style.color = "green"
  document.body.style.backgroundcolor = "grey"

}
}

function decrementar () {
if (counter <= 0) 
 return counter = 0

counter--
pantalla.textContent = counter
if (counter < 10 ) {
  pantalla.style.color = "black"
    
 }



  if (counter >= 10 && counter < 30) {
    pantalla.style.color = "red"
    document.body.style.backgroundcolor = "white"
  
 } 
}


//3. crear eñ evento

btnMas.addEventListener("click", incrementar)
btnMenos.addEventListener("click", decrementar)

