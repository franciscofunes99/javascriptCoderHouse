class ProductosCarro {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

class velador {
    constructor(id, nombre, precio, foto) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.foto = foto
    }
}

//funciones para calcular valor final del producto
function valorTotal() {
    let valorFinal = carrito.reduce(((acumulador, carrito) => acumulador + carrito.producto.precio), 0);
    return valorFinal;
}


const producto = [];

// creacion de productos

function subirProductos() {
    producto.push(new velador(01, "Velador Friends", 1500, "./img/friends.jpg"));
    producto.push(new velador(02, "Velador Game Thrones", 1500, "./img/got.jpg"));
    producto.push(new velador(03, "Velador Naruto", 1500, "./img/naruto.jpg"));
    producto.push(new velador(04, "Velador Peaky Blinders", 1500, "./img/pb.jpg"));
    producto.push(new velador(05, "Velador Racing Club", 1500, "./img/racing.jpg"));
    producto.push(new velador(06, "Velador River Plate", 1500, "./img/river.jpg"));
    producto.push(new velador(07, "Velador Los simpsons", 1500, "./img/simpsons.jpg"));
}
subirProductos();



//funcion de agregando productos al carrito
function crearCarro() {
    let renglonesCarrito = '';

    carrito.forEach(
        (elemento) => {
            renglonesCarrito += `
                <tr>
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td>${elemento.cantidad}</td>
                    <td>$ ${elemento.producto.precio}</td>
                </tr>
            `;
        }

    );
    contenedorCarritoCompras.innerHTML = renglonesCarrito;

}

let carrito = [];

const contenedorCarritoCompras = document.querySelector('#items');
const contenedorDeProductos = document.getElementsByClassName("row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4");


const addProductos = contenedorDeProductos[0];

//creacion de carta

function crearCard(producto) {

    let footerCard = document.createElement("div");
    footerCard.className = "card-footer p-4 pt-0 border-top-0"

    let buyButton = document.createElement("div");
    buyButton.className = "btn btn-outline-warning mt-auto";
    buyButton.innerText = "Comprar";

    let img = document.createElement("img");
    img.src = producto.foto;
    img.className = "card-img-top";
    img.alt = producto.nombre;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body p-3 bg-black text-white";
    cardBody.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio}</p>
    `;
    cardBody.append(footerCard);
    cardBody.append(buyButton);
    
    let card = document.createElement("div");
    card.className = "card h-100 m-5 bg-black border-warning text-center";
    card.append(img);
    card.append(cardBody);


    //evento de valor y agregado de producto

    buyButton.onclick = () => {
        let elementoCarro = new ProductosCarro(producto, 1);
        alert("Se agrego un nuevo producto al carrito");
        carrito.push(elementoCarro);
        let total = valorTotal();
        let precioTotal = document.getElementById("precioTotal");
        precioTotal.innerHTML = "$" + total;
        crearCarro();
    }

    return card;

}

function CreacionProductos() {
    addProductos.innerHTML = "";
    producto.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto)
                ;
            addProductos.append(contenedorCarta);
        }
    );

};

CreacionProductos();


