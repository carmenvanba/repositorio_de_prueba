//alert("Hello to js");
//console.log("CHAVALERIA");
//console.log para que salga en consola

var table = "Normal Table";
let chair = "One chair";
console.log(table);
console.log(chair);

let testBoolean = true;
console.log(testBoolean);

let testNumber = 12;
console.log(testNumber);

//intentar siempre usar comillas dobles ""
let testString = "Hello!";
console.log(testString);

let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

let testNumberObject = new Number(10);
console.log(testNumberObject);

//concatenar variables
/*
let personName = "John";
let surname = "Doe";
let question = "How are you "+personName+" "+surname+"?";
console.log(question);
*/

//2º forma de concatenar las tildes ` backtick son para concatenar con las variables directamente
//nombrar una variable es ${variable}
/*
let personName = "John";
let surname = "Doe";
let age = 23;
let question = `How old is ${personName} ${surname}?`;
let answer = "He is "+age+" years old";
console.log(question);
console.log(answer);
*/

//3º a través del método concat
let personName = "John";
let surname = "Doe";
let question = "How are you ".concat(personName)+" ".concat(surname)+"?";
console.log(question);

//Operaciones aritmeticas I
/*
let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
let rest = operator_a - operator_b;
let mult = operator_a * operator_b;
let division = operator_a / operator_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);
*/

//Operaciones aritmeticas II
/*
//Exponente, incremento, decremento
let operator_a = 3;
let operator_b = 3;
let expo = operator_a ** operator_b;
//incremento delante se incrementa antes del console log
//incremento detrás, se incrementa después del console log
let incr = ++operator_a;
let decr = --operator_a;
console.log(expo);
console.log(incr);
console.log(decr);
*/

//Operadores de asignacion
/*
let x = 5;
let y = 6;
//x = x+5
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(y/=2);
*/

//Typeof, null & undefined
//typeof, usamos las variables de antes
console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

//null
let testNull = null;
console.log(typeof(testNull));
console.log(testNull);

//undefined
let testUndefined;
console.log(testUndefined);

//ARRAY
//inicializado sin nada
var first_array = [];
//tamaño
var second_array = new Array(3);
//mete los 2 elementos
var third_array = new Array(3,5);
var fourth_array = new Array(3,5,"Seville",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

//Array access
console.log(third_array[1]);
console.log(fourth_array[4][0]);
console.log(fourth_array.length);

//Array push, añadir al final
console.log(fourth_array.push("Spain"));
console.log(fourth_array);

//Array unshift
//añade al principio
fourth_array.unshift(1);
console.log(fourth_array);

//FOR/FOREACH
/*for(var i = 0; i<fourth_array.length; i++){
    console.log("Entramos en la iteración de "+fourth_array[i]);
}
*/
//este es más óptimo 
//porque empieza desde el ultimo, no espera a ver cuántos elementos hay
/*
for(var i = fourth_array.length-1; i >= 0; i--){
    console.log("Entramos en la iteración de "+fourth_array[i]);
}
*/
//más óptimo aún
/*
var i = fourth_array.length-1;
for(;i>=0;i--){
    console.log("Entramos en la iteracion de: "+fourth_array[i])
}
*/
//foreach
/*
fourth_array.forEach(function(element){
    console.log("Iteracion "+element)
})
*/
