# Proyecto Amigo Secreto 

Este proyecto es una aplicación en JavaScript que permite realizar un sorteo de amigos secretos entre un grupo de personas.

---

## Funcionalidades

- Permite ingresar una lista de nombres.
- Mezcla aleatoriamente los nombres para asignar un amigo secreto a cada participante.
- Se asegura de que nadie sea asignado a sí mismo.
- Reinicia el sorteo si no puede asignar correctamente.
- Muestra las asignaciones de manera clara y fácil de leer.

---

## Cómo usar

1. Clona el repositorio o descarga el código.
2. Ejecuta el script en un entorno que soporte JavaScript (por ejemplo, Node.js o un navegador).
3. Agrega la lista de nombres en el código.
4. Ejecuta la función para obtener las asignaciones.

---

## Ejemplo de uso

```js
const lista = ["Ana", "Luis", "Juan", "Sofía"];
const resultado = asignarAmigoSecreto(lista);
console.log(resultado);
