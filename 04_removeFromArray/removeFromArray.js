const removeFromArray = function (array, ...remove) {

  // Loop through args array and compare each item to
  // each item in the given array, then remove if they are
  // ===


  // remove.forEach(itemToRemove => {
  //   array.forEach((arrayItem, i) => {
  //     if (arrayItem === itemToRemove) {
  //       array.splice(i, 1);
  //     }
  //     i++
  //   });
  // });
  // return array;

  return array.filter(element => !remove.includes(element));

};

// Do not edit below this line
module.exports = removeFromArray;
