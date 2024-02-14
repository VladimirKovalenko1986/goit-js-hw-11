import { NewApiSearch } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const newApiSearch = new NewApiSearch();

const refs = {
  formSearch: document.querySelector('.form'),
  listForm: document.querySelector('.list-form'),
  spinner: document.querySelector('.conteiner-loader'),
};

refs.formSearch.addEventListener('submit', onFormSearch);

spinnerHide();

function onFormSearch(e) {
  e.preventDefault();
  newApiSearch.searchQuery = e.currentTarget.elements.searchQuery.value.trim();
  spinnerShow();
  clearNewList();

  newApiSearch
    .getNews(newApiSearch.searchQuery)
    .then(({ hits, totalHits }) => {
      if (!hits.length || !newApiSearch.searchQuery) {
        throw new Error('No data');
      }

      spinnerHide();

      informationTotalPrice(totalHits);

      refs.listForm.innerHTML = createMarkup(hits);

      gallery.refresh();
    })
    .catch(errorSearch)
    .finally(clearFormSearch);
}

function clearFormSearch() {
  refs.formSearch.reset();
}

function errorSearch(err) {
  iziToast.error({
    position: 'topRight',
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
  console.log(
    'Sorry, there are no images matching your search query. Please try again!'
  );

  spinnerHide();
}

function clearNewList() {
  refs.listForm.innerHTML = '';
}

function informationTotalPrice(elements) {
  console.log(`Hooray! We found ${elements} images.`);

  iziToast.success({
    position: 'topRight',
    title: 'OK',
    message: `Hooray! We found ${elements} images.`,
  });
}

// Status spinner

function spinnerHide() {
  refs.spinner.classList.add('hidden');
}

function spinnerShow() {
  refs.spinner.classList.remove('hidden');
}
