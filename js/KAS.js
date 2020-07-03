'use strict';

menu();

function menu(){
    let menu = document.querySelector('.menu'),
        open = document.querySelector('.open-menu'),
        ul = menu.querySelector('ul');

    open.onclick = function(){
        ul.style.display = (getComputedStyle(ul).display === 'none') ? 'block' : 'none';
    }
    window.onresize = function(){
        ul.style.display = '';
    }
}