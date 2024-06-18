const removeFromArray = function (array, ...remove) {


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
