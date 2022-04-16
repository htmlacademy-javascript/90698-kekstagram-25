import {isEscapeKey} from './util.js';

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

closeBigPicture.addEventListener('click', () => {
  closeFullPicture();
});

export {openFullPicture};
