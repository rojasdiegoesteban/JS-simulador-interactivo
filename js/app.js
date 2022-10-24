const productos = ["NIKE AIR FORCE", "ADIDAS FORUM", "FILA RENNO", "NEW BALANCE 574", "ADIDAS SUPERSTAR"];
const precio = [25000, 40000, 28000, 32000, 35000]
const formaDePago = ["Efectivo (10% de descuento)", "Debito", "3 cuotas sin interes", "6 cuotas (recargo 10%)", "12 cuotas (recargo 20%)"]
let msjEncabezadoProd = "Seleccione producto:\n";
let msjEncabezadoPago = "Seleccione medio de pago:\n";
let msjEncabezadoCant = "Ingrese la cantidad: ";
let msjDetallePago = "Detalle de facturación: \n\n";
let prodSeleccionado = 0;
let FormaDePagoSeleccionado = 0;
let cantidadProd = 0;
let descuento = 0;
let cuotas = 0;
let precioFinal = 0;
let isIngresoValido = false;


const msjPantalla = function (msj, list) {
    let j = 0;

    for (let i = 0; i < list.length; i++) {
        j = i + 1;
        msj = msj + j + " - " + list[i] + "\n";
    }

    j = j + 1;
    msj = msj + j + " - " + "Salir";

    return msj;
}

function validarOpcion(mensaje, lista) {
    let seleccionado;

    while (true) {
        seleccionado = parseInt(prompt(msjPantalla(mensaje, lista)));

        if (!isNaN(seleccionado) && seleccionado != null && seleccionado != "") {
            break;
        }
        else {
            alert("Por favor ingrese una opcion valida");
            continue;
        }

    }
    return seleccionado;
}

function cantidadProducto(mensaje) {
    let cantidad;

    while (true) {
        cantidad = parseInt(prompt(mensaje));

        if (!isNaN(cantidad) && cantidad != null && cantidad != "") {
            break;
        }
        else {
            alert("Por favor ingrese una cantidad valida");
            continue;
        }
    }
    return cantidad;
}

function calcularPrecioFinal(precio, cant, descuento, cuotas) {
    let precioFinal = precio * cant;
    let precioDescuento = 0;
    let recargo = 0;

    if (descuento > 0) {
        precioDescuento = ((precioFinal * descuento) / 100);
        precioFinal = precioFinal - precioDescuento;
    }

    if (cuotas == 3) {
        precioFinal = precioFinal / cuotas;
    }

    if (cuotas == 6) {
        recargo = ((precioFinal * 10) / 100);
        precioFinal = precioFinal + recargo;
        precioFinal = precioFinal / cuotas;
    }

    if (cuotas == 12) {
        recargo = ((precioFinal * 20) / 100);
        precioFinal = precioFinal + recargo;
        precioFinal = precioFinal / cuotas;
    }
    return precioFinal;
}

function detalleProducto(productoRequerido) {
    let msjOpcionesPago = "";

    /*Solicito que ingrese cantidad de producto */
    cantidadProd = cantidadProducto(msjEncabezadoCant);

    msjOpcionesPago = "Producto seleccionado: " + productos[productoRequerido - 1] + "\n";
    msjOpcionesPago = msjOpcionesPago + "Cantidad: " + cantidadProd + "\n";
    msjOpcionesPago = msjOpcionesPago + "Valor por unidad: " + "$" + precio[productoRequerido - 1] + "\n";
    msjOpcionesPago = msjOpcionesPago + "Total: " + "$" + precio[productoRequerido - 1] * cantidadProd + "\n\n";
    msjOpcionesPago = msjOpcionesPago + msjEncabezadoPago;
    FormaDePagoSeleccionado = validarOpcion(msjOpcionesPago, formaDePago);
}

/*********************************************************************************************/

/*Solicito al usuario que seleccione producto*/
prodSeleccionado = validarOpcion(msjEncabezadoProd, productos);

switch (prodSeleccionado) {
    //NIKE AIR FORCE
    case 1:
        isIngresoValido = true;
        detalleProducto(prodSeleccionado);
        break;

    //ADIDAS FORUM   
    case 2:
        isIngresoValido = true;
        detalleProducto(prodSeleccionado);
        break;

    //FILA RENNO
    case 3:
        isIngresoValido = true;
        detalleProducto(prodSeleccionado);
        break;

    //NEW BALANCE 574
    case 4:
        isIngresoValido = true;
        detalleProducto(prodSeleccionado);
        break;

    //ADIDAS SUPERSTAR
    case 5:
        isIngresoValido = true;
        detalleProducto(prodSeleccionado);
        break;

    //SALIR
    case 6:
        alert("Hasta pronto!");
        break;

    default:
        alert("La opcion ingresada no se encuentra disponible.");
        break;
}

if (isIngresoValido) {
    switch (FormaDePagoSeleccionado) {
        //Efectivo
        case 1:
            descuento = 10;
            cuotas = 0;
            precioFinal = calcularPrecioFinal(precio[prodSeleccionado - 1], cantidadProd, descuento, cuotas)
            msjDetallePago = msjDetallePago + "Producto: " + productos[prodSeleccionado - 1] + "\n";
            msjDetallePago = msjDetallePago + "Cantidad: " + cantidadProd + "\n";
            msjDetallePago = msjDetallePago + "Forma de pago: " + formaDePago[FormaDePagoSeleccionado - 1] + "\n";
            msjDetallePago = msjDetallePago + "Total a pagar: $" + precioFinal;
            alert(msjDetallePago);
            break;

        //Debito
        case 2:
            descuento = 0;
            cuotas = 0;
            precioFinal = calcularPrecioFinal(precio[prodSeleccionado - 1], cantidadProd, descuento, cuotas)
            msjDetallePago = msjDetallePago + "Producto: " + productos[prodSeleccionado - 1] + "\n";
            msjDetallePago = msjDetallePago + "Cantidad: " + cantidadProd + "\n";
            msjDetallePago = msjDetallePago + "Forma de pago: " + formaDePago[FormaDePagoSeleccionado - 1] + "\n";
            msjDetallePago = msjDetallePago + "Total a pagar: $" + precioFinal;
            alert(msjDetallePago);
            break;

        //3 cuotas sin interes
        case 3:
            descuento = 0;
            cuotas = 3;
            precioFinal = calcularPrecioFinal(precio[prodSeleccionado - 1], cantidadProd, descuento, cuotas)
            msjDetallePago = msjDetallePago + "Producto: " + productos[prodSeleccionado - 1] + "\n";
            msjDetallePago = msjDetallePago + "Cantidad: " + cantidadProd + "\n";
            msjDetallePago = msjDetallePago + "Forma de pago: " + formaDePago[FormaDePagoSeleccionado - 1] + "\n";
            msjDetallePago = msjDetallePago + "Total a pagar: " + "3 cuotas de $" + precioFinal.toFixed(2);
            alert(msjDetallePago);
            break;

        //6 cuotas (recargo 10%)
        case 4:
            descuento = 0;
            cuotas = 6;
            precioFinal = calcularPrecioFinal(precio[prodSeleccionado - 1], cantidadProd, descuento, cuotas)
            msjDetallePago = msjDetallePago + "Producto: " + productos[prodSeleccionado - 1] + "\n";
            msjDetallePago = msjDetallePago + "Cantidad: " + cantidadProd + "\n";
            msjDetallePago = msjDetallePago + "Forma de pago: " + formaDePago[FormaDePagoSeleccionado - 1] + "\n";
            msjDetallePago = msjDetallePago + "Total a pagar: " + "6 cuotas de $" + precioFinal.toFixed(2);
            alert(msjDetallePago);
            break;

        //12 cuotas (recargo 20%)
        case 5:
            descuento = 0;
            cuotas = 12;
            precioFinal = calcularPrecioFinal(precio[prodSeleccionado - 1], cantidadProd, descuento, cuotas)
            msjDetallePago = msjDetallePago + "Producto: " + productos[prodSeleccionado - 1] + "\n";
            msjDetallePago = msjDetallePago + "Cantidad: " + cantidadProd + "\n";
            msjDetallePago = msjDetallePago + "Forma de pago: " + formaDePago[FormaDePagoSeleccionado - 1] + "\n";
            msjDetallePago = msjDetallePago + "Total a pagar: " + "12 cuotas de $" + precioFinal.toFixed(2);
            alert(msjDetallePago);
            break;

        //SALIR
        case 6:
            alert("Hasta pronto!");
            break;

        default:
            alert("La opcion ingresada no se encuentra disponible.");
            break;
    }
}