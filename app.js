//LONGEST WORD CHALLENGE

function longestWord(str) {
  let words = str.split(' ');
  //console.log(words);
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
//console.log(longestWord('I Woke up early today'));
//console.log(longestWord('I went straight to the beach'));

//Lo que sucede es que empieza el loop. Están todas las palabras separadas a causa
//del str.split. Entonces tengo "I" "WOKE" "UP" "EARLY" "TODAY" por ejemplo.
//Que pasa luego? El longesWord es "" , o sea es 0. Empieza el loop. Si word
//(o sea cada palabra separada por el split) es mayor a 0 en un primer momento,
//Entonces longestword se llena. El primer caso es "I", la pregunta que hace
//la maquina es "I que tiene una letra, es mayor a longestword que no tiene ninguna?"
//La respuesta es si, entonces longestword pasa a ser 1. Y asi sucesivamente hasta
//Que encuentra la palabra maxima dentro de ese array y ya nadie la supera.

//MATH SEQUENCES

function mathSequences(arr) {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arith.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.add(number2);
  }
  if (arith.size === 1) {
    return 'Arithmetic';
  }
  if (geo.size === 1) {
    return 'Geometric';
  } else {
    return -1;
  }
}

console.log(mathSequences([2, 4, 6, 8]));
//Arithmetic
console.log(mathSequences([3, 9, 27]));
//Geometric
console.log(mathSequences([2, 5, 14, 89]));
//-1
