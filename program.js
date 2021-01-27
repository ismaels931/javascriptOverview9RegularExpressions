console.log("Las expresiones regulares son una forma de describir patrones en datos de cadenas. Constituyen un pequeño lenguaje que");
console.log("forma parte de JS y de otros lenguajes de programación. Son una herramienta potente para inspeccionar y procesar cadenas.");
console.log();
console.log("Una expresión regular es un tipo de objeto. Se pueden crear mediante el constructor 'RegExp' o como un valor literal");
console.log("mediante la inclusión de un patrón entre caracteres '/' e.g.");

let re1 = new RegExp("abc");
let re2 = /abc/;

console.log("La barra invertida (backslash) se usa para representar un carácter per se, por que es especial (salto de línea) o porque");
console.log("tiene un significado especial dentro de la expresión regular (+, ?) e.g.");

let eighteenPlus = /eighteen\+/;

console.log();

console.log("Un objeto de expresión regular tiene varios métodos. El más simple es 'test' que retorna un booleano que indica si un string");
console.log("contiene una coincidencia con el patrón en la expresión e.g.");

console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

console.log("Una expresión regular que consta solo de caracteres no especiales, representa esa secuencia de caracteres. Si 'abc' se");
console.log("se encuentra en cualquier de la cadena 'test' retorna true");

console.log();

console.log("Las expresiones regulares permiten expresar patrones más complicados. Por ejemplo, hacer coincidir cualquier número.");
console.log("En una RegExp poner un conjunto de caracteres entre corchetes hace que esa parte de la expresión (del string) coincida");
console.log("con cualquiera de los caracteres entre corchetes e.g.");

console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992")); //Esta expresión regular representa un rango y es la misma que la de arriba

console.log();
console.log("Varios grupos de caracteres comunes tienen sus propios atajos. Por ejemplo '\\d' significa lo mismo que '[0-9]'");
console.log("Más atajos en la página 145 e.g.");

console.log(/\d/.test("in 1992"));
console.log(/\w/.test("@*"));
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("21-07-1989 14:00"));
console.log(dateTime.test("21-jul-1989 14:00"));

console.log();

console.log("Estos código de barra invertida también se pueden utilizar entre corchetes e.g. '[\\d.]' que significa que cualquier");
console.log("dígito o carácter puede coincidir. Pero el punto per se, entre corchetes, pierde su significado especial.");

console.log("Para invertir un conjunto de caracteres i.e. para expresar que se desea hacer coincidir cualquier carácter excepto los");
console.log("del conjunto, se escribe '^' después del corchete de apertura e.g.");

let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
console.log(notBinary.test("1100100010200110"));

console.log("Para hacer coincidir uno o más dígitos podemos usar '+' después de algo en una RegExp e.g.");

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));

console.log("Con '*' hacemos coincidir algo 0 o más veces e.g.");

console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

console.log("Un '?' hace que una parte de un patrón sea opcional i.e. puede aparecer cero o una vez e.g.");

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

console.log("Para indicar que un patrón ocurra un número preciso de veces, se usa llaves e.g.");

let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime2.test("1-30-2003 8:45"));

console.log("Se pueden especificar rangos e.g. {5,} significa 5 o más veces.");

console.log();

console.log("Para usar '*' o '+' en más de un elemento a la vez, hay que usar paréntesis. Una parte de una RegExp que está entre");
console.log("paréntesis cuenta como un solo elemento en lo que respecta a los operadores que le siguen e.g.");

//La 'i' del final de la RegExp indica case insensitive
let cartoonCrying = /boo+(hoo+)+/i;
//El método test retornará true solo si la cadena contiene 'boo' seguido de 'hoo' como mínimo
console.log(cartoonCrying.test("Boohoooohoohooo"));

console.log();

console.log("El método exec retorna null si no encuentra ninguna coincidencia y retorna un objeto con información sobre la coincidencia");
console.log("en caso contrario e.g.");

let match = /\d+/.exec("one two");
console.log(match);
match = /\d+/.exec("one two 100");
console.log(match); //El objeto devuelto es un array de strings, cuyo primer elemento es la cadena que ha coincidido
console.log(match.index); //Indica en que parte de la cadena empieza la coincidencia exitosa

console.log();

console.log("Cuando la expresión regular contiene subexpresiones agrupadas entre paréntesis, el texto que coincide con esos");
console.log("grupos también aparacerán en la matriz. Toda la coincidencia es siempre el primer elemento. El siguiente elemento");
console.log("es la parte que coincide con el primer grupo (el que tiene el paréntesis de apertura primero en la expresión), luego");
console.log("el segundo y así sucesivamente e.g.");

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log("Cuando un grupo no coincide, aparecerá en el array como undefined. Por otro lado, cuando un grupo coincide varias veces,");
console.log("solo la última coincidencia aparece en la matriz e.g.");

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));

console.log("Los grupos pueden resultar útiles para extraer partes de una cadena.");

console.log();

console.log("JS tiene una clase estándar para representar fechas y horas e.g.");

console.log(new Date()); //Retorna la fecha y hora actual
console.log(new Date(2009, 11, 9)); //Establece una fecha
console.log(new Date(2009, 11, 9, 12, 59, 59, 99)); //Establece una fecha y una hora

console.log("JS usa un convención para representar los meses que consiste en que el primer mes empieza con 0 e.g. Diciembre es 11");
console.log("Los últimos cuatro argumentos (horas, minutos, segundos y milisegundos) son opcionales y toman 0 como valor por defecto.");
console.log("Las marcas de tiempo se almacenan como el número de milisegundos desde el comienzo de 1970 en UTC (tiempo Unix) e.g.");

let miliSeg = new Date(2013, 11, 19).getTime(); //Retorna los milisegundos transcurridos desde 1970 hasta 19/11/2013
console.log(miliSeg);
console.log(new Date(miliSeg));

console.log("Si se le pasa al constructor Date un solo argumento, ese argumento se trata de un conteo de milisegundos. Se puede");
console.log("obtener el recuento actual de milisegundos creando un nuevo objeto Date y llamando a getTime en él o llamando a la");
console.log("función Date.now e.g.");

console.log(new Date(100000000));
console.log(new Date(new Date().getTime()));
console.log(Date.now());

console.log("El objeto Date, tiene métodos como getFullYear, getMonth, getDate, getHours, getMinutes y getSeconds. Poniendo entre");
console.log("paréntesis las partes de la expresión que nos interesan, podemos crear un objeto de fecha a partir de una cadena e.g.");

function getDate(string) {
	let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string); //La barra baja se usa para omitir la coincidencia completa
	return new Date(year, month - 1, day); //Recordar que los meses se cuentan desde 0 por se le resta uno a la variable month
}

console.log(getDate("1-30-2003"));

console.log();

console.log("Si queremos que la coincidencia abarque toda la cadena, tenemos que agregar los marcadores ^ y $. El primer marcador");
console.log("coincide con el inicio de la cadena de entrada, mientras que el segundo, coincide con el final. Entonces, /^\\d+$/");
console.log("coincide con un cadena que consta en su totalidad de uno o más dígitos, /^!/ coincide con cualquier cadena que comience");
console.log("con un signo de exclamación y /x^/ no coincide con ninguna cadena (no puede haber una x antes del comienzo de una cadena)");
console.log("El marcador \\b marca ĺos límites de una cadena e.g.");

console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));

console.log();

console.log("El caracter de barra vertical '|' denota una elección entre el patrón a su izquierda y el patrón a su derecha e.g.");

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));

console.log();

console.log("The mechanics of matching");

console.log("Para hacer una coincidencia real, el motor de expresiones regulares trata una RegExp como un diagrama de flujo e.g.");
console.log("página 151. La expresión coincide si podemos encontrar un camino desde el lado izquierdo del diagrama hasta el lado");
console.log("derecho.");

console.log();

console.log("Backtracking");

//La siguiente expresión regular coincide con un número binario seguido de una b, un número hexadecimal seguido de una h
//o un número en base decimal. El diagrama correspondiente se encuntra en la página 152
let bt = /\b([01]+b|[\da-f]+h|\d+)\b/;
console.log(bt.test("11000111b"));
console.log(bt.test("f12ah"));
console.log(bt.test("10"));

console.log();

console.log("Las cadenas tienen el método replace, que se usa para reemplazar parte de un string por otra string e.g.");

console.log("papa".replace("p", "m"));

console.log("El primer argumento de este método puede ser una expresión regular. En este caso la primera coincidencia de la RegExp");
console.log("será reemplazada. Cuando se añade la opción 'g' (global) a la RegExp, todas la coincidencias serán reemplazadas no solo");
console.log("la primera e.g.");

console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));

console.log("El poder real de usar expresiones regulares con replace proviene del hecho de que podemos hacer referencia a grupos");
console.log("coincidentes en la cadena de reemplazo. Por ejemplo, para cambiar su formato e.g.");

let namesSurnames = "Liskov, Barbara\nMcCarthy, John\nWalder, Philip";
//$1 y $2 en la cadena de reemplazo se refieren a los grupos entre paréntesis en el patrón. Se puede llegar hasta $9.
//Con $& se puede hacer referencia a toda la coincidencia.
console.log(namesSurnames.replace(/(\w+), (\w+)/g, "$2 $1"));

console.log("Es posible pasar una función, en lugar de una cadena, como segundo argumento de replace. Para cada reemplazo,");
console.log("la función se llamará con los grupos coincidentes como argumentos y su valor de retorno se insertará en la");
console.log("nueva cadena e.g.");

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
	amount = Number(amount) - 1;
	if (amount == 1) unit = unit.slice(0, unit.length - 1);
	else if (amount == 0) amount = "no";
	return amount + " " + unit;
}
//Toma una cadena, busca todas las apariciones de un número seguido de una palabra (que se vincula con match en la función) 
//y devuelve una cadena en la que cada ocurrencia se reduce en uno. El grupo (\d+) se vincula como el argumento del parámetro 
//amount y el grupo (\w+) como el argumento de unit
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

//Para clarificar como los argumentos se depliegan y se le pasan a la función minusOne, podemos usar el método exec e.g.
console.log(/(\d+) (\w+)/.exec(stock));

console.log();

console.log("Es posible usar replace para escribir una función que elimine todos los comentarios de una pieza de código JS e.g.")

function stripComments(code) {
	return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

//La parte antes del operador | coincide con dos caracteres de barra seguidos de cualquier número de caracteres que no sean nueva
//línea (gracias al punto). Después, escribimos la parte que coincide con comentarios multilínea y usamos [^] (cualquier caracter 
//que no esté en el conjunto vacío de caracteres) como una forma de coincidir con cualquier caracter ya sea especial, alfanúmero...
//Usamos * después de [^] para que coincida con todos los comentarios no solo con uno, como en el tercer ejemplo. Por esto se dice,
//que los operadores +, *, ? y {} son greedy. No obstante si se coloca un ?, después de ellos, se vuelven no greedy.
//Es mejor usar operadores no greedy, para evitar errores en los programas con RegExp

console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x = 10; // ten!"));
console.log(stripComments("1 /* a */+/* b */ 1"));

console.log();

console.log("Hay momentos en los que no sabemos el patrón exacto de coincidencia. Supongamos que queremos buscar el nombre del usuario");
console.log("en un fragmento de texto y ponerlo entre guiones bajos para que destaque. Como sabremos el nombre solo cuando el programa");
console.log("se esté ejecutando, no podemos usar la notación basada en barras. Pero podemos construir una cadena y usar el constructor");
console.log("RegExp e.g.");

let name = "harry";
let text = "Harry is a suspicious character";
//Delante de las 'b' hay dos barras porque la RegExp se escribe como un string no entre barras
//gi son opciones que indican global y case insensitive
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

console.log("Si el nombre de usuario es críptico e.g. 'dea+hl[]rd' podemos agregar barras invertidas antes de cualquier carácter");
console.log("que tenga un significado especial, para solucionarlo e.g.");

let nerdName = "dea+hl[]rd";
let nerdText = "This dea+hl[]rd guy is super annoying.";
let escaped = nerdName.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let nerdRegexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(nerdText.replace(nerdRegexp, "_$&_"));

console.log();

console.log("El método indexOf en cadenas no se puede llamar con una RegExp. Pero hay otro método, search, que espera una expresión");
console.log("regular. Al igual que indexOf, devuelve el primer índice en el que se encontró la expresión, o -1 cuando no se encuentra");
console.log("e.g.");

console.log("  word".search(/\S/));
console.log("    ".search(/\S/));

console.log();

console.log("Los objetos de RegExp tienen propiedades. Una de ellas es source, que contiene la cadena a partir de la cual se creó la");
console.log("expresión. Otra propiedad es lastIndex, que controla, en algunas circunstancias, dónde comenzará la próxima coincidencia.");
console.log("Estas circunstancias se dan cuando la RegExp tiene habilitada la opción g (global) y sticky (y), y la coincidencia debe");
console.log("realizarse mediante el método exec e.g.");

let pattern = /y/g;
pattern.lastIndex = 3;
let match1 = pattern.exec("xyzzy");
console.log(match1.index);
console.log(pattern.lastIndex);

console.log("Si la coincidencia fue exitosa, exec actualiza la propiedad lastIndex, que será un índice más allá de la coincidencia. Si");
console.log("no se encontró coincidencia, lastIndex toma el valor 0, que es el valor que tiene por defecto cuando la RegExp está recién");
console.log("construida. La diferencia entre global y sticky es que, si sticky está activada, la coincidencia tendrá éxito solo si");
console.log("comienza directamente en lastIndex, mientras que global, buscará una posición en la que pueda comenzar una coincidencia e.g.");

let glob = /abc/g;
console.log(glob.exec("xyz abc"));
let stick = /abc/y;
console.log(stick.exec("xyz abc"));

console.log("Cuando usamos una misma expresión regular en múltiples llamadas a exec, estas actualizan la propiedad lastIndex lo que");
console.log("puede causar problemas ya que en una de las llamadas puede comenzar accidentalmente por un índice que no existe e.g.");

let digit = /\d/g;
console.log(digit.exec("here it is: 1"));
console.log(digit.exec("and now: 1"));

console.log("Otro efecto de la opción global es que cambia la forma en que funciona el método match cuando trabaja con cadenas. En");
console.log("lugar de devolver un array similar al devuelto por exec, match encuentra todas las coincidencias del patrón y retorna");
console.log("un array con todas las coincidencias e.g.");

console.log("Banana".match(/an/g));

console.log("Una cosa común, es escanear todas las ocurrencias de un patrón en una cadena, de una manera que nos dé acceso al objeto");
console.log("de coincidencia en el cuerpo de un bucle. Esto se puede hacer con lastIndex y exec e.g.");

let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let matchLoop;
//Esta condición del bucle permite hacer una coincidencia en cada iteración, guardando el resultado en matchLoop. Deja de iterar
//cuando no se encuentran más coincidencias.
while (matchLoop = number.exec(input)) {
	console.log("Found", matchLoop[0], "at", matchLoop.index);
}

console.log("Parsing an INI file");

console.log("Imaginar que estamos escribiendo un programa para recopilar automáticamente información sobre nuestros enemigos");
console.log("en Internet e.g. ver página 160 para ver ejemplo de un archivo INI");
console.log("o consultar https://es.wikipedia.org/wiki/INI_(extensi%C3%B3n_de_archivo)");
console.log("Nuestra tarea consiste en convertir una cadena que representa un archivo INI en un objeto cuyas propiedades contienen");
console.log("cadenas para la configuración escrita antes del encabezado de la primera sección y suobjetos para el resto de secciones");
console.log("con sus respectivas configuraciones. La idea consiste en analizar el archivo línea por línea, teniendo en cuenta el");
console.log("retorno de carro \\r y el salto de línea \\n e.g.");

function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  //El argumento que se le pasa a split, es una RegExp que le indica a split que divida string, línea por línea
  string.split(/\r?\n/).forEach(line => {
    let match;
    //Cuando la expresión regular se define entre los caracteres ^ y $ no puede haber espacios en blanco u otros caracteres al principio
    //y al final de la presunta cadena coincidente porque si no no coincidirá

    if (match = line.match(/^(\w+)=(.*)$/)) { //Coincide con una expresión parámetro=valor
    	console.log(match[1] + "," + match[2]);
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) { //Coincide con una sección, que se escribe: [nombreSección]
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) { //Si no es un parámetro, una sección o un comentario, error
      throw new Error("Line '" + line + "' is not valid.");
    }
  });
  return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));

console.log("Para resolver dudas consultar página 164. También puede ser útil usar https://www.debuggex.com/ (diagramas!!!)");

console.log();

console.log("RegExp golf");

console.log("Code golf es un término que se utiliza para jugar a intentar expresar un programa en particular con la menor cantidad");
console.log("de caracteres posible. Similarmente, regexp golf es la práctica de escribir una expresión regular tan pequeña como sea");
console.log("posible para que coincida un patrón determinado.");

let one = /ca(r|t)/g;
let two = /pr?op/g;
let three = /ferr\w+/g;
let four = /\w+ious/g;
let five = /\s[.,:;]/;
let six = /\w{7,}/g;
let seven = /\b[^e]+\b/i;

console.log("Solution: https://eloquentjavascript.net/code/#9.1");

console.log();

console.log("Quoting style");

let sentence = "'I'm the cook,' he said, 'it's my job.'";

let comillas = "Prueba \"escapar\" comillas";
console.log(comillas);

let expr = /(^|\W)'/g;

console.log(sentence);

let coincidencia;

while (coincidencia = expr.exec(sentence)) {
	console.log(coincidencia.index);
	console.log(coincidencia);
}

console.log(sentence.replace(expr, '$1"'));

console.log("Solution: https://eloquentjavascript.net/code/#9.2");

console.log();

console.log("Numbers again");

let reg = /^[+-]?(\d+(.\d*)?|.\d+)([Ee][+-]?\d+)?$/;