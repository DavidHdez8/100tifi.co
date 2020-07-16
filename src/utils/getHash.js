const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

    export default getHash;

/*  Conceptos
location.hash: tra el fragmento de la url a partir de un #
.slice: corta la url y muestra a partir del primer elemento
.toLocaleLowerCase(): convierte a minuscula a cadena
.split('/'): Separa la cadena en un array y elimina el / quedando espacio vacio. Ej [",1,"]
[1]: Trae el primer elemento del split anterior, que ocupa la segunda posición del array. 
*/