'use strict';

import './styles/main.scss';

const dateContainer = document.querySelector('#year');
const allImages = document.querySelectorAll('img');

allImages.forEach(function(image) {
  image.setAttribute('draggable', 'false');
});

const currentYear = new Date().getFullYear();

dateContainer.textContent = currentYear.toString();