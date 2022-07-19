


import { galleryItems } from './gallery-items.js';
// Change code below this line
 
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryContainer(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener("click", onContainerGalleryClick);


function createGalleryContainer(item) {
    return galleryItems
    .map(({preview, description, original }) => {
        return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>`;
    })
    .join('');
}

function onContainerGalleryClick(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery')) {
    return;
  }

  const source = event.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`);

  instance.show();
};



