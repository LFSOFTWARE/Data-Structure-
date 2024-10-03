var array = [31, 41, 59, 26, 41, 58]

console.log(array);

for (let j = 1; j < array.length; j++) {

  var chave = array[j]

  var i = j - 1

  while (array[i] > chave) {
    array[i + 1] = array[i]
    i = i - 1
  }
  array[i + 1] = chave

}

console.log(array);

for (let j = 1; j < array.length; j++) {

  var chave = array[j]

  var i = j - 1

  while (array[i] < chave) {
    array[i + 1] = array[i]
    i = i - 1
  }
  array[i + 1] = chave

}

console.log(array);

const v = 90

const search = (array, v) => {
  let indice = 0;

  while (indice < array.length) {
    if (array[indice] == v) {
      return indice;
    }
    indice++
  }
  return null
}

console.log('search', search(array,v));
