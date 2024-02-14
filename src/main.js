import { NewApiSearch } from './js/pixabay-api';

const newApiSearch = new NewApiSearch();

const refs = {
  formSearch: document.querySelector('.form'),
  listForm: document.querySelector('.list-form'),
};

refs.formSearch.addEventListener('submit', onFormSearch);

function onFormSearch(e) {
  e.preventDefault();
  newApiSearch.searchQuery = e.currentTarget.elements.searchQuery.value.trim();

  newApiSearch
    .getNews(newApiSearch.searchQuery)
    .then(({ hits, totalHits }) => {
      console.log(hits);
    })
    .catch(err => console.log(err))
    .finally(clearFormSearch);
}

function clearFormSearch() {
  refs.formSearch.reset();
}
