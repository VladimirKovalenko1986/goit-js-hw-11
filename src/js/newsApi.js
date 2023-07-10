const axios = require('axios');
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const ENDPOINT = 'https://pixabay.com/api/';
// const API_KEY = '36399234-af15385039238a4844768ffbd';
// let queryPage = 1;
// let inputValue = '';

// function getNews(query) {
//   return fetch(
//     `${ENDPOINT}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${queryPage}`
//   )
//     .then(respons => respons.json())
//     .then(date => {
//       queryPage += 1;
//       return date;
//     });
// }

// function resetPage() {
//   queryPage = 1;
// }
// export default { getNews, inputValue, resetPage };

// !!!!!!!!!!!Робимо через клас!!!!!!!!

const ENDPOINT = 'https://pixabay.com/api/';
const API_KEY = '36399234-af15385039238a4844768ffbd';

export default class NewsApi {
  constructor() {
    this.queryPage = 1;
    this.inputValue = '';
  }
  getNews(query) {
    return fetch(
      `${ENDPOINT}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.queryPage}`
    )
      .then(respons => {
        if (!respons.ok) {
          throw new Error(respons.status);
        }
        return respons.json();
      })
      .then(date => {
        this.incrementPage();
        return date;
      });
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }
}
