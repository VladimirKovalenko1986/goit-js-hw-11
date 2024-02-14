const ENDPOINT = 'https://pixabay.com/api/';
const API_KEY = '36399234-af15385039238a4844768ffbd';

class NewApiSearch {
  constructor() {
    this.searchQuery = '';
  }
  getNews() {
    return fetch(
      `${ENDPOINT}?key=${API_KEY}&q=${this.searchQuery}&image_type="photo"&orientation="horizontal"&safesearch=true`
    ).then(response => {
      if (!response) {
        throw new Error(
          `HTTP error! Status: ${response.status}, Text: ${response.statusText}`
        );
      }
      return response.json();
    });
  }
}

export { NewApiSearch };
