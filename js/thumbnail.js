import {generateObjects} from './data.js';
import { openFullPicture } from './full_picture.js';
const pictureList=document.querySelector('.pictures');
const pictureTemplate=document.querySelector('#picture').content.querySelector('.picture');
const fragment=document.createDocumentFragment();

generateObjects.forEach(({url,likes,comments})=>{
  const pictureElement=pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src=url;
  pictureElement.querySelector('.picture__likes').textContent=likes;
  pictureElement.querySelector('.picture__comments').textContent=comments.length;
  fragment.appendChild(pictureElement);
});
pictureList.appendChild(fragment);

pictureList.addEventListener('click', () => {
  openFullPicture();
  pictureListFull();

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      openFullPicture();
    }
  });
});

function pictureListFull (evt) {
  if (evt.target.closest('.big-picture__img')) {
    
  }
  if (evt.target.closest('.likes-count')) {
    
  }
  if (evt.target.closest('.comments-count')) {
    
  }
  if (evt.target.closest('.social__caption')) {
    
  }
}

