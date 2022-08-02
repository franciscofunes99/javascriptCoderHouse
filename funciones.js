
let cantidad = prompt("Cuantos productos deseas comprar?");
let precio = 1500;
let total = cantidad * precio;

if (total >= 3000){
    alert("Tienes envio gratis!")
    console.log("El valor total es de " + total + " pesos");
} else if(total <3000){
   alert("Tienes que abonar el envio!");
   console.log("El valor total es de " + calcularEnvio() + " pesos");
}

function calcularEnvio (){
    let totalEnvio = total + 650;
    return totalEnvio;
}

