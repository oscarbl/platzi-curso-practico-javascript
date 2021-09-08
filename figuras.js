//Codigo del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden  " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El Perimetro cuadrado es: " + perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Área del  cuadrado es:  " + areaCuadrado + " cm^2");
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

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de : " + alturaTriangulo);
 const perimetroTriangulo = ladoTriangulo1 +ladoTriangulo2 + baseTriangulo;

 console.log(   "El perímetro del Triángulo es: " + perimetroTriangulo + " cm") ;

 const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
 console.log("El área del triángulo es:  "+ areaTriangulo + " cm^2");

console.groupEnd();

//Código del Círculo
console.group("Círculos");

//Radio
const   radioCirculo = 4

// Diámetro
const diametroCirculo = radioCirculo * 2;

// PI
const PI = Math.PI;

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Círculo es: " + perimetroCirculo + " cm");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del Cirulo es: " + areaCirculo + "cm^2");

console.groupEnd();
