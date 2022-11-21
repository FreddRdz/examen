// 3.- Generar una función que reciba dos parámetros, los cuales determinen un inicio y un fin,
// y retorne los números primos gemelos que se encuentren dentro de éste rango.

const esPrimo = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return number !== 1 && number !== 0;
};

const obtenerPrimosGemelos = (num1, num2) => {
  if (num1 > num2) {
    return;
  }

  let primeNumbers = [];

  for (let i = num1; i <= num2; i++) {
    if (esPrimo(i)) {
      primeNumbers.push(i);
    }
  }

  let primeTwinsNumbers = [];
  let result = [];

  for (let i = 0; i < primeNumbers.length; i++) {
    const element = primeNumbers[i];
    const r = primeNumbers[i + 1] - element;
    if (r === 2) {
      primeTwinsNumbers = [element, primeNumbers[i + 1]];
      result.push(primeTwinsNumbers);
    }
  }

  for (let i = 0; i < result.length; i++) {
    console.log(
      `(${result[i][0]}) y (${result[i][1]}) son primos gemelos del rango del ${num1} al ${num2}`
    );
  }
};

obtenerPrimosGemelos(100, 150);
