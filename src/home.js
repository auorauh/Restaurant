export const home = () => {
const main = document.querySelector('#content');
while (main.firstChild) {
    main.removeChild(main.firstChild);
}
const title = document.querySelector('h1');    
title.innerText = 'Fries - R - Us';
main.classList.add('main');
const banner = document.createElement('div');
banner.classList.add('banner');
const tag = document.createElement('h2');
tag.innerText = "Taste the french rainbow!";
banner.appendChild(tag);
main.appendChild(banner);
}