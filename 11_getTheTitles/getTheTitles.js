const getTheTitles = function (arrayOfBooks) {
  const arrayOfTitles = [];
  arrayOfBooks.forEach((book) => {
    arrayOfTitles.push(book.title);
  });
  return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
