import './vendor/swiper-main.js';
import {initVideo} from './video-play.js';
import './tabs.js';


const body = document.querySelector('.page__body');

body.classList.remove('page__body--nojs');

initVideo();
