export const firstLetterUpper = string => {
  const array = string.split(' ');
  let stringResponse = '';
  array.forEach(str => {
    stringResponse += `${str.charAt(0).toUpperCase() + str.slice(1)} `;
  });
  return stringResponse;
};

export const formatNumber = number => (number < 10 ? `0${number}` : number);
