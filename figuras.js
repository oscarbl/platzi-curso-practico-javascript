//Codigo del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden  " + ladoCuadrado);

function perimetroCuadrado(lado){
    return lado * 4;
}

perimetroCuadrado(12)


// console.log("El Perimetro cuadrado es: " + perimetroCuadrado);

function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El Área del  cuadrado es:  " + areaCuadrado + " cm^2");
console.groupEnd();

//Código del Triángulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "los lados del triángulo miden:  "
+ ladoTriangulo1
+ " cm, "
+ ladoTriangulo2
+ " cm, "
+ baseTriangulo
+ " cm."
);

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de : " + alturaTriangulo);

 function perimetroTriangulo(){
     return lado1 +lado2 + base;
 }

//  console.log(   "El perímetro del Triángulo es: " + perimetroTriangulo + " cm") ;

 function  areaTriangulo(){
     return  (baseTriangulo * alturaTriangulo) / 2;
 }

//  console.log("El área del triángulo es:  "+ areaTriangulo + " cm^2");

console.groupEnd();

//Código del Círculo
console.group("Círculos");

//Radio
const   radioCirculo = 4

// Diámetro
function diametroCirculo(radio){
    return radioCirculo * 2;
}

// PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// console.log("El perimetro del Círculo es: " + perimetroCirculo + " cm");

// Área
function areaCirculo(){
    return  (radioCirculo * radioCirculo) * PI;
}

//  console.log("El área del Cirulo es: " + areaCirculo + "cm^2");

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
