const addSeperator = input => {
  let lastPart;
  let wholePart;
  const indexOfDotIfExists = input.indexOf('.');
  if (indexOfDotIfExists === -1) {
    lastPart = '';
    wholePart = input.slice();
  } else {
    lastPart = input.slice(indexOfDotIfExists, input.length);
    wholePart = input.slice(0, indexOfDotIfExists);
  }
  const seperated = wholePart.split('').reverse().map((char, index) => {
    if (index % 3 === 0 && index !== 0) {
      return `${char},`;
    }
    return char;
  });

  return seperated.reverse().join('') + lastPart;
};

export default addSeperator;
