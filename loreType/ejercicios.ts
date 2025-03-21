//1.
//Declara una variable nombre de tipo string y asígnale un valor.
let nombre:String="Yisel lorena";
console.log(nombre);

//2.
//Crea una variable edad de tipo number e inicialízala con tu edad.
let edad:number=18;

/////3.
let esEstudiante:boolean=true;

//4.
function doblarNumero(a:number):number{
    return a*2;
}

//5.
function concatenarPalabras(una:string,dos:string):string{
    return `${una} ${dos}`;
}

//6.
function esPar(numero:number):boolean{
    return numero%2===0;
}

//7.
function evaluarEdad(edad: number): string {
    if (edad < 18) {
        return "Menor de edad";
    } else {
        return "Adulto";
    }
}
const mensaje = evaluarEdad(20);
console.log(mensaje);


8. 
//Crea una función compararNumeros que reciba dos números y retorne el mayor.
function compararNumeros(a: number, b: number): number {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

const num = compararNumeros(10, 54);
console.log(num);


9.
//Escribe una función que determine si un número es múltiplo de 5.
function multiplo(numero:number){
    return numero*5===0?"es multiplo de 5":"no es multiplo de 5";
}
console.log(multiplo(10));

10.
//Crea una función diaDeLaSemana que reciba un número del 1 al 7 y retorne el nombre del día correspondiente.
function diaDeLaSemana(dia:number){
    const dias=["lunes","martes","miercoles","jueves","viernes","sabado"];
    if(dia>=1 && dia<=7){
        return dias
    }
    else{
        return `dia invalido`
    }

}
console.log(diaDeLaSemana[2]);

11.
//Crea una función imprimirNumeros que reciba un número y muestre en consola los números del 1 hasta ese número.
function imprimirNumeros(recibi:number){
    for(let i=1; i<=recibi;i++){
        console.log(i);
    }
}
imprimirNumeros(4);
console.log(imprimirNumeros);

12.
//Escribe una función sumarNumeros que reciba un número n y sume todos los números desde 1 hasta n.
function sumarNumeros(n:number){
    for(let a=1;a>=n;a++){
        let suma=0;
        suma +=a
        return suma;
    }
}
sumarNumeros(8);
console.log(sumarNumeros);



13.
//Dado un array [3, 6, 9, 12], usa un for para multiplicar cada elemento por 2 y mostrarlo.
function multi(array: number[]): number[] {
    for (let s = 0; s < array.length; s++) {
        array[s] = array[s] * 2; 
    }
    return array;  
}
console.log(multi([3, 6, 9, 12]));

14.
//Crea una función que reciba un array de números y retorne cuántos son mayores a 10.
function numer(arrays: number[]):number[] {
  return arrays.filter(nu=>nu>10);
}
console.log(numer([7,8,9,10,11,12]));

15.
//Crea una función que reciba un array y devuelva el número más grande del mismo.
function grande(arreglo: number[]): string {
    let max = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > max) {
            max = arreglo[i]; 
        }
    }
    return `El número más grande es: ${max}`;
}
console.log(grande([1, 2, 3, 4, 5, 6]));
16.
//Crea una función buscarElemento que reciba un array de numbers y un número, y devuelva true si el número está en el array.
function buscarElemento(arrayss:number[],numeroo:number):boolean{
    return arrayss.includes(numeroo);
}
console.log(buscarElemento([8,45,54,44,12],5));

17.
//Dado un array [&quot;manzana&quot;, &quot;banana&quot;, &quot;uva&quot;, &quot;pera&quot;], usa .map() para convertirlo en mayúsculas.
function frutas(fruts:string[]){
    return fruts.map(fruta=>fruta.toUpperCase());
}
console.log(frutas(["manzana","banana","uva","pera"]));


//# 18. Obtener solo los números pares de un array utilizando filter()

const numeross = [2, 4, 5, 7, 10];
const numerosPares = numeross.filter(num => num % 2 === 0);
console.log(numerosPares); // [2, 4, 10]

//# 19. Función promedio que recibe un array de números y devuelve el promedio

function promedio(numeros) {
    const suma = numeros.reduce((a, b) => a + b, 0);
    return suma / numeros.length;
}
const numerox = [1, 2, 3, 4, 5];
console.log(promedio(numerox)); // 3


//# 20. Obtener la suma total de un array sin utilizar reduce()

const numerosd = [3, 5, 7, 9];
let sumaa = 0;
for (let i = 0; i < numerosd.length; i++) {
    sumaa += numerosd[i];
}
console.log(sumaa); // 24


//# 20. Obtener la suma total de un array utilizando reduce()

const numeros = [3, 5, 7, 9];
const suma = numeros.reduce((a, b) => a + b, 0);
console.log(suma); // 24


//# 21. Crear un objeto persona con nombre, edad y ciudad

const personfa = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
console.log(personfa);


//# 22. Función actualizarCiudad que recibe un objeto persona y una nueva ciudad

function actualizarCiudad(persona, nuevaCiudad) {
    persona.ciudad = nuevaCiudad;
    return persona;
}
const personffa = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
console.log(actualizarCiudad(personffa, "Barcelona"));

//# 23. Crear un array de objetos autos y mostrar solo los autos fabricados después de 2015

const autogs = [
    { marca: "Toyota", año: 2010 },
    { marca: "Ford", año: 2018 },
    { marca: "Honda", año: 2012 },
    { marca: "Nissan", año: 2020 }
];
const autosRecientes = autogs.filter(auto => auto.año > 2015);
console.log(autosRecientes);


//# 24. Función buscarAuto que recibe un array de autos y una marca

function buscarAuto(autos, marca) {
    return autos.filter(auto => auto.marca === marca);
}
const autos = [
    { marca: "Toyota", año: 2010 },
    { marca: "Ford", año: 2018 },
    { marca: "Toyota", año: 2012 },
    { marca: "Nissan", año: 2020 }
];
console.log(buscarAuto(autos, "Toyota"));


//# 25. Función contarPropiedades que recibe un objeto y devuelve el número de propiedades

function contarPropiedades(objeto) {
    return Object.keys(objeto).length;
}
const personea = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};
console.log(contarPropiedades(personea)); // 3
//# 26. Función que recibe otra función como argumento y la ejecuta

function ejecutarFuncion(funcion) {
    return funcion();
}
function saludar() {
    console.log("Hola!");
}
ejecutarFuncion(saludar); // Hola!


//# 27. Función multiplicarPor que recibe un número x y devuelve una nueva función que multiplica por x

function multiplicarPor(x) {
    return function(y) {
        return y * x;
    }
}
const multiplicarPor5 = multiplicarPor(5);
console.log(multiplicarPor5(10)); // 50


//# 28. Función crearContador que devuelve una función que incrementa un contador cada vez que se llama

function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    }
}
const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3


//# 29. Función que tome un array de strings y devuelva otro con los nombres ordenados alfabéticamente

function ordenarNombres(nombres) {
    return nombres.sort();
}
const nombres = ["Juan", "Ana", "Carlos", "Berta"];
console.log(ordenarNombres(nombres)); // ["Ana", "Berta", "Carlos", "Juan"]


//# 30. Función intercalarArrays que reciba dos arrays y los mezcle alternando sus elementos

function intercalarArrays(arr1: any[], arr2: any[]): any[] {
    const resultado: any[] = [];
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (i < arr1.length) {
            resultado.push(arr1[i]);
        }
        if (i < arr2.length) {
            resultado.push(arr2[i]);
        }
    }
    return resultado;
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
console.log(intercalarArrays(arr1, arr2)); // [1, "a", 2, "b", 3, "c"]



//# 31. Función clonarObjeto que reciba un objeto y devuelva una copia exacta de este sin modificar el original

function clonarObjeto(objeto) {
    return { ...objeto };
}
const personra = {
    nombre: "Juan",
    edad: 30
};
const clon = clonarObjeto(personra);
console.log(clon); // { nombre: "Juan", edad: 30 }


//# 32. Función mergeObjetos que reciba dos objetos y los combine en uno solo, sin modificar los originales

function mergeObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const persona = {
    nombre: "Juan",
    edad: 30
};
const direccion = {
    calle: "Main",
    ciudad: "Nueva York"
};
const resultado = mergeObjetos(persona, direccion);
console.log(resultado); // { nombre: "Juan", edad: 30, calle: "Main", ciudad: "Nueva York" }


//# 33. Función filtrarPorPropiedad que reciba un array de objetos y un nombre de propiedad, y retorne solo los objetos que contengan esa propiedad

function filtrarPorPropiedad(objetos, propiedad) {
    return objetos.filter(objeto => objeto.hasOwnProperty(propiedad));
}
const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "Ana", ciudad: "Madrid" },
    { nombre: "Carlos", edad: 40 }
];
console.log(filtrarPorPropiedad(personas, "edad"));
// [{ nombre: "Juan", edad: 30 }, { nombre: "Carlos", edad: 40 }]

34.
//34. Escribe una función contarElementos que reciba un array de strings y retorne un objeto con la cantidad de veces que aparece cada string.

function contarElementos(strings: string[]): { [key: string]: number } {
    const resultado: { [key: string]: number } = {};
    strings.forEach(string => {
        if (resultado[string]) {
            resultado[string]++;
        } else {
            resultado[string] = 1;
        }
    });
    return resultado;
}
const strings = ["hola", "adiós", "hola", "adiós", "adiós"];
console.log(contarElementos(strings)); // { hola: 2, adiós: 3 }

//35. Función sumarValores que reciba un array de objetos con la propiedad valor y devuelva la suma total de los valores

function sumarValores(objetos) {
    return objetos.reduce((suma, objeto) => suma + objeto.valor, 0);
}
const objetos = [
    { valor: 10 },
    { valor: 20 },
    { valor: 30 }
];
console.log(sumarValores(objetos)); // 60






