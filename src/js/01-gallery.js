import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEL = document.querySelector(".gallery");

const createItem = galleryItems.map(({preview, original, description}) => {
    const galleryList = `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`;
    return galleryList;
})

galleryEL.insertAdjacentHTML('beforeend', createItem.join(''))


galleryEL.addEventListener("click", handleImgClick);

function handleImgClick(evt) {
     evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    
      }

const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);
instance.show();

galleryEL.addEventListener('keydown', (evt) => {
    if (evt.code === "Escape") {
        instance.close();
    }
});
}

