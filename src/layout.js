import Icon from './icon.png';

export const layout = () => {
    //start nav
    const nav = document.createElement('nav');
    const logo = document.createElement('div');
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('logo');
    logo.appendChild(myIcon);
    const title = document.createElement('h1');
    title.innerText = 'Fries - R - Us';
    logo.classList.add('links');
    logo.appendChild(title);
    nav.appendChild(logo);
    const home = document.createElement('button');
    home.id = 'home';
    home.innerText = 'Home';
    nav.appendChild(home);
    const menu = document.createElement('button');
    menu.id = 'menu';
    menu.innerText = 'Menu';
    nav.appendChild(menu);
    const about = document.createElement('button');
    about.id = 'about';
    about.innerText = 'About';
    nav.appendChild(about);
    document.body.prepend(nav);
    //end nav
};