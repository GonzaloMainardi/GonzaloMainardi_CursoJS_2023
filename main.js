const traerDatos = async () => {
  try {
    const response = await fetch("./data.json");
    productos = await response.json();
    contenedorProductos.innerHTML = "";

    productos.forEach((producto) => {
      const contenedor = document.createElement("div");
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

      contenedorProductos.append(contenedor);
    });

    actualizarBtnsComprar();
  } catch (error) {
    alert("error");
  }
};

traerDatos();

const contenedorProductos = document.getElementById("home-productos");
let btnsComprar = document.querySelectorAll(".btn-comprar");

let carrito = [];

function actualizarBtnsComprar() {
  btnsComprar = document.querySelectorAll(".btn-comprar");

  btnsComprar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

function agregarAlCarrito(e) {
  Toastify({
    text: "PRODUCTO AGREGADO",
    duration: 1000,
    gravity: "top",
    position: "center",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
  const btnId = e.currentTarget.id;
  const productoEnCarrito = productos.find((producto) => producto.id === btnId);

  if (carrito.some((producto) => producto.id === btnId)) {
    const index = carrito.findIndex((producto) => producto.id === btnId);
    carrito[index].cantidad++;
  } else {
    productoEnCarrito.cantidad = 1;
    carrito.push(productoEnCarrito);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
}
