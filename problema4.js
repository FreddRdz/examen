// 4.- Generar una función que reciba como parámetros, un arreglo de datos enteros y un
// número entero y diga si la composición de la conjugación (la suma de uno o más valores
// únicos) de los datos del arreglo logran conformar el segundo parámetro

const conjugarNumeros = (array, number) => {
  let sum = 0,
    r = 0,
    results = [],
    newArray = [];
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];

    for (let j = i + 1; j < array.length; j++) {
      r = sum + array[j];
      // console.log(`Suma de ${sum} + ${array[j]} = ${r}`);
      results.push(r);
    }
    // console.log('Resultados: ', results);
  }

  for (let i = 0; i < results.length; i++) {
    const element = results[i];
    if (element === number) {
      return console.log('Sí hay una conjugación');
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArray.push(array[i]);
    }
  }

  if (array.length > 0) {
    conjugarNumeros(newArray, number);
  } else {
    console.log('No se ha encontrado una conjugación');
  }
};

conjugarNumeros([2, 5, 8, 44, 1, 7], 9);
conjugarNumeros([55, 3, 8, 11, 45, 1], 12);
conjugarNumeros([4, 8, 48, 44, 1], 11);
