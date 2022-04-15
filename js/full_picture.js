import {isEscapeKey} from './util.js';
import {generateObjects} from './data.js';

const userDialog=document.querySelector('.big-picture');
const closeBigPicture=document.querySelector('.big-picture__cancel');
const socialCommentCount=document.querySelector('.social__comment-count');
const commentsLoader=document.querySelector('.comments-loader');
const body=document.querySelector('body');

const onBigPictureEscKeydown = (evt)=>{
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPicture();
  }
};
function openFullPicture(){
  userDialog.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onBigPictureEscKeydown);
}

function closeFullPicture(){
  userDialog.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

/*pictureList.addEventListener('click', () => {
  openFullPicture();

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      openFullPicture();
    }
  });
});*/

closeBigPicture.addEventListener('click', () => {
  closeFullPicture();
});

/*const fragment=document.createDocumentFragment();

const pictureList=userDialog.querySelector('.big-picture__preview');
pictureList.innerHTML = '';

generateObjects.forEach(({url})=>{
  const pictureElement= document.createElement('div');
  pictureElement.classList.add('big-picture__img');
  pictureElement.src=url;
  fragment.appendChild(pictureElement);
});

generateObjects.forEach(({likes})=>{
  const pictureElement= document.createElement('span');
  pictureElement.classList.add('likes-count');
  pictureElement.textContent=likes;
  fragment.appendChild(pictureElement);
});

generateObjects.forEach(({comments})=>{
  const pictureElement= document.createElement('span');
  pictureElement.classList.add('comments-count');
  pictureElement.textContent=comments.length;
  fragment.appendChild(pictureElement);
});

generateObjects.forEach(({})=>{
  const pictureElement= document.createElement('li');
  pictureElement.classList.add('social__comment');
  fragment.appendChild(pictureElement);
  });

generateObjects.forEach(({avatar,name})=>{
  const pictureElement= document.createElement('img');
  pictureElement.classList.add('social__picture');
  pictureElement.src=avatar;
  pictureElement.alt=name;
  fragment.appendChild(pictureElement);
  });

generateObjects.forEach(({message})=>{
  const pictureElement= document.createElement('p');
  pictureElement.classList.add('social__text');
  pictureElement.textContent=message;
  fragment.appendChild(pictureElement);
});

generateObjects.forEach(({description})=>{
  const pictureElement= document.createElement('p');
  pictureElement.classList.add('social__caption');
  pictureElement.textContent=description;
  fragment.appendChild(pictureElement);
});

pictureList.appendChild(fragment);*/
