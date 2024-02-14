function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="list-item">
          <a class="list-link" href="${largeImageURL}"
            ><img class="list-img" src="${webformatURL}" alt="${tags}"
          /></a>
          <div class="list-conteiner">
            <div class="list-wrappar">
              <b class="list-pretext">Likes</b>
              <p class="list-text">${likes}</p>
            </div>
            <div class="list-wrappar">
              <b class="list-pretext">Views</b>
              <p class="list-text">${views}</p>
            </div>
            <div class="list-wrappar">
              <b class="list-pretext"> Comments</b>
              <p class="list-text">${comments}</p>
            </div>
            <div class="list-wrappar">
              <b class="list-pretext"> Downloads</b>
              <p class="list-text">${downloads}</p>
            </div>
          </div>
        </li>`;
      }
    )
    .join('');
}

export { createMarkup };
