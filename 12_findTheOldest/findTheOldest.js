// take in the array of objects
// go through each object
// find the age of the first person
// find the age of the next person
// compare their age to the previous age
// store the name and age of the highest age
// repeat until the array is complete

const findTheOldest = function (people) {
  let highestAge = 0;
  let oldestPerson = null;
  people.forEach((person) => {
    let currentAge = person.yearOfDeath - person.yearOfBirth;
    if (currentAge > highestAge) {
      highestAge = currentAge;
      oldestPerson = person.name;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
