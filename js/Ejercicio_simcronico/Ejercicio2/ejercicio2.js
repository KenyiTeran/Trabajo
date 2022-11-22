const primerValor = document.getElementById("primerValor");
const btnResultado2 = document.getElementById("btnResultado2");
const imprimir2 = document.getElementById("imprimir2");

btnResultado2.onclick = function(){

    let primerValorUsuario = parseInt(primerValor.value);
    let porcentaje = (0.2 * primerValorUsuario).toFixed(2);

    imprimir2.innerHTML =`El 20% de ${primerValorUsuario} es ${porcentaje}.`
}


