import galleryItems from './gallery-items.js';
console.log(galleryItems);


// ГАЛЕРЕЯ

// перебор галереи

galleryItems.forEach(element => {


  // создаю элементы

  const itemRef = document.createElement('li');
  const linkRef = document.createElement('a');
  const imgRef = document.createElement('img');

  // получаю сылки

  const listRef = document.querySelector('.js-gallery');
  
  

  // console.log

  console.log(imgRef);
  console.log(itemRef);
  console.log(linkRef);
  console.log(listRef);
  console.log(element);

  // Записываю значения

  // linkRef.href = element.original;
  imgRef.src = element.preview;
  imgRef.setAttribute('data-source', element.original);
  imgRef.alt = element.description;

  // Записываю классы

  itemRef.classList.add("gallery__item");
  linkRef.classList.add("gallery__link");
  imgRef.classList.add("gallery__image");

  // влаживаю элементы

  linkRef.appendChild(imgRef);
  itemRef.appendChild(linkRef);
  listRef.append(itemRef);
  
});

// МОДАЛЬНОЕ ОКНО

// получаю сылки

const lightboxRef = document.querySelector('.js-lightbox');
  const lightboxImageRef = document.querySelector('.lightbox__image');
  const lightboxButtonRef = document.querySelector('button[data-action="close-lightbox"]');

// открытие модального окна

const refs = {
    gallery: document.querySelector('.js-gallery'),
  };
  
  refs.gallery.addEventListener('click', onGalleryClick);

  function onGalleryClick(event) {
    console.dir(event.target);
    lightboxRef.classList.add('is-open')
    lightboxImageRef.src = event.target.dataset.source;
  };
  
  // закрытие модального окна

  lightboxButtonRef.addEventListener('click',onGalleryClose);
  function onGalleryClose() {
    lightboxRef.classList.remove('is-open');
    lightboxImageRef.src = '';
  };