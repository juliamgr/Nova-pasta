let valor = 0;
const contador = document.getElementById("contador");
const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");
const botaoDuplo = document.getElementById("duplicar")

botaoAumentar.addEventListener("click", function(){
    valor++;
    contador.innerText = valor;
});

botaoDiminuir.addEventListener("click", function(){
    if(valor > 0){
        valor--;
        contador.innerText = valor;
    }
});