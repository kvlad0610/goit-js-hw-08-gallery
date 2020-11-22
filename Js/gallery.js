import galleryItems from './gallery-items.js';
console.log(galleryItems);


// ГАЛЕРЕЯ

// получаю сылки

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  lightboxButton: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  };

// перебор галереи

galleryItems.forEach((element,index) => {

  // создаю элементы

  const itemRef = document.createElement('li');
  const linkRef = document.createElement('a');
  const imgRef = document.createElement('img');

  // console.log

  console.log(imgRef);
  console.log(itemRef);
  console.log(linkRef);
  console.log(refs.gallery);
  console.log(element);
  console.log(index);

  // Записываю значения

  linkRef.href = element.original;
  imgRef.src = element.preview;
  imgRef.setAttribute('data-source', element.original);
  imgRef.alt = element.description;
  imgRef.setAttribute('data-index', index);
  

  // Записываю классы

  itemRef.classList.add("gallery__item");
  linkRef.classList.add("gallery__link");
  imgRef.classList.add("gallery__image");

  // влаживаю элементы

  linkRef.appendChild(imgRef);
  itemRef.appendChild(linkRef);
  refs.gallery.append(itemRef);
  
});



// МОДАЛЬНОЕ ОКНО
  
//открытие модального окна

refs.gallery.addEventListener('click', onGalleryClick);

// функции

function onGalleryClick(event) {
  event.preventDefault();
  console.dir(event.target);

  // закрытие модального окна

  refs.lightboxButton.addEventListener('click', onGalleryClose);
  refs.lightboxOverlay.addEventListener('click', onGalleryClose);
  window.addEventListener('keydown', onKeyPress);
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  refs.lightbox.classList.add('is-open');
  refs.lightboxImage.src = event.target.dataset.source;
  refs.lightboxImage.setAttribute('data-index',(event.target.dataset.index) );
};
  
function onGalleryClose() {
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImage.src = '';

  refs.lightboxButton.removeEventListener('click', onGalleryClose);
  refs.lightboxOverlay.removeEventListener('click', onGalleryClose);
  window.removeEventListener('keydown', onKeyPress);
};

function onKeyPress(event) {
    
  console.dir(event)
  if (event.code === 'Escape') {
    onGalleryClose()
  };

  let activeIndex = Number(event.target.firstElementChild.dataset.index);
  console.log(activeIndex);
    
  if (event.code === 'ArrowRight') {
    if (activeIndex !== galleryItems.length - 1) {
      activeIndex += 1;
      refs.lightboxImage.src = galleryItems[activeIndex].original;
      console.log(activeIndex);
      console.log(refs.lightboxImage);
      console.log(galleryItems[activeIndex].original);
    };
  };

  if (event.code === 'ArrowLeft') {
    if (activeIndex !== 0) {
      activeIndex -= 1;
      refs.lightboxImage.src = galleryItems[activeIndex].original;
      console.log(activeIndex);
      console.log(refs.lightboxImage);
      console.log(galleryItems[activeIndex].original);
      console.log(galleryItems.index);
    };
  };
}