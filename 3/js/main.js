let ReturnRandomInteger = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
       let rez=Math.floor(Math.random() * (max - min + 1)) + min
      if(min>0) {return rez + ' целое число из диапазона от '+ min + ' до ' + max;}
      else {console.log('Упс, число не может быть меньше или равно 0');}
};
ReturnRandomInteger();

let CheckingMaxStrLength = function (str, max) {
       if(str.length<=max){
        console.log('true')
    }
    else {console.log('false')}
};
CheckingMaxStrLength();