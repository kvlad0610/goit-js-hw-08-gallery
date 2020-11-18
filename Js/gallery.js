import galleryItems from './gallery-items.js';
console.log(galleryItems);

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

  linkRef.href = element.original;
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