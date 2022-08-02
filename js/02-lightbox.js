import { galleryItems } from './gallery-items.js';
// Change code below this line

const myGallery = document.querySelector('.gallery')
const galleryMarkup = createContainer(galleryItems)
myGallery.insertAdjacentHTML('beforeend', galleryMarkup)



function createContainer() {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
    }).join('')
}


  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
  });
