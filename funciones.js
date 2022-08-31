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
//sweet alert agregado para que una vez finalizada la compra se le sea notificada la misma por email 
function finalizarCompra(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })     
      Toast.fire({
        icon: 'success',
        title: 'Recibiras una confirmacion en tu email por la compra'  
      })
}


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
    localStorage.setItem("addCarro", JSON.stringify(carrito));




}

let carrito = [];

if (localStorage.getItem("addCarro") != null) {
    carrito = JSON.parse(localStorage.getItem("addCarro"));
}
//vacia carrito del Local storage

function vaciarCarro() {
    localStorage.clear("addCarro");
        //agregue biblioteca sweet alert a esta parte para que los usuarios al momento de vaciar el carrito confirmen si de verdad lo quieren hacer o mantener
    Swal.fire({
        title: 'Esta seguro de que desea eliminar los productos?',
        icon: 'warning',
        color: 	'#FFFFFF',
        background:'#000000',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar.'
      }).then((result) => {
        if (result.isConfirmed) {
            //se confirma con otro alert que se vacio el carrito y se le comenta al usuario que si actualiza la pagina ve reflejado dicho cambio 
          Swal.fire(
            'Eliminado',
            'Los cambios se verán reflejados al refrescar la pagina.',
            'error'           
          )
        }
      })
}


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
        // se agrega un alert sutil en la parte superior de la derecha indicandole al cte que se agrega producto al carrito, selecciono un fondo negro del mismo para que acompañe con la tematica de la pagina 
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            color: 	'#FFFFFF',
            background:'#000000',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito!'
          })
        carrito.push(elementoCarro);
        let total = valorTotal();
        let precioTotal = document.getElementById("precioTotal");
        precioTotal.innerHTML = "$" + total;
        crearCarro();
    }

    return card;

}

function creacionProductos() {
    addProductos.innerHTML = "";
    producto.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto)
                ;
            addProductos.append(contenedorCarta);
        }
    );

};

creacionProductos();

