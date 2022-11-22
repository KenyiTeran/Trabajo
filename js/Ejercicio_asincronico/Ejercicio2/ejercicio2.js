const sueldo1 = document.getElementById("sueldo1");
const sueldo2 = document.getElementById("sueldo2");
const sueldo3 = document.getElementById("sueldo3");
const btnResultado2 = document.getElementById("btnResultado2");
const salida1 = document.getElementById("imprimir1");
const salida2 = document.getElementById("imprimir2");
const salida3 = document.getElementById("imprimir3");

 btnResultado2.onclick = function(){
    
    let sueldoUsuario1 = parseInt(sueldo1.value);
    let sueldoUsuario2 = parseInt(sueldo2.value);
    let sueldoUsuario3 = parseInt(sueldo3.value);
    
    let aumento1 = sueldoUsuario1 * 0.1;
    let aumento2 = sueldoUsuario2 * 0.12;
    let aumento3 = sueldoUsuario3 * 0.15;


    let aumentoTotal1 = aumento1 + sueldoUsuario1;
    let aumentoTotal2 = aumento2 + sueldoUsuario2;
    let aumentoTotal3 = aumento3 + sueldoUsuario3;


    salida1.innerHTML = `El sueldo base de José es de ${sueldoUsuario1} soles, de lo cual se le aumentó el "10%". Por lo tanto, el nuevo sueldo es de: ${aumentoTotal1} soles.`;

    salida3.innerHTML = `El sueldo base de María es de ${sueldoUsuario2} soles, de lo cual se le aumentó el "12%". Por lo tanto, el nuevo
    sueldo es de: ${aumentoTotal2} soles.`;

    salida2.innerHTML = `El sueldo base de Enrique es de ${sueldoUsuario3} soles, de lo cual se le aumentó el "15%". Por lo tanto, el nuevo sueldo es de: ${aumentoTotal3} soles.`;

}