const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const btnResultado = document.getElementById("btnResultado");
const salida = document.getElementById("imprimir");

btnResultado.onclick = function(){
    
    let valorUsuario1 = parseInt(valor1.value);
    let valorUsuario2 = parseInt(valor2.value);
    
    let resultado = valorUsuario1 + valorUsuario2;
    let resultado2 = valorUsuario1 * valorUsuario2;

    salida.innerHTML =`El resultado de la primera operación es: ${resultado}, y el resultado de la segunda es: ${resultado2}`;
}