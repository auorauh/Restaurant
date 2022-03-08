import {layout} from "./layout";
import {menu} from './menu';
import {home} from './home';
import {about} from './about';
import './style.css';
layout();
home();
document.querySelector('#menu').addEventListener('click', function() {
    menu();
});
document.querySelector('#home').addEventListener('click', function() {
    home();
});
document.querySelector('#about').addEventListener('click', function() {
    about();
});