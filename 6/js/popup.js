import {generateObjects} from './js/data.js';
generateObjects.slice().reverse();

const pictureList=document.querySelector('.pictures');
const pictureTemplate=document.querySelector('#picture').content.querySelector('.picture');
const fragment=document.createDocumentFragment();

generateObjects.forEach(({url,likes,comments})=>{
  const pictureElement=pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture_img').src=url;
  pictureElement.querySelector('.picture_likes').textContent=likes;
  pictureElement.querySelector('.picture_comments').textContent=comments.length;
  fragment.appendChild(pictureElement);
});
pictureList.appendChild(fragment);
