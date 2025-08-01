// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function asignarAmigoSecreto(nombres) {
  const asignaciones = {};
  const nombresDisponibles = [...nombres]; // Copia de la lista original

  for (let i = 0; i < nombres.length; i++) {
    const persona = nombres[i];

    // Filtramos para que no se asigne a sí mismo
    const posibles = nombresDisponibles.filter(nombre => nombre !== persona);

    if (posibles.length === 0) {
      // Si no hay opciones válidas, reiniciar el proceso
      return asignarAmigoSecreto(nombres); // Recursión
    }

    // Selecciona un amigo al azar
    const elegido = posibles[Math.floor(Math.random() * posibles.length)];

    asignaciones[persona] = elegido;

    // Eliminamos al elegido para que no se repita
    const index = nombresDisponibles.indexOf(elegido);
    nombresDisponibles.splice(index, 1);
  }

  return asignaciones;
}
