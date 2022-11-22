const valorMetros = document.getElementById("valorMetros");
const btnResultado3 = document.getElementById("btnResultado3");
const imprimir3 = document.getElementById("imprimir3");

btnResultado3.onclick = function(){
    
    let valorMetrosUsuario = parseInt(valorMetros.value);
    
    let valorCentimetros = valorMetrosUsuario * 100;
    let valorMilimetros = valorCentimetros * 10;

    imprimir3.innerHTML = `${valorMetrosUsuario} metros tiene ${valorCentimetros} centímetros, y ${valorCentimetros} tine un total de ${valorMilimetros} milímetros. `
}


