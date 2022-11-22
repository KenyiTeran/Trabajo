const primeraNota = document.getElementById("primeraNota");
const segundaNota = document.getElementById("segundaNota");
const terceraNota = document.getElementById("terceraNota");

const btnResultado = document.getElementById("btnResultado3"); 
const salida = document.getElementById("imprimir");

btnResultado.onclick = function(){
    let primeraNotaUsuario = primeraNota.value;
    let segundaNotaUsuario = segundaNota.value;
    let terceraNotaUsuario = terceraNota.value;

    let promedio1 = primeraNotaUsuario * 0.3;
    let promedio2 = segundaNotaUsuario * 0.3;
    let promedio3 = terceraNotaUsuario * 0.4;

    let promedioTotal = (promedio1 + promedio2 + promedio3). toFixed(0);

    salida.innerHTML = `El promedio total de las notas de José es de: ${promedioTotal}`;
}
