/*const checkingMaxStrLength = function (str, max) {
  if(str.length<=max){
    return('true');}
  else {
    return('false');}
};
checkingMaxStrLength('Вася пьет компот',140);*/

/*const returnRandomInteger = function (min, max) {
  min=Math.ceil (min);
  max=Math.floor (max);
  const rez = Math.floor (Math.random () * (max — min + 1)) + min;
  return rez;
 if (min>0) {return ${ rez } целое число из диапазона от ${ min } до ${ max }; }
  else {return ('Упс, число не может быть меньше или равно 0'); }/
  };
  //returnRandomInteger (1,48);*/


const CREATE_OBJ = 25;
const returnRandomInteger = function (min, max) {
  min=Math.ceil(min);
  max=Math.floor(max);
  const rez = Math.floor(Math.random() * (max - min + 1)) + min;
  return rez;
};

const DESCRIPTION=['Фото1','Фото2','Фото3','Фото4','Фото5','Фото6','Фото7','Фото8','Фото9','Фото10','Фото11','Фото12','Фото13','Фото14','Фото15','Фото16','Фото17','Фото18','Фото19','Фото20','Фото21','Фото22','Фото23','Фото24','Фото25'];
const MESSAGE=['Всё отлично! В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.','Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.','Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAME=['Иван','Петр','Вася','Инна','Оля','Катя'];

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${returnRandomInteger(1, 6)}.svg`,
  message:MESSAGE[returnRandomInteger(0,MESSAGE.length-1)],
  name:NAME[returnRandomInteger(0,NAME.length-1)]
});

const createObject = (id) => {
  const comments = [];
  const commentsCount = returnRandomInteger(1,1);

  for (let i = 1; i <= commentsCount; i++) {
    comments.push(createComment(i));
  }
  return {
    id,
    url: `photos/${id}.jpg`,
    description:DESCRIPTION[returnRandomInteger(0,DESCRIPTION.length-1)],
    likes:returnRandomInteger(15,200),
    comments
  };
};

const generateObjects = (count) => {
  for (let i = 1; i <= count; i++) {
    console.log(createObject(i));
  }
};

generateObjects(CREATE_OBJ);
