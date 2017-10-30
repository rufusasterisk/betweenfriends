const locationCleaner = (locationQuery) => {
  return locationQuery.replace(/ /g, "+");
};


export default locationCleaner;
