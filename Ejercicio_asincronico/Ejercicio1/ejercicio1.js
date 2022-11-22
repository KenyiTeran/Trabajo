const txtCadena1 = document.getElementById("txtCadena1");
const txtCadena2 = document.getElementById("txtCadena2");
const txtCadena3 = document.getElementById("txtCadena3");
const btnResultado = document.getElementById("btnResultado");
const salida = document.getElementById("imprimir");

btnResultado.onclick = function(){
    let primeraNota = parseInt(txtCadena1.value);    
    let segundaNota = parseInt(txtCadena2.value);    
    let terceraNota = parseInt(txtCadena3.value);

    let promedio = ((primeraNota + segundaNota + terceraNota)/3). toFixed(0);
    
    salida.innerHTML = promedio;
    salida.innerHTML = `El resultado es ${promedio}`;
}