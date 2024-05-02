console.log("Hola mundo");
var numero1 = 5;
var numero2 = 6;
var respuesta = Math.pow(numero1, numero2);
console.log("la respuesta es: " + respuesta);

var numero = 8;
if(numero == 7){
    console.log("Si es 7")
}
else if(numero==8){
    console.log("Es 8!")
}
else{
    console.log("No es 7")
}
//While
var i = 0;
while(i < 5){
    console.log(i);
    i++;
}

//For
for(var i=0; i <10; i+=1  ){
    console.log(i);
} 

//funciones
var resultado = "capuccino"
function cafetera(ingrediente1, ingrediente2){
    if(ingrediente1 == "leche" && ingrediente2 == "cafe"){
        return resultado;
    }
}
var taza = cafetera("leche", "cafe")
console.log(taza)