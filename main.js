const productos = [

  {
      id: "1",
      nombre: "FUNDA DIAMOND",
      marca: "APPLE",
      imagen: "./img/funda_diamond.jpeg",
      precio: 3800
  },
  {
      id: "2",
      nombre: "FUNDA BUMPER CASE",
      marca: "APLLE",
      imagen: "./img/funda_bumpercase.jpeg",
      precio: 3200,
  },
  {
      id: "3",
      nombre: "FUNDA ANTISHOCK",
      marca: "APPLE",
      imagen: "./img/funda_antishock.jpeg",
      precio: 2500,
  },

]

const contenedorProductos = document.getElementById("home-productos")
let btnsComprar = document.querySelectorAll(".btn-comprar")

let carrito = []

function cargarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach((producto) => {
  
      const contenedor = document.createElement("div")
      contenedor.innerHTML = `
      <div class="card" style="width: 18rem;">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="producto-info">
              <h5 class="producto-nombre">${producto.nombre}</h5>
              <h3 class="producto-precio">$${producto.precio}</h3>
              <a href="#" class="btn-comprar" id="${producto.id}">AÑADIR AL CARRITO</a>
          </div>
      </div>
      `;
  
      contenedorProductos.append(contenedor)
  
  });  

  actualizarBtnsComprar()
  
}

cargarProductos();

function actualizarBtnsComprar () {
    btnsComprar = document.querySelectorAll(".btn-comprar")

    btnsComprar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function agregarAlCarrito(e) {
    Swal.fire({
        width: "15rem",
        height: "1rem",
        position: 'top-end',
        icon: 'success',
        title: 'PRODUCTO AGREGADO',
        showConfirmButton: false,
        timer: 500, 
      })
    const btnId = e.currentTarget.id;
    const productoEnCarrito = productos.find(producto => producto.id === btnId);

    if(carrito.some(producto => producto.id === btnId)) {
        const index = carrito.findIndex(producto => producto.id === btnId);
        carrito[index].cantidad++;
    } else {
        productoEnCarrito.cantidad = 1;
        carrito.push(productoEnCarrito);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

}
