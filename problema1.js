// 1.- Generar una función que reciba una cadena de caracteres y separe por espacios e imprima al revés cada uno
// de los resultados.

const reversePhrase = (string) => {
  let phrase = '';
  let inversedWord = '';
  for (let i = 0; i < string.length; i++) {
    phrase = phrase + string[i];

    if (string[i] === ' ' || i === string.length - 1) {
      phrase.trim();

      // Invertimos el for para insertar al reves el array en una nueva variable
      for (let i = phrase.length - 1; i >= 0; i--) {
        inversedWord = inversedWord + phrase[i];
      }
      // Damos un espacio por cada vez que una palabra se haya invertido
      inversedWord = inversedWord + ' ';

      // Vaciamos el string para poder invertir otra palabra
      phrase = '';
    }
  }

  return inversedWord;
};

console.log(reversePhrase('Hola mundo'));
