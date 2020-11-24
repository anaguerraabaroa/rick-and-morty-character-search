![Rick and Morty](https://static1.squarespace.com/static/59bc0ff818b27dff8196865f/59bc14ae37c581cd2123f9cb/59e6d3471f318d351356ec16/1508299598333/rick-and-morty-season-3.jpg?format=1500w)

# MÓDULO 3: EJERCICIO DE EVALUACIÓN FINAL

Este es el ejercicio de evaluación final del módulo 3 del curso de Programación Frontend de Adalab Digital.

## OBJETIVO

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, pudiendo filtrar por nombre del personaje y acceder a una ficha con los detalles de cada personaje.

## REQUISITOS

Utilizar para el desarrollo la librería React.

## DESARROLLO

### Listado de personajes

- Acceder con una petición fetch al servicio de datos que devolverá un array con la información de los personajes.
- Endpoint del servicio de datos : https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json
- Pintar un listado de personajes, recorriendo el array con un método map, que contenga la siguiente información: imagen, nombre y especie del personaje.

### Filtrado de personajes

- Añadir un pequeño formulario para poder filtrar personajes por nombre.
- Recorrer el array y filtrar personajes aplicando los métodos filter e includes.
- A medida que se va escribiendo en el formulario van quedando en la interfaz únicamente los personajes que contienen las letras escritas en el input.

### Componentes utilizados en el ejercicio

- App: componente principal.
- Header: cabecera.
- Filters: buscador de personajes por nombre.
- CharacterList: listado de personajes.
- CharacterCard: tarjeta genérica de cada uno de los personajes del listado.
- CharacterDetail: tarjeta con el detalle de cada personaje del listado.
- Footer: copy.

### Detalle de personajes

- Utilizar React Router para pintar una tarjeta a pantalla completa con el detalle de cada personaje al hacer click sobre alguno de ellos, haciendo coincidir el id de cada personaje con el id de la ruta utilizando un método find.
- En los detalles debe aparecer la siguiente información: imagen, nombre, especie, planeta de origen, número de episodios en los que aparece el personaje y si está vivo o muerto.

### Detalles de calidad

- El campo de texto se debe incluir dentro de un formulario para cuidar la semántica.
- Al pulsar intro en el campo de texto se debe impedir que el navegador envíe la petición o cambie de ruta aplicando un prevent event default.
- Si se busca por el nombre de un personaje que no existe se debe mostrar un mensaje de error.
- El campo de texto debe filtrar tanto en mayúsculas como en minúsculas aplicando un método toLowerCase.
- Al entrar en detalles del personaje y volver a la página principal se debe poder leer el texto que se había incluido inicialmente en el campo de texto. Para ello se recoge el valor del input y aplicando lifting se guarda en el estado del componente principal para bajarlo nuevamente al value del componente filters.

### BONUS: Mejoras visuales

- Mostrar la especie y el estado del personaje con un icono.
- Usar un sistema de grid para pintar el listado de personajes.
- Cuidar el funcionamiento del responsive en dispositivos pequeños.

### BONUS: URL compartible

- La URL del detalle del personaje debe ser compatible y poder acceder a ella visitándola directamente desde el navegador.
- Mostrar un mensaje de error si se introduce una ruta inexistente en el navegador.

### BONUS: Ordenación

- Ordenar alfabéticamente el listado de personajes utilizando un método sort.

## RESULTADO

- URL del ejercicio: http://beta.adalab.es/modulo-3-evaluacion-final-anaguerraabaroa/#/
