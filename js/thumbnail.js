/*import { showBigPicture } from './big-picture.js';

const createThumbnailElement = (photoData) => {
  const template = document.querySelector('#picture');
  const thumbnail = template.content.querySelector('.picture').cloneNode(true);
  const imgElement = thumbnail.querySelector('.picture__img');
  imgElement.src = photoData.url;
  imgElement.alt = photoData.description;
  thumbnail.querySelector('.picture__likes').textContent = photoData.likes;
  thumbnail.querySelector('.picture__comments').textContent = photoData.comments.length;
  thumbnail.dataset.thumbnailId = photoData.id;

  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPicture(photoData);
  });

  return thumbnail;
};
const picturesContainer = document.querySelector('.pictures');
const renderThumbnails = (photos) => {

  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    fragment.appendChild(createThumbnailElement(photo));
  });
  picturesContainer.appendChild(fragment);
};

const clearPhotos = () => {
  picturesContainer.innerHTML = '';
};

const potos = picturesContainer.getElementsByClassName('picture');

const removePictures = () => {
  if (potos) {
    [...potos].forEach((photo) => photo.remove());
  }
};

export {renderThumbnails, clearPhotos, removePictures};
*/
import { showBigPicture } from './big-picture.js';

const createThumbnailElement = (photoData) => {
  const template = document.querySelector('#picture');
  const thumbnail = template.content.querySelector('.picture').cloneNode(true);
  const imgElement = thumbnail.querySelector('.picture__img');
  imgElement.src = photoData.url;
  imgElement.alt = photoData.description;
  thumbnail.querySelector('.picture__likes').textContent = photoData.likes;
  thumbnail.querySelector('.picture__comments').textContent = photoData.comments.length;
  thumbnail.dataset.thumbnailId = photoData.id;

  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPicture(photoData);
  });

  return thumbnail;
};

const picturesContainer = document.querySelector('.pictures');

const renderThumbnails = (photos) => {

  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    fragment.appendChild(createThumbnailElement(photo));
  });
  picturesContainer.appendChild(fragment);
};

const clearPhotos = () => {
  picturesContainer.innerHTML = '';
};

const removePictures = () => {
  const pictures = picturesContainer.querySelectorAll('.picture');
  pictures.forEach((photo) => photo.remove());
};


export {renderThumbnails, clearPhotos, removePictures};
