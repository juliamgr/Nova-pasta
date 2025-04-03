const lampada = document.getElementById("lampada")
const ligado = document.getElementById("ligado")
const desligado = document.getElementById("desligado")

ligado.addEventListener("click", function() {
    lampada.style.backgroundColor = "yellow";
})

desligado.addEventListener("click", function() {
    lampada.style.backgroundColor = "gray";
})