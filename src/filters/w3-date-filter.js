module.exports = function w3cDate(date) {
  let dateObject = new Date(date);

  // If the date is invalid, try to parse it from the file slug
  if (dateObject instanceof Date && isNaN(dateObject)) {
    // Some of the dates are the file slug passed in
    if (date.includes('.')) {
      date = date.split('.')[0];

      dateObject = new Date(date);
    }
  }

  return dateObject.toISOString();
};
