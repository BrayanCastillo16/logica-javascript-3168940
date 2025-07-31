//bolean//

console.log(' "5 == 5" ' ,  "5" = "5" ) //true//
console.log( ' "5" == "5" ', "5" = "5" ) //true
console.log( ' "5 == 5" ', 5 == "5" ) //false
console.log( "5 == 5" , 5 = "5" ) //true
console.log( "5 == (3+2)" , "5" == (3+2) ) //false
console.log( ' 5 == 5 ' , 5 == 5 ) //true


//calculadora

let num1 = Number (prompt ("ingresa un numero: "))
let num2 = Number (prompt ("ingresa un numero: "))

let suma = num1 + num2
let resta = num1 - num2
let multiplicacion = num1 * num2
let divicion = num1 / num2

alert("la suma"+ suma)
alert("la resta"+ resta)
alert("la multiplicacion"+ multiplicacion)
alert("la divicion"+ divicion)