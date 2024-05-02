const respuesta = document.getElementById("resp");
const btnejecutar = document.getElementById("ejecuta");
let frutas = ["Manzana", "Banana", "Fresa", "Pera"];

btnejecutar.addEventListener('click',iniciar);
function iniciar(){
    frutas.forEach(function(item, index, array){
        respuesta.innerText = item;
    })
    //respuesta.innerText = frutas[frutas.length-1]; Obtener el último
}
