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
//if/else/elseif
/*
let aux = 3;
if(aux > 0){
    console.log("This number is positive");
}else if(aux <0 ){
    console.log("This number is negative");
}else{
    console.log("This number is 0");
}
*/

//Regular expressions
//match, encontrar patrón dentro de otra cosa
//dni.match(/^(\d{8})([A-Z])$/) pero mejor en una variable
/*
var DNI_REGEX = /^(\d{8})([A-Z])$/;
let dni = "12345678K";
if(dni.match(DNI_REGEX)){
    console.log("Correct DNI");
}else{
    console.log("Incorrect DNI");
}
*/

//Operadores de comparación
//=== valor y tipo
/*
console.log(8==8);
console.log(8=="8");
console.log(8===8);
console.log(8==="8");

console.log(5>8);
console.log(5<8);
console.log(5>=8);
console.log(5<=8);

console.log(8!=8);
console.log(8!="8");
console.log(8!==8);
console.log(8!=="8");

console.log("text" == "text");
console.log("text" === "text");
console.log("text" == "Text");
*/

//Loop while
/*
var i = 1;
while (i < 10){
    console.log("The number is "+i);
    i++;
    //i termina en 10
}
*/
//Switch el ultimo no lleva break y no hace falta poner default

//DATE OBJECT
//meses 0 enero 11 diciembre
let today = new Date();
let first_october = new Date(2019,10,1);
console.log(today);
console.log(first_october);
console.log(today.getDay());
console.log(today.getDate());
//comparar fechas
if(today>first_october){
    console.log("Today is after to first october");
}else{
    console.log("Today is before to first october");
}

//EVENTOS
function myFirstFunction(){
    console.log("Thank you for your click.");
}
function mySecondFunction(){
    console.log("Thank you for your interest.");
}

//Select DOM
/*
//se accede a todos los my_div del html
var div = document.getElementById("my_div");
//a ese div se le añade una clase, my_class
div.classList.add("my_class");
console.log(div);
//se ha añadido dinamicamente una clase a un div
*/

//Select DOM II
/*
var div = document.getElementsByTagName("div");
console.log(div);
//para acceder con id es # y con clase el .
var second_div = document.querySelector("#my_second_div");
console.log(second_div);
//CREAR una funcion que se llama $ y se le pasa un selector
//devuelve del documento todos los que cumplan el selector
function $(selector){
    return document.querySelectorAll(selector);
}
console.log($("#my_third_div"));
console.log($(".div_especial"));
*/

//FUNCIONES
/*
function $(selector){
    return document.querySelectorAll(selector);
}
console.log($("#my_third_div"));
//pasar una funcion por otra funcion
//elevar cada numero a 2 (multiplicarlo por si mismo 1 vez)
var numbers = [1,2,3,4];
var n_elevator_2 = numbers.map(function(n){ return n*n; });
console.log(n_elevator_2);
*/
//Lo mismo, pero mas simple, funciones flecha:
/*
var numbers = [1,2,3,4];
var n_elevator_2 = numbers.map((n)=>{ return n*n; });
console.log(n_elevator_2);
//same y pinta numero a numero antes del cambio
var n_elevator_2 = numbers.map((n)=>{ console.log(n); return n*n; });
console.log(n_elevator_2);
//same
var n_elevator_2 = numbers.map(n => n*n);
console.log(n_elevator_2);
*/
/*
//multiplica
let numbers = [[1,2],[2,3],[3,4],[4,5]];
let itself = numbers.map(([x,y]) => x*y);
console.log(itself);
*/

//Create DOM NODES I
/*
$("#btn_2").addEventListener("click",function(){
    var input = document.createElement("input");
    console.log(input);
});

function $(selector){
    return document.querySelector(selector);
}
*/
/*
//crear muchos inputs usando solo 1
$("#btn_2").addEventListener("click",function(){
    var input = document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","E-mail");
    input.setAttribute("name","emails");
    $("#form").appendChild(input);
});

function $(selector){
    return document.querySelector(selector);
}
*/