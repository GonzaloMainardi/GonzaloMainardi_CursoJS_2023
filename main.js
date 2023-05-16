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
          </div>
      </div>
      `;
  
      contenedorProductos.append(contenedor)
  
  });  
  
}

cargarProductos();

const catalogo = productos.map((el) => {el.nombre, el.precio * 1.25
})
alert(catalogo);

let articuloElegido = Number(prompt("INGRESE EL NUMERO DEL ARTICULO QUE DESEA COMPRAR: \n 1) FUNDA DIAMOND \n 2) FUNDA BUMPER CASE \n 3) FUNDA ANTISHOCK"));

do {
    switch (articuloElegido) {
        case 1:
            var precioDiamond = productos[0].precio;
            var fundaColor = ConsultarColor();
            var fundaCantidad = ConsultarCantidad(productos[0].nombre);
            var fundaFormaPago = ConsultarFormaPago();
            var fundaMonto = CalcularMonto(precioDiamond,fundaCantidad);
            if (fundaFormaPago == 1) {
                mostrarTicket(fundaCantidad,productos[0].nombre,fundaColor,fundaMonto)
                articuloElegido = seguirComprando();
        }
            else if (fundaFormaPago == 2) {
                let montoPorCuota = calcularCuota(fundaMonto)
                mostrarTicket(fundaCantidad,productos[0].nombre,fundaColor,fundaMonto)
                alert(`EL VALOR DE CADA CUOTA A ABONAR ES DE: $${montoPorCuota}`);
                articuloElegido = seguirComprando();
        }
            break;
    
        case 2:
          let precioBumperCase = productos[1].precio;
          var fundaColor = ConsultarColor();
          var fundaCantidad = ConsultarCantidad(productos[1].nombre);
          var fundaFormaPago = ConsultarFormaPago();
          var fundaMonto = CalcularMonto(precioBumperCase,fundaCantidad);
          if (fundaFormaPago == 1) {
              mostrarTicket(fundaCantidad,productos[1].nombre,fundaColor,fundaMonto)
              articuloElegido = seguirComprando();
      }
          else if (fundaFormaPago == 2) {
              var montoPorCuota = calcularCuota(fundaMonto)
              mostrarTicket(fundaCantidad,productos[1].nombre,fundaColor,fundaMonto)
              alert(`EL VALOR DE CADA CUOTA A ABONAR ES DE: $${montoPorCuota}`);
              articuloElegido = seguirComprando();
      }
            break;
    
        case 3:
          let precioAntiShock = productos[2].precio;
          var fundaColor = ConsultarColor();
          var fundaCantidad = ConsultarCantidad(productos[2].nombre);
          var fundaFormaPago = ConsultarFormaPago();
          var fundaMonto = CalcularMonto(precioAntiShock,fundaCantidad);
          if (fundaFormaPago == 1) {
              mostrarTicket(fundaCantidad,productos[2].nombre,fundaColor,fundaMonto)
              articuloElegido = seguirComprando();
      }
          else if (fundaFormaPago == 2) {
              var montoPorCuota = calcularCuota(fundaMonto)
              mostrarTicket(fundaCantidad,productos[2].nombre,fundaColor,fundaMonto)
              alert(`EL VALOR DE CADA CUOTA A ABONAR ES DE: $${montoPorCuota}`);
              articuloElegido = seguirComprando();
      }
                break;  
                
        default:
    
            break;
    }
    
} while (articuloElegido === 1 || articuloElegido == 2 || articuloElegido == 3)

function ConsultarColor () {
    let color = parseInt(prompt("INGRESE EL NUMERO DEL COLOR QUE DESEA COMPRAR: \n1) NEGRO \n 2) AZUL \n 3) ROJO \n 4) ROSA \n 5) BLANCO"))
        if (color == 1) {
            color = "NEGRO";
        }
        else if (color == 2) {
            color = "AZUL";
        }
        else if (color == 3) {
            color = "ROJO";
        }
        else if (color == 4) {
            color = "ROSA";
        }
        else if (color == 5) {
            color = "BLANCO";
        }
        else {
            alert("INGRESO COLOR EQUIVOCADO")
            ConsultarColor();
        }
    return color;
}

function ConsultarCantidad (producto) {
  let cant = prompt(`INGERESE LA CANTIDAD DE ${producto} DESEADA`)
  return cant
}

function ConsultarFormaPago () {
    let forma = prompt("INGRESE EL NUMERO DE LA FORMA DE PAGO DESEADA: \n 1) EFECTIVO O DEBITO \n 2) TARJETA DE CREDITO");
    if (forma == 1) {
        console.log("USTED DECIDIO ABONAR EN EFECTIVO/DEBITO");
    }
    else if (forma == 2){
        console.log("USTED DECIDIO ABONAR CON TARJETA DE CREDITO ");
    }
    else {
        alert("INGRESO FORMA DE PAGO EQUIVOCADA, INTENTE NUEVAMENTE");
        ConsultarFormaPago();
    }
    return forma;
}

function CalcularMonto (precio,cantidad) {
    let montofinal = precio * cantidad;
    return montofinal;
}

function calcularCuota (monto) {
    let cuotas = prompt("ELIJA CANTIDAD DE CUOTAS: \n 1 CUOTA SIN INTERES \n 3 CUOTAS SIN INTERES \n 6 COUTAS CON 10% DE RECARGO");
    if (cuotas == 1) {
        console.log("USTED ELIJIO ABONAR CON TARJETA DE CREDITO EN 1 CUOTA SIN INTERES");
        montoCuota = monto
    }
    else if (cuotas == 3) {
        console.log("USTED ELIJIO ABONAR CON TARJETA DE CREDITO EN 3 CUOTAS SIN INTERES");
        montoCuota = monto/3
    }
    else if (cuotas == 6) {
        console.log("USTED ELIJIO ABONAR CON TARJETA DE CREDITO EN 6 CUOTAS SIN INTERES CON 10% DE RECARGO");
        montoCuota = (monto*1.10)/6
    }
    else {
        alert("NO OFRECEMOS ESA CANTIDAD DE CUOTAS, INTENTE NUEVAMENTE");
        calcularCuota();

    }
    return montoCuota
}


function seguirComprando() {

    var opcion = confirm("¿DESEA REALIZAR OTRA COMPRA?")
    if (opcion == true) {
        let articuloElegido = Number(prompt("INGRESE EL NUMERO DEL ARTICULO QUE DESEA COMPRAR: \n 1) FUNDA DIAMOND \n 2) FUNDA BUMPER CASE \n 3) FUNDA ANTISHOCK"));
        return articuloElegido;
    }
    else {
        alert("MUCHAS GRACIAS POR ELEJIRNOS");
    }

}

function mostrarTicket (cantidad,nombre,color,monto) {
    console.log("***** TICKET DE COMPRA *****")
    console.log(`USTED ELIJIO COMPRAR ${cantidad} ${nombre} COLOR: ${color}`);
    console.log(`EL MONTO FINAL A ABONAR ES DE: $${monto}`);
    console.log("****************************");
}

