function calcularTotal() {
    var gusto = document.getElementById("gusto").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;
    var pago = document.getElementById("pago").value;
    var nombre = document.getElementById("nombre").value;
    var subtotal = cantidad * precio;
    var total;
    
    if (pago == "efectivo") {
      total = subtotal * 0.9;
    } else if (pago == "tarjeta") {
      total = subtotal * 1.17;
    }
    
    var ticket = "Nombre: " + nombre + "\n" + 
                 "Gusto: " + gusto + "\n" + 
                 "Cantidad: " + cantidad + " kg" + "\n" + 
                 "Precio: $" + precio + "\n" + 
                 "Subtotal: $" + subtotal.toFixed(2) + "\n" + 
                 "Total: $" + total.toFixed(2);
    
    alert(ticket);
  }