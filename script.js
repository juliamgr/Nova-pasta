btnTrocaCor = document.getElementById("trocaCor");
let caixaTexto = document.getElementById('caixa');

btnTrocaCor.addEventListener("click", ()=>{
    let caixaTexto = document.getElementById('caixa');

    if(caixaTexto.className === "acende"){
        caixaTexto.classList.add('apaga');
        caixaTexto.classList.remove('acende');
    }else{
        caixaTexto.classList.add('acende');
        caixaTexto.classList.remove('apaga');
    }

    console.log(caixaTexto.className);
});

const btnTrocaTexto = document.getElementById("trocaTexto");
btnTrocaTexto.addEventListener("click", () => {
    if( caixaTexto.innerText === "lampada"){
        document.getElementById("caixa").innerHTML = "acende";
        }else{
            document.getElementById("caixa").innerHTML= "apaga";
    }
});