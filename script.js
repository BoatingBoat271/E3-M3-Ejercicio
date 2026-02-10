// Funcion que calcula solo el monto de la propina
function calcularPropina(montoCuenta, porcentajePropina) {
  return montoCuenta * (porcentajePropina / 100);
}

// Pido los datos al usuario
var montoCuentaInput = prompt("Ingresa el monto de la cuenta:");
var porcentajePropinaInput = prompt("Ingresa el porcentaje de propina:");

// Convierto los textos a numeros para poder calcular
var montoCuenta = parseFloat(montoCuentaInput);
var porcentajePropina = parseFloat(porcentajePropinaInput);

// Calculo propina y total final
var montoPropina = calcularPropina(montoCuenta, porcentajePropina);
var totalPagar = montoCuenta + montoPropina;

// Muestro el resumen en consola
console.log("--- Resumen de la Cuenta ---");
console.log("Monto de la cuenta: $" + montoCuenta);
console.log("Propina (" + porcentajePropina + "%): $" + montoPropina);
console.log("Total a pagar: $" + totalPagar);