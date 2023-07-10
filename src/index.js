import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import API from './js/newsApi';

// !!!!!!Для класу!!!!!!
import NewsApi from './js/newsApi';
import LoadMoreBtn from './js/components/loadMoreBtn';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const form = document.getElementById('search-form');
// const loadMoreBtn = document.querySelector('.load-more');
// // let gallery = '.gallery a'.simpleLightbox();
// form.addEventListener('submit', onSubmit);
// loadMoreBtn.addEventListener('click', onLoadMore);

// function onSubmit(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   API.inputValue = form.elements.searchQuery.value.trim();
//   clearNewsList();

//   API.resetPage();

//   API.getNews(API.inputValue)
//     .then(({ hits, totalHits }) => {
//       if (hits.length === 0 || API.inputValue === '')
//         throw new Error('No data');
//       Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);

//       removeClassLoadMore();

//       return hits.reduce((markup, hit) => createMarkup(hit) + markup, '');
//     })
//     .then(updateNewList)
//     .catch(onError)
//     .finally(() => form.reset());
// }

// function createMarkup({
//   webformatURL,
//   largeImageURL,
//   tags,
//   likes,
//   views,
//   comments,
//   downloads,
// }) {
//   return `<div class="photo-card">
//   <a class="gallery__link" href="${largeImageURL}">
//   <img src=${webformatURL} alt=${tags} loading="lazy" />
//   </a>
//   <div class="info">
//     <p class="info-item">Likes:
//       <b>${likes}</b>
//     </p>
//     <p class="info-item">Views:
//       <b>${views}</b>
//     </p>
//     <p class="info-item">Comments:
//       <b>${comments}</b>
//     </p>
//     <p class="info-item">Downloads:
//       <b>${downloads}</b>
//     </p>
//   </div>
// </div>
// `;
// }

// function updateNewList(markup) {
//   document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
// }

// function onError(err) {
//   console.error(err);
//   Notiflix.Notify.failure(
//     'Sorry, there are no images matching your search query. Please try again.'
//   );
// }

// function onLoadMore() {
//   newsApi
//     .getNews(newsApi.inputValue)
//     .then(({ hits, totalHits }) => {
//       if (hits.length === 0) {
//         addClassLoadMore();
//         throw new Error('Data end!');
//       } else {
//         Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);

//         return hits.reduce((markup, hit) => createMarkup(hit) + markup, '');
//       }
//     })
//     .then(updateNewList)
//     .catch(onErrorLoadBtn);
// }

// function clearNewsList() {
//   document.querySelector('.gallery').innerHTML = '';
// }

// function onErrorLoadBtn(err) {
//   console.error(err);
//   Notiflix.Notify.warning(
//     "We're sorry, but you've reached the end of search results."
//   );
// }

// function removeClassLoadMore() {
//   setTimeout(() => {
//     loadMoreBtn.classList.remove('is-hidden');
//   }, 1000);
// }

// function addClassLoadMore() {
//     loadMoreBtn.classList.add('is-hidden');
// }

// !!!!!!!!!!!!!!!!!!Робімо через клас!!!!!!

const form = document.getElementById('search-form');
const loadMoreBtn = new LoadMoreBtn('.load-more');

const newsApi = new NewsApi();
// let gallery = '.gallery a'.simpleLightbox();
form.addEventListener('submit', onSubmit);
loadMoreBtn.button.addEventListener('click', onLoadMore);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  newsApi.inputValue = form.elements.searchQuery.value.trim();

  clearNewsList();
  newsApi.resetPage();
  loadMoreBtn.show();
  loadMoreBtn.disable();

  newsApi
    .getNews(newsApi.inputValue)
    .then(({ hits, totalHits }) => {
      if (hits.length === 0 || newsApi.inputValue === '')
        throw new Error('No data');
      Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);

      return hits.reduce((markup, hit) => createMarkup(hit) + markup, '');
    })
    .then(markup => {
      updateNewList(markup);
      loadMoreBtn.enable();
    })
    .catch(onError)
    .finally(() => form.reset());
}

function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<div class="photo-card">
  <a class="gallery__link" href="${largeImageURL}">
  <img src=${webformatURL} alt=${tags} loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item">Likes:
      <b>${likes}</b>
    </p>
    <p class="info-item">Views:
      <b>${views}</b>
    </p>
    <p class="info-item">Comments:
      <b>${comments}</b>
    </p>
    <p class="info-item">Downloads:
      <b>${downloads}</b>
    </p>
  </div>
</div>
`;
}

function updateNewList(markup) {
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
}

function onError(err) {
  console.error(err);
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function onLoadMore() {
  loadMoreBtn.disable();
  newsApi
    .getNews(newsApi.inputValue)
    .then(({ hits, totalHits }) => {
      if (hits.length === 0) {
        loadMoreBtn.hide();
        throw new Error('Data end!');
      } else {
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);

        return hits.reduce((markup, hit) => createMarkup(hit) + markup, '');
      }
    })
    .then(markup => {
      updateNewList(markup);
      loadMoreBtn.enable();
    })
    .catch(onErrorLoadBtn);
}

function clearNewsList() {
  document.querySelector('.gallery').innerHTML = '';
}

function onErrorLoadBtn(err) {
  console.error(err);
  Notiflix.Notify.warning(
    "We're sorry, but you've reached the end of search results."
  );
}
