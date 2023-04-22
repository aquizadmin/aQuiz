/**
 * @description - Array random sorting
 * @param {any[]} array - Array copy which should be sorted randomly
 * @return {any[]} - Copy of the array with randomly sorted order.
 */
const arrayRandomSorting = ({ array }) => {
  const arrayCopy = JSON.parse(JSON.stringify(array));
  arrayCopy.sort(() => 0.5 - Math.random());
  return arrayCopy;
};

export default arrayRandomSorting;
