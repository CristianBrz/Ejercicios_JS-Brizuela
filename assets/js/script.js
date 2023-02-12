// 1 a 10

// let miNombre = "Cristian"
// let miApellido = "Brizuela"
// let miEdad = 39
// let miMascota = "gorda"
// let edadMascota = 2

// console.log("miNombre:" + " " + miNombre)
// console.log("miApellido:" + " " + miApellido)
// console.log("miEdad:" + " " + miEdad)
// console.log("miMascota:" + " " + miMascota)
// console.log("edadMascota:" + " " + edadMascota)

// let nombreCompleto = miNombre + " " + miApellido
// console.log(nombreCompleto)

// let textoPresentacion = miNombre + " " + miApellido + " " + miEdad + " " + miMascota
// 											+ " " + edadMascota + " " + nombreCompleto
// console.log(textoPresentacion)

// let sumaEdades = miEdad + edadMascota
// console.log(sumaEdades)

// let restaEdades = miEdad - edadMascota
// console.log(restaEdades)

// let productoEdades= miEdad * edadMascota
// console.log(productoEdades)

// let divisionEdades = miEdad / edadMascota
// console.log(divisionEdades)

// console.log()

/***********************************************************************************************************/
// 10
// let miNombre = prompt("Mi nombre es:")
// let miApellido = prompt("Mi apellido es:")
// let miEdad = prompt("Mi edad es [años]:")
// let miMascota = prompt("Mi mascota se llama:")
// let edadMascota = prompt("La edad de mi mascota es [años]:")

// 6-
// console.log("miNombre:" + " " + miNombre)
// console.log("miApellido:" + " " + miApellido)
// console.log("miEdad:" + " " + miEdad)
// console.log("miMascota:" + " " + miMascota)
// console.log("edadMascota:" + " " + edadMascota)

// let nombreCompleto = miNombre + " " + miApellido
// console.log("nombreCompleto:" + " " + nombreCompleto)

// let textoPresentacion = miNombre + " " + miApellido + " " + miEdad + " " + miMascota
// console.log(textoPresentacion)

// let sumaEdades = miEdad + edadMascota
// console.log(sumaEdades)

// let restaEdades = miEdad - edadMascota
// console.log(restaEdades)

// let productoEdades = miEdad * edadMascota
// console.log(productoEdades)

// let divisionEdades = miEdad / edadMascota
// console.log(divisionEdades)



// 11 - Creando un objeto

let alumno = new Object();
alumno.nombre = "Cristian";
alumno.apellido = "Brizuela";
alumno.edad = "39";
alumno.curso = "Introduction to JavaScript";
alumno.cohort = "FE06-TN";

// let alumno = {
// 	nombre: "Cristian",
// 	apellido: "Brizuela",
// 	edad: 39,
// 	curso: "Introduction to JavaScript",
// 	cohort: "FE06-TN"
// }

// let alumno = {
// 	nombre: prompt("Nombre del alumno:"),
// 	apellido: prompt("Apellido del alumno:"),
// 	edad: prompt("Edad del alumno:"),
// 	curso: prompt("Curso:"),
// 	cohort: prompt("Cohort:")
// }

// console.log("console.table():")
// console.table(alumno)

// console.log(" ")
// console.log("for...in:")

// for (let propiedad in alumno) {
// 	console.log(propiedad)
// 	console.log(alumno[propiedad])
// }

// console.log(" ")
// console.log("console.log(Object.values())")
// console.log(Object.values(alumno))

// console.log(" ")
// console.log(alumno)

// 12
// let mascota = {
// 	nombre: "Preta",
// 	especie: "gato",
// 	sexo: "hembra",
// 	edad: 1,
// 	color: "blanco"
// }

// console.table(mascota)

// console.log("for...in")
// for (let propiedad in mascota) {
// 	console.log(mascota[propiedad])
// }



//13

let frutas = [ "Pera", "Naranja", "Manzana", "Banana", "Durazno"]

// console.log(Object.values(frutas))
// console.log(frutas)
// console.table(frutas)

// for (item of frutas) {
// 	console.log(item);
// }


// 14

let numeros = [2, 3, 5, 8, 13]

// console.log(numeros)

// for (item of numeros) {
// 	console.log(item);
// }


// 15

let familia = ["Somos 4 (humanos)", "Cristian", "Yesica", "Thiago", "Franco"]

// console.log(familia)

// for (item of familia) {
// 	console.log(item);
// }


// 16

// let textoAleatorio = frutas[1] + " " + numeros[3] + " " + familia[4]
// console.log(textoAleatorio)

// 17

// let miEdad = prompt("Mi edad es[años]:")
// let edadCompa = prompt("La edad de mi compañero es [años]")

// let edadesIguales = false
// let soyMayor = false
// let soyMenor = false

// if (miEdad == edadCompa){
// 	edadesIguales = true
// } else if (miEdad > edadCompa){
// 	soyMayor = true
// } else {
// 	soyMenor = true
// }

// console.log("Mi edad es igual a la de mi compañero: " + edadesIguales)
// console.log("Mi edad es mayor a la de mi compañero: " + soyMayor)
// console.log("Mi edad es menor a la de mi compañero: " + soyMenor)

// 18
// let miEdad = prompt("Mi edad es [años]:")

// let soyMayorDeEdad = false

// if (miEdad >= 18){
// 	soyMayorDeEdad = true
// } 

// console.log("Soy mayor de edad: " + soyMayorDeEdad)

// 19
// let edad = prompt("Ingresar edad [años]:" )
// let altura = prompt("Ingresar altura [cm]:")
// let puedeSubir = false

// if (edad > 6 && altura >= 120){
// 	puedeSubir = true
// }

// console.log("Puede subir a la atracción: " + puedeSubir)

// 20
let pase = prompt("Tipo de pase (VIP / NORMAL / LIMITADO):")
let saldo = prompt("Ingrese saldo disponible:")
let puedePasar = false

if (pase == "VIP" || pase == "Vip" || pase == "vip" && saldo > 1000){
	puedePasar = true
}

console.log("La persona puede pasar: " + puedePasar)
