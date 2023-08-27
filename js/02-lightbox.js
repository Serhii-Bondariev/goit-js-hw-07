import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
function murkup (gallery) {
return gallery.map(item => {
    console.log(item);
    return`<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`
 
})
.join('');
}

gallery.insertAdjacentHTML('beforeend', murkup(galleryItems));
console.log(murkup(galleryItems));
 const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

