import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEL = document.querySelector(".gallery");

const createItem = galleryItems.map(({preview, original, description}) => {
    const galleryList = `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
    return galleryList;
})

galleryEL.insertAdjacentHTML('beforeend', createItem.join(''))


const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionsDelay: 250,
    disableScroll: false,
});

    