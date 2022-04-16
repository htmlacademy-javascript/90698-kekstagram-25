const returnRandomInteger = function (min, max) {
  min=Math.ceil(min);
  max=Math.floor(max);
  const rez = Math.floor(Math.random() * (max - min + 1)) + min;
  return rez;
};
const isEscapeKey = function(evt) {
  return evt.key === 'Escape';
};
export {returnRandomInteger,isEscapeKey};
