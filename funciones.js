import readlineSync from 'readline-sync';

export function agregarEvento(lista) {
  const nombre = readlineSync.question("Nombre del evento: ");
  const ubicacion = readlineSync.question("Ubicación: ");
  const fecha = readlineSync.question("Fecha (YYYY-MM-DD): ");

  const fechaValida = Date.parse(fecha);
  if (isNaN(fechaValida)) {
    return console.log("Fecha inválida.");
  }

  lista.push({ nombre, fecha, ubicacion });
  console.log("Evento agregado.");
}

export function listarEventos(lista) {
  lista.forEach((e, i) => {
    const fechaFormateada = new Date(e.fecha).toLocaleDateString();
    console.log(`${i + 1}. ${e.nombre} - ${e.ubicacion} - ${fechaFormateada}`);
  });
}

export function eliminarEvento(lista) {
  listarEventos(lista);
  const indice = parseInt(readlineSync.question("¿Qué número de evento querés eliminar?: ")) - 1;

  if (indice >= 0 && indice < lista.length) {
    lista.splice(indice, 1);
    console.log("Evento eliminado.");
  } else {
    console.log("Índice inválido.");
  }
}

export function mostrarEventosFuturos(lista) {
  const futuros = lista.filter(e => new Date(e.fecha).getTime() > Date.now());
  listarEventos(futuros);
}

export function buscarEventos(lista) {
  const filtro = readlineSync.question("Buscar por nombre: ").toLowerCase();
  const resultados = lista.filter(e => e.nombre.toLowerCase().includes(filtro));
  listarEventos(resultados);
}

export function mostrarDiasRestantes(lista) {
  lista.forEach(e => {
    const diferencia = Math.abs(new Date(e.fecha).getTime() - Date.now());
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    console.log(` Faltan ${dias} días para ${e.nombre}`);
  });
}
