let precioEntrada = 1800;


const compra = (precioEntrada) => {
  let cantidad = parseInt(prompt("CANTIDAD DE ENTRADAS"));
  console.log(`CANTIDAD DE ENTRADAS: ${cantidad}`);
  precioFinal = cantidad * precioEntrada;
  console.log(`SUBTOTAL: $${precioFinal}`);
  return precioFinal;
};

const formaPago = (total) => {

    let formaPago = parseInt(prompt("ELEJI LA FORMA DE PAGO \n 1: EFECTIVO \n 2: TARJETA DE DEBITO/CREDITO (RECARGO 10%)"));
    let precioFinal = total

    if (formaPago == 1) {
        console.log(`METODO DE PAGO: ${formaPago}`);
        console.log(precioFinal);
        return precioFinal
    }
    else if (formaPago == 2) {
        precioFinal = total * 1.10
        console.log(`METODO DE PAGO: ${formaPago}`);
        console.log(precioFinal);
        return precioFinal.toFixed(2)
    }
    else {
        alert("ESE NO ES UN METODO DE PAGO VALIDO")
        formaPago = parseInt(prompt("ELEJI LA FORMA DE PAGO \n 1: EFECTIVO \n 2: TARJETA DE DEBITO/CREDITO (RECARGO 10%)"));
    }
}

alert("¡BIENVENIDO! CON NOSOTROS TU NOCHE VA A SER PERFECTA, CUALQUIER ENTRADA A TAN SOLO $1800");

let localidad = 0;


while (localidad == 0) {
  localidad = parseInt(prompt("ELEJI TU CIUDAD: \n 1: CORDOBA \n 2: BUENOS AIRES \n 3: MENDOZA \n 4: SAN LUIS"));

  if (localidad === 1 || localidad == 2 || localidad == 3 || localidad == 4) {
    switch (localidad) {
      case 1:
        var evento = parseInt(prompt("ELEJI EL EVENTO \n 1: ARANGO \n 2: SIGNO \n 3: PARIS \n 4: PALACIO ALSINA \n 5: NOMADE"));
        var subtotal = compra(precioEntrada);
        var total = formaPago(subtotal)
        alert(`¡COMPRA EXITOSA, TOTAL: $${total} MUCHAS GRACIAS!`)
        break;

      case 2:
        var evento = parseInt(prompt("ELEJI EL EVENTO \n 1: CLUB ARAOZ \n 2: SUCHT \n 3: KIKA CLUB \n 4: JUANA"));
        var subtotal = compra(precioEntrada);
        var total = formaPago(subtotal)
        alert(`¡COMPRA EXITOSA, TOTAL: $${total} MUCHAS GRACIAS!`)
        break;

      case 3:
        var evento = parseInt(prompt("ELEJI EL EVENTO \n 1: WAVI \n 2: BLACK JAGGER \n 3: SUBURBIA"));
        var subtotal = compra(precioEntrada);
        var total = formaPago(subtotal)
        alert(`¡COMPRA EXITOSA, TOTAL: $${total} MUCHAS GRACIAS!`)
        break;

      case 4:
        var evento = parseInt(prompt("ELEJI EL EVENTO \n 1: POINT \n 2: AQUA BARRA \n 3: JAGGER ESPACIO \n 4: SKY"));
        var subtotal = compra(precioEntrada);
        var total = formaPago(subtotal)
        alert(`¡COMPRA EXITOSA, TOTAL: $${total} MUCHAS GRACIAS!`)
        break;

      default:
        break;
    }
  } 
  else {
    alert("PRONTO ESTAREMOS ALLI ...");
    localidad = 0;
  }
}
