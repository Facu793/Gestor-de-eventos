import readlineSync from "readline-sync";
import { eventos } from "./eventos.js";
import {
  agregarEvento,
  listarEventos,
  eliminarEvento,
  mostrarEventosFuturos,
  buscarEventos,
  mostrarDiasRestantes
} from "./funciones.js";

const listaEventos = [...eventos]; // Copia inicial

function mostrarMenu() {
  console.log("\x1b[32m\n--------------------------\n");
  console.log("\n==== GESTOR DE EVENTOS ====");
  console.log("1. Agregar evento");
  console.log("2. Listar eventos");
  console.log("3. Eliminar evento");
  console.log("4. Buscar evento");
  console.log("5. Mostrar eventos futuros");
  console.log("6. Días hasta cada evento");
  console.log("0. Salir ");

}

let opcion;

do {
  mostrarMenu();
  opcion = readlineSync.question("Seleccione una opción: ");
  console.log("\n--------------------------\n");
  switch (opcion) {
    case "1":
      agregarEvento(listaEventos);
      break;
    case "2":
      listarEventos(listaEventos);
      break;
    case "3":
      eliminarEvento(listaEventos);
      break;
    case "4":
      buscarEventos(listaEventos);
      break;
    case "5":
      mostrarEventosFuturos(listaEventos);
      break;
    case "6":
      mostrarDiasRestantes(listaEventos);
      break;
    case "0":
      console.log("Saliendo del sistema...");
      break;
    default:
      console.log("Opción no válida");

  }
} while (opcion !== "0");
