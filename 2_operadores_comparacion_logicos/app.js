//bolean//

console.log(' "5 == 5" ' ,  "5" = "5" ) //true//
console.log( ' "5" == "5" ', "5" = "5" ) //true
console.log( ' "5 == 5" ', 5 == "5" ) //false
console.log( "5 == 5" , 5 = "5" ) //true
console.log( "5 == (3+2)" , "5" == (3+2) ) //false
console.log( ' 5 == 5 ' , 5 == 5 ) //true


//pida dos numeros al usuario y sumelos 
//let num1 = prompt(('dame num 1')) //5
//let num1 = prompt(('dame num 1')) //5
//let

///////let x = parseFloat(valorB);
// Pedir los números al usuario
let a = prompt("Introduce el valor A:");
let b = prompt("Introduce el valor B:");

// Convertir los valores a números
a = parseFloat(a);
b = parseFloat(b);

// Realizar las operaciones
let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;

// Imprimir resultados
console.log(`El valor A es = "${a}" y el valor B es = "${b}"`);
console.log(`La suma de "${a}" + "${b}" = "${suma}"`);
console.log(`La resta de "${a}" - "${b}" = "${resta}"`);
console.log(`La multiplicación de "${a}" * "${b}" = "${multiplicacion}"`);
console.log(`La división de "${a}" / "${b}" = "${division}"`);