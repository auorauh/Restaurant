export const about = () => {
    const main = document.querySelector('#content');
while (main.firstChild) {
    main.removeChild(main.firstChild);
}
const title = document.querySelector('h1');
title.innerText = 'About';
const aboutSec = document.createElement('p');
aboutSec.innerText = 'Fries are the life blood of all other resturants. It will be something you will get everytime but no one has ever focused soley on the fry. Thank god that we came together with the best taters of life. Fries - R - Us are the best fries you will ever have.'
main.appendChild(aboutSec);
}