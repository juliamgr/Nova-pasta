function calcularIMC(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso= parseFloat(document.getElementById("peso").value);
    let resultado = document.getElementById("resltado");

    if(isNaN(altura) || isNaN(peso) || altura <=0 || peso <= 0){
        resultado.innerText = "insira valores";
        return;
    }

    let imc = (peso/ (altura * altura)).toFixed(2);
    resultado.innerText = 'seu IMC é: ${imc}';
}