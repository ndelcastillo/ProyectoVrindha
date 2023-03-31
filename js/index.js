// class Equipo {
//     constructor(nombre, apellido, edad, pais, profesion, experiencia) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.pais = pais;
//         this.profesion = profesion;
//         this.experiencia = experiencia;
//     }
// }

// const PERSONA_ASTROLOGO = new Equipo("Juan", "Perez", 43, "Argentina", "Astrologo");
// const PERSONA_INGENIERO = new Equipo("Adriana", "Raud", 38, "Argentina", "Ingeniera");
// const PERSONA_MUSICO = new Equipo("Julio", "Coca", 44, "Uruguay", "Musico");
// console.log(PERSONA_ASTROLOGO)
// console.log(PERSONA_INGENIERO)
// console.log(PERSONA_MUSICO)

// class Tecnica {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.vendido = false;
//     }
//     aumentarPrecio(precioAumentar) {
//         this.precio += precioAumentar;
//     }
//     disminuirPrecio = (precioDisminuir) => (this.precio -= precioDisminuir);
//     vender() {
//         this.vendido = true;
//     }
// }

// const TECNICA_UNO = new Tecnica("Carta Natal", 4000)
// const TECNICA_DOS = new Tecnica("Dados Mágicos", 3000)
// const TECNICA_TRES = new Tecnica("Kendra Sound", 5000)
// console.log(TECNICA_UNO)
// console.log(TECNICA_DOS)
// console.log(TECNICA_TRES)

// //aumentarPrecio
// // TECNICA_UNO.aumentarPrecio(1000)
// // console.log(TECNICA_UNO.precio)

// //vender
// // TECNICA_UNO.vender()
// // console.log(TECNICA_UNO)


// class Cliente {
//     constructor(nombre, apellido, edad, pais, tecnica, tuvoExperiencia) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.pais = pais;
//         this.tecnica = tecnica;
//         this.tuvoExperiencia = tuvoExperiencia;
//     }
//     saludar() {
//         alert(`Hola! Mi nombre es ${this.nombre} ${this.apellido} y estoy interesado en la técnica ${this.tecnica}`)
//     }
// }

// function crearCliente() {
//     let nombre = prompt("Ingresa tu nombre")
//     let apellido = prompt("Ingresa tu apellido")
//     let edad = prompt("Ingresa tu edad")
//     let pais = prompt("Ingresa tu pais")
//     let tecnica = prompt("Ingresa la tecnica que te interesa")
//     let tuvoExperiencia = prompt("Tuviste experiencia previa? (Si/No)")

//     if (tuvoExperiencia.toLowerCase() == "Si") {
//         tuvoExperiencia = true
//     } else {
//         tuvoExperiencia = false
//     }

//     const OBJETO_CLIENTE = new Cliente(
//         nombre,
//         apellido,
//         edad,
//         pais,
//         tecnica,
//         tuvoExperiencia,
//     );

//     return OBJETO_CLIENTE;
// }

// const PRIMER_CLIENTE = crearCliente()
// // console.log(PRIMER_CLIENTE)

// PRIMER_CLIENTE.saludar()

// for (const propiedad in PRIMER_CLIENTE) {
//     console.log(propiedad + " : " + PRIMER_CLIENTE[propiedad])
// }





//================ EJEMPLO COMPLETO ================
// class Producto {
//     constructor(nombre, precioCompra, precioVenta, cantidad) {
//       this.nombre = nombre.toUpperCase();
//       this.precioCompra = precioCompra;
//       this.precioVenta = precioVenta;
//       this.cantidad = cantidad;
//     }
//     calcularCosto = () => this.cantidad * this.precioCompra;
//   }
  
//   function agregarProductos() {
//     let numeroProductos = parseInt(
//       prompt("Cuantos productos necesita registrar")
//     );
//     let productos = [];
//     for (let index = 0; index < numeroProductos; index++) {
//       let nombre = prompt("Ingrese el nombre");
//       let precioCompra = prompt("Ingrese el precio de compra");
//       let precioVenta = prompt("Ingrese el precio de venta");
//       let cantidad = prompt("Ingrese la cantidad");
//       let productoARegistrar = new Producto(
//         nombre,
//         precioCompra,
//         precioVenta,
//         cantidad
//       );
//       productos.push(productoARegistrar);
//     }
//     return productos;
//   }
  
//   function mostrarProductos(productos) {
//     for (const producto of productos) {
//       console.log(producto);
//       console.log(producto.nombre);
//     }
//   }
  
//   function calcularCosto(productos) {
//     let sumatoriaCosto = 0;
//     for (const producto of productos) {
//       sumatoriaCosto += producto.calcularCosto();
//     }
//     return sumatoriaCosto;
//   }
  
//   function main() {
//     let productos = agregarProductos();
//     mostrarProductos(productos);
//     let costoAlmacen = calcularCosto(productos);
//     alert("El costo total del almacén es: " + costoAlmacen);
//   }
  
//   main();
  
  