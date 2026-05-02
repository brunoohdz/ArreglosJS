//EJERCICIO 1

let materias = ["Programación Full Stack", "Ingienería de software","UTULab","Experiencia de Usuario"];


for (let indice = 0; indice < materias.length; indice++){
    console.log(materias[indice]);
}

console.log(materias[2]);

materias [3] = "Administración de Sistemas Operativos";
materias [4] = "Ciberseguridad";

//EJERCICIO 2

let estudiantes = [];

estudiantes[0] ="Juan";
estudiantes[1] ="Martin";
estudiantes[2] ="Manuel";
estudiantes[3] ="Oriana";

for (let indice = 0; indice < estudiantes.length; indice++){
    console.log(estudiantes[indice]);
}

estudiantes[0] = "Bruno";

estudiantes.pop();

for (let indice = 0; indice < estudiantes.length; indice++){
    console.log(estudiantes[indice]);
}

//EJERCICIO 3

let productos = ["pan", "leche", "arroz", "fideos"];

console.log(productos[2]);

productos.push("azúcar");

productos.splice(1);

for (let indice = 0; indice < productos.length; indice++){
    console.log(productos[indice]);
}

//EJERCICIO 4

let numeros = [10, 20, 30, 40, 50];

console.log(numeros[3]):

numeros[0] = 100;

numeros.pop();

numeros.push(60);

for (let indice = 0; indice < numeros.length; indice++){
    console.log(numeros[indice]);
}

//EJERCICIO 5

let contactos = [];

contactos[0] ="Ana";
contactos[1] ="Luis";
contactos[2] ="Pedro";
contactos[3] ="María";

console.log(contactos[1]);

contactos[2] = "Juan";

contactos.splice(1);

for (let indice = 0; indice < contactos.length; indice++){
    console.log(contactos[indice]);
}

//EJERCICIO 6

let tareas = ["estudiar JavaScript","hacer ejercicios de JavaScript", "leer apuntes de JavaScript", 
    "estudiar para las evaluaciones"];

for (let indice = 0; indice < tareas.length; indice++){
    console.log(tareas[indice]);
}

tareas[2] = "realizar los 7 ejercicios de Arrays";

tareas.push("Hacer resumen para estudiar para el escrito del 30");

tareas.pop();

for (let indice = 0; indice < tareas.length; indice++){
    console.log(tareas[indice]);
}

//EJERCICIO 7

let equipos = ["Defensor","Liverpool","Nacional","Peñarol"];

for (let indice = 0; indice < equipos.length; indice++){
    console.log(equipos[indice]);
}

console.log(equipos[0]);

equipos[2] = "Danubio";

equipos.push("Wanderers");

equipos.splice(1);

for (let indice = 0; indice < equipos.length; indice++){
    console.log(equipos[indice]);
}