import RedFries from './redFries.png';
import orangeFries from './orangeFries.png';
import Fries from './icon.png';
import greenFries from './greenFries.png';
import blueFries from './blueFries.png';
import purpleFries from './purpleFries.png';


export const menu = () => {
    const page = document.querySelector('#content');
    while (page.firstChild) {
        page.removeChild(page.firstChild);
    }

    const title = document.querySelector('h1');
    title.innerText = 'Menu';
    const options = document.createElement('div');
    options.classList.add('options');

    const item1 = document.createElement('div');
    const red = new Image();
    red.src = RedFries;
    item1.classList.add('item');
    const name = document.createElement('h3');
    name.innerText = 'Red Fries';
    item1.appendChild(red);
    item1.appendChild(name);
    options.appendChild(item1);

    const item2 = document.createElement('div');
    const orange = new Image();
    orange.src = orangeFries;
    item2.classList.add('item');
    const name2 = document.createElement('h3');
    name2.innerText = 'Orange Fries';
    item2.appendChild(orange);
    item2.appendChild(name2);
    options.appendChild(item2);

    const item3 = document.createElement('div');
    const yellow = new Image();
    yellow.src = Fries;
    item3.classList.add('item');
    const name3 = document.createElement('h3');
    name3.innerText = 'OG Fries';
    item3.appendChild(yellow);
    item3.appendChild(name3);
    options.appendChild(item3);

    const item4 = document.createElement('div');
    const green = new Image();
    green.src = greenFries;
    item4.classList.add('item');
    const name4 = document.createElement('h3');
    name4.innerText = 'Green Fries';
    item4.appendChild(green);
    item4.appendChild(name4);
    options.appendChild(item4);

    const item5 = document.createElement('div');
    const blue = new Image();
    blue.src = blueFries;
    item5.classList.add('item');
    const name5 = document.createElement('h3');
    name5.innerText = 'Blue Fries';
    item5.appendChild(blue);
    item5.appendChild(name5);
    options.appendChild(item5);

    const item6 = document.createElement('div');
    const purple = new Image();
    purple.src = purpleFries;
    item6.classList.add('item');
    const name6 = document.createElement('h3');
    name6.innerText = 'Purple Fries';
    item6.appendChild(purple);
    item6.appendChild(name6);
    options.appendChild(item6);

    page.appendChild(options);
};