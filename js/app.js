/*alert('Hola a Todos');*/
var nombre      = "Juan Cavero";
const comunidad = "CabiHack";
let taller      = "Taller JS";

var numcomunidad = comunidad.length;
var notas        = 18;
var num1         = 20;
var num2         = 6;
var resultado;

console.log("la comunidad de"+" "+comunidad+" estan dictando el "+taller+" por: "+nombre);

if(notas < 10){
    alert('Estoy Desaprobado');
}else if(notas < 14){
    alert('Estoy probado');
}else{
    alert('Mi vida si tiene Sentido');
}
resultado = num1 * num2;
console.log(resultado);