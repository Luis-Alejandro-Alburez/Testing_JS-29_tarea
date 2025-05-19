/*           CORRECTOR GRAMATICAL        

En este proyecto, utilizarÃ¡s lo que sabes sobre 
la iteraciÃ³n sobre matrices para recopilar 
informaciÃ³n y mejorar la calidad de un pÃ¡rrafo.

INSTRUCCIONES:
PASO 1
En el cÃ³digo que se te proporciona, la variable story
contiene un pÃ¡rrafor que editaremos.
Para editar la historia, la convertimos en un array
en la la lÃ­nea 3.
El mÂ´todo .split() separa la cadena story con el caracter
de espacio(' ') y almacena cadapalabra como un
elemento de la matriz.

Para ver la matriz con la que trabajaremos a lo
largo de la lecciÃ³n, registre en consola storyWords.
DesÃºÃ©s de ver la matriz storyWords, comenta el
console.log() para que no se ejecute.

PASO 2:
Para una mejor comparaciÃ³n visual de las historias originales y editadas, 
queremos visualizar el array storyWords editado como una cadena. 
Para convertir el array storyWords de nuevo en una cadena legible, 
podemos invocar el mÃ©todo .join() en storyWords.

Proporcione al mÃ©todo .join() un argumento de un carÃ¡cter de espacio vacÃ­o 
( ' ') para separar cada elemento de la matriz con un espacio en la cadena.
 
Coloque la invocaciÃ³n .join() del mÃ©todo como argumento de una 
declaraciÃ³n console.log() para registrar la historia final en la consola.

PASO 3: Contar las palabras.

Ahora es momento de empezar a editar la historia manipulando la 
matriz storyWords. Queremos ver los cambios, asÃ­ que asegÃºrate de que 
el console.log() de la historia unida sea la Ãºltima lÃ­nea de cÃ³digo en tu editor.
Primero, encima de la declaraciÃ³n console.log() que utiliza el mÃ©todo .join(),
crea una variable llamada count que almacene el nÃºmero 0.

Justo debajo count, use un mÃ©todo .forEach() para iterar sobre el 
array storyWords. Como argumento del mÃ©todo forEach(), cree una funciÃ³n 
vacÃ­a que se usarÃ¡ como funciÃ³n de devoluciÃ³n de llamada.

Si bien se recomienda la sintaxis de flecha ES6 para la funciÃ³n de devoluciÃ³n
de llamada (callback), siÃ©ntete libre de usar cualquier sintaxis con la que 
te sientas cÃ³modo.



PASO 4:
Para cada palabra de la matriz storyWords, queremos que la variable 
count se incremente en uno.

AÃ±ade un parÃ¡metro llamado word a la funciÃ³n de devoluciÃ³n de llamada 
del mÃ©todo .forEach() que se usarÃ¡ para almacenar el elemento actual al 
iterar sobre el array storyWords. En cada iteraciÃ³n storyWord se incrementa 
count en uno.

A continuaciÃ³n del mÃ©todo .forEach(), registre (console.log()) count para 
ver cuÃ¡ntas palabras hay en la historia.


PASO 5:
Un recuento de 183 palabras es demasiado para esta historia. 
Filtraremos todas las apariciones de la palabra "literalmente" 
para acortar la historia y eliminar la palabra innecesaria. 
Reasignaremos la historia filtrada a la misma variable storyWords aplicando 
el mÃ©todo .filter(). A lo largo del proyecto, usaremos este enfoque de 
reasignar la variable storyWords en cada revisiÃ³n de la historia.

Debajo de donde registraste la variable count, reasigna la 
variable storyWords para que sea igual a la invocaciÃ³n del mÃ©todo .filter() 
en el array storyWords. Asigna al mÃ©todo .filter() una funciÃ³n de 
devoluciÃ³n de llamada con un parÃ¡metro de word.

PASO 6:
Debajo de la declaraciÃ³n storyWords de la variable, observe la variable 
unnecessaryWord en la lÃ­nea 4. Queremos filtrar el valor de unnecessaryWord
de la historia.

Dentro del cuerpo filter() de la funciÃ³n de devoluciÃ³n de llamada del mÃ©todo,
retorna solo si word NO es igual a .unnecessaryWord.

Revisa la cadena story en la consola para asegurarte de que no incluya la 
palabra "literalmente". La primera vez que se usÃ³ "literalmente" 
estaba en la primera oraciÃ³n.


PASO 7:
Ahora que eliminamos las palabras innecesarias, corrijamos las palabras mal 
escritas de la historia. Podemos reasignarlas a storyWords una nueva matriz 
de palabras con correcciÃ³n ortogrÃ¡fica usando este mÃ©todo .map().

Reasignar storyWords para igualar la invocaciÃ³n del mÃ©todo .map() en la 
matriz storyWords.

Establecer word como parÃ¡metro de la funciÃ³n de devoluciÃ³n de llamada de .map().

En el cuerpo de la devoluciÃ³n de llamada, defina una sentencia condicional 
para comprobar si el argumento word es igual a la variable misspelledWord. 
Si lo es, devuelva la ortografÃ­a correcta de la cadena: "beautiful". 
Si no, devuelva word.

Â¡Revisa la cadena story en la consola para ver la ortografÃ­a correcta! 
Puedes ver una instancia de la palabra corregida en la primera oraciÃ³n de la historia.


PASO 8:
Tu sobrinito va a leer el cuento y hay una palabra "mala" en Ã©l. 
Apliquemos el mÃ©todo .findIndex() para en storyWords encontrar el Ã­ndice de 
la palabra mala.

Comience declarando una variable llamada badWordIndexy configurÃ¡ndola para 
la invocaciÃ³n de .findIndex()en la matriz storyWords.

La funciÃ³n .findIndex() de devoluciÃ³n de llamada debe verificar cada 
wordpara ver si es igual a la badWordvariable declarada en la lÃ­nea 6 y 
devolver el Ã­ndice de la palabra encontrada.

Luego, registre badWordIndex en la consola.

PASO 9:
Ahora que tenemos el Ã­ndice de la mala palabra, podemos reemplazarla 
fÃ¡cilmente con algo mÃ¡s apropiado.

Acceda al elemento dentro del array storyWords que tiene el Ã­ndice de 
badWordIndex usando la notaciÃ³n de corchetes. Establezca el elemento 
accedido igual a la cadena mÃ¡s apropiada, 'really'.

Guarde el cÃ³digo y verifique que la palabra incorrecta haya sido reemplazada.

PASO 10:
Finalmente, simplifiquemos las palabras de la historia para que sean mÃ¡s 
accesibles. Podemos asegurarnos de que cada palabra tenga 10 caracteres o 
menos usando el mÃ©todo .every() . Este mÃ©todo .every() utiliza una funciÃ³n 
de devoluciÃ³n de llamada para comprobar si todos los elementos de un array 
cumplen una condiciÃ³n especificada. Devuelve true si todos los elementos 
cumplen la condiciÃ³n y false si hay algÃºn elemento que no la cumple.

Para comenzar, define una variable llamada lengthChecky asÃ­gnale la 
invocaciÃ³n del mÃ©todo .every() en storyWords. En la funciÃ³n de devoluciÃ³n 
de llamada, comprueba si every word tiene menos de 10 caracteres.

Registre  lengthCheck en la consola para ver el resultado. Si true se 
registra, cada palabra de la historia tiene 10 caracteres o menos. 
De lo contrario, una o mÃ¡s palabras tienen mÃ¡s de 10 caracteres.

PASO 11:
Parece que hay al menos una palabra con mÃ¡s de 10 caracteres.

Utilice un mÃ©todo iterador de su elecciÃ³n para acceder a la palabra(s) 
en el storyWordsarray que tenga mÃ¡s de 10 caracteres. 
Luego, reemplace manualmente la palabra en la cadena story original por una 
mÃ¡s corta.
*/

let story =
  'Last weekend, I took literally the most beautifull hike of \
my life. The trail is called "The High Peak Loop" and \
it stretches all the way from Lake Placid to Mount Marcy, \
New York. Itâ€™s really an adventure from beginning to end! \
It is a 15-mile trek, and it literally took me an entire day. \
I stopped at Mirror Lake to take some artsy photos. \
It was a short stop, though,\
because I had a freaking steep climb ahead. \
After a quick break at the scenic Adirondack Lodge,\
I began my ascent up the rocky path. \
The summit is a breathtaking 5,344 feet high! \
I was already exhausted by the time I reached the h\
alfway point. \
Two hours later, I arrived at Indian Falls, \
an extremely beautifull cascade hidden in the forest.\
Something that surprised me was that near the end,\
 you literally loop back to the starting point! \
 At this stage, youâ€™re very close to finishing.;';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";
let badWordIndexy;
let count = 0;
let lengthCheck;

console.log(storyWords);

storyWords.forEach((word) => {
  count++;
});

console.log(count);
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

storyWords = storyWords.map((word) => {
  return word === misspelledWord ? "beautiful" : word;
});

badWordIndexy = storyWords.findIndex((word) => {
  return word === badWord;
});

console.log(badWordIndexy);
storyWords[badWordIndexy] = "really";

lengthCheck = storyWords.every((word) => {
  word.length <= 10;
});

console.log(lengthCheck);

storyWords = storyWords.map((word) => {
  return word.length >= 10 ? "XXX" : word;
});

console.log(storyWords.join(" "));
