import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }, index) =>
      `<li class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             data-index="${index}"
             alt="${description}"
           />
         </a>
       </li>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", handleGalleryItemClick);

function handleGalleryItemClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains("gallery__image")) {
    const source = target.dataset.source;
    const index = Number(target.dataset.index);
    openModal(source, index);
  }
}

function openModal(source, index) {
  const instance = basicLightbox.create(
    `
    <img src="${source}" width="800" height="600">
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", handleKeyPress);
      },
      onClose: () => {
        document.removeEventListener("keydown", handleKeyPress);
      },
    }
  );

  instance.show();

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      instance.close();
    } else {
      const currentImageIndex = instance
        .element()
        .querySelector("img")
        .getAttribute("data-index");
      const lastIndex = galleryItems.length - 1;
    }
  }
}
