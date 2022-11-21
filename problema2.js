// 2.- Generar una función que reciba como parámetro un array de datos
// y retorne un array que contenga los valores pares únicos

const returnPairNumbers = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

console.log(returnPairNumbers([4, 7, 5, 4, 8, 5]));
