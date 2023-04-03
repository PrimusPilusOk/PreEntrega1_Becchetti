console.log("Hola! Bienvenid@ a PetCare!");

/* Boton turnos */

let boton_turnos = document.getElementById("boton_turnos");

boton_turnos.addEventListener("click", function() {
    let turnos = parseInt(prompt("Pet Care hoy cuenta con 5 turnos disponibles"));
    let descuento = false;
    if (prompt("¿Es usted jubilado/a? (si/no)").toUpperCase() == "si") {
        descuento = true;
    }
    if (descuento) {
        turnos = turnos * 0.7;
    }
    alert("La cantidad de turnos disponibles es 5");
});


/*Guardia veterinaria*/

let boton_guardia = document.getElementById("boton_guardia");
boton_guardia.addEventListener("click", function() {
    let pacientes = parseInt(prompt("Hola! ¿Cuantos pacientes atendemos hoy?"));
    for (let guardia = 1; guardia <= pacientes; guardia++) {
        let nombre = prompt("¿Como se llama el paciente numero " + guardia + "?")
        alert("El paciente " + nombre + ", tiene asignado el turno numero " + guardia);
        console.log("El paciente " + nombre + ", tiene asignado el turno numero " + guardia);
    }
});