const veladores = [
    { nombre: "Star Wars", valor: 1500 },
    { nombre: "Los simpsons", valor: 1500 },
    { nombre: "Friends", valor: 1500 },
    { nombre: "River plate", valor: 1500 },
];

function valorTotal() {
    let valorFinal = carro.reduce(((accumulator, carro) => accumulator + carro.valor), 0);
    return valorFinal;
}

let carro = [];

let compra = prompt("Desea comprar algun velador?")

while (compra != "si" && compra != "no") {
    alert("Elija una opcion SI/NO")
    compra = prompt("Desea comprar un velador?")
}

if (compra == "si") {
    alert("Elige uno de los siguientes veladores:")
    let veladoresDisponibles = veladores.map((velador) => velador.nombre + " Precio: $" + velador.valor);
    alert(veladoresDisponibles.join(" - "))
} else if (compra == "no") {
    alert("gracias por su visita")
}

while (compra != "no") {
    let veladores = prompt("Cual velador deseas comprar?")
    let precio = 0

    if (veladores == "Star wars" || veladores == "Los simpsons" || veladores == "Friends" || veladores == "River plate") {
        switch (veladores) {
            case "Star wars":
                valor = 1500;
                break;
            case "Los simpsons":
                valor = 1500;
                break;
            case "Friends":
                valor = 1500;
                break;
            case "River plate":
                valor = 1500;
                break;
            default:
                break;
        }
        carro.push({ veladores, valor })
        console.log(carro)
    }
    compra = prompt("Quiere continuar con la compra?")
     
    while (compra == "no") {
        alert("Gracias por su compra")
        alert("El valor final es " + " $" + valorTotal())
        break;

    }
}

