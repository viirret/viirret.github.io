'use strict'

import { $, make } from './dom.js';

//
//          functions used in other scripts
//


// press button for click function
export const listen = (id, func) => {
    $({id: id}).addEventListener('click', func)   
}

export const createArticle = () => {
    const main = $({id: 'main'});
    main.innerHTML = null;
    const article = make('article')
    main.appendChild(article);
    
    return article
    
}

// log shortcut
export const log = msg => console.log(msg);

// check if accessed from mobile device
export const mobileCheck = () => {
    let mobile = false;
    if ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) )
        mobile = true;
        
    if (mobile)
        $({c: 'mobile-only'}).classList.remove('hidden');
    

    return mobile
}

// darkmode
export const darkmode = () => {
    $({id: 'main'}).classList.toggle('black');
    $({id: 'container'}).classList.toggle('red');
    checkall()
}


// these two functions handle the changing colors in the text of the darkmode
// kinda bad code but it works
export const checkall = () => {
    const front = document.querySelector('#maintext')
    const one = document.querySelector('#info1')
    const two = document.querySelector('#info2')
    const three = document.querySelector('#info3')
    const four = document.querySelector('#info4')

    let arr = [front, one, two, three, four]
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] != null)
        {
            if(document.getElementById('nightswitch').checked)
            {
                if(arr[i].classList.contains('mytextN'))
                    arr[i].classList.remove('mytextN')
                arr[i].classList.add('mytextY')
            }
            else
            {
                if(arr[i].classList.contains('mytextY'))        
                    arr[i].classList.remove('mytextY')        
                arr[i].classList.add('mytextN')
            }
        }
    }
}

export const textmodecheck = (text) => {

    if(document.getElementById('nightswitch').checked)
    {
        if(text.classList.contains('mytextN'))
            text.classList.remove('mytextN')
        text.classList.add('mytextY')
    }
    else
    {
        if(text.classList.contains('mytextY'))        
            text.classList.remove('mytextY')        
        text.classList.add('mytextN')
    }
}

