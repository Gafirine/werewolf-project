/**
 * Shuffle element of an array.
 * 🔥 Modifications are done in-place.
 */
export function shuffle<T>(array: Array<T>) {
  let nbPermutation = 1 + Math.floor(Math.random() * array.length);

  for (let i = 0; i < nbPermutation; i++) {
    let index1 = Math.floor(Math.random() * array.length);
    let index2 = Math.floor(Math.random() * array.length);
    let temp = array[index2];
    array[index2] = array[index1];
    array[index1] = temp;
  }
}
