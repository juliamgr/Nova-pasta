var lista = document.querySelector("ul");
var produto = document.querySelector("#produto");
var btnadicionar = document.querySelector("#btnadicionar");

btnadicionar.addEventListener("click", function(){
    var item = "<li>" + produto.value + "</li>";
    lista.innerHTML += item;
    produto.value ="";
});