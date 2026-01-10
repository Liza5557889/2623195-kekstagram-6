import { debounce, shuffleArray } from './util.js';
import { renderThumbnails, removePictures } from './thumbnail.js';

const COUNT_OF_FILTER = 10;
const ACTIVE_CLASS = 'img-filters__button--active';

let currentPhotos = [];

const imgFilters = document.querySelector('.img-filters');
const imgFiltersForm = imgFilters.querySelector('.img-filters__form');

const availableFilters = {
  'filter-default': (photos) => photos.slice(),
  'filter-random': (photos) => shuffleArray(photos.slice()).slice(0, COUNT_OF_FILTER),
  'filter-discussed': (photos) => photos.slice().sort((firstElement, secondElement) =>
    secondElement.comments.length - firstElement.comments.length),
};

const isButton = (evt) => evt.target.tagName === 'BUTTON';

const onImgFiltersFormClick = debounce((evt) => {
  if (isButton(evt)) {
    const filterId = evt.target.id;
    const filterFunction = availableFilters[filterId];

    if (filterFunction) {
      const filteredPhotos = filterFunction(currentPhotos);
      removePictures();
      renderThumbnails(filteredPhotos);
    }
  }
});

const onButtonClick = (evt) => {
  if (isButton(evt)) {
    const selectedButton = imgFiltersForm.querySelector(`.${ACTIVE_CLASS}`);

    if (selectedButton) {
      selectedButton.classList.remove(ACTIVE_CLASS);
    }

    evt.target.classList.add(ACTIVE_CLASS);
  }
};

const initFilters = (photos) => {
  currentPhotos = photos.slice();

  imgFiltersForm.addEventListener('click', onImgFiltersFormClick);
  imgFiltersForm.addEventListener('click', onButtonClick);
};
export { initFilters };
