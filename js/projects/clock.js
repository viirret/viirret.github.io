'use strict';

// maybe make dom later
const createHtml = () => {
    const main = document.getElementById('main')
    main.innerHTML = null;
    const article = document.createElement('article')
    article.id = 'clockarticle'
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Kello voi olla mitä vaan, mutta se ON!'
    const div = document.createElement('div')
    div.id = 'clock'
    const img = document.createElement('img')
    img.src = '/images/niilo22-kello.muokattu.jpg'
    img.alt = 'Niilo22'
    article.appendChild(h1)
    article.appendChild(div)
    article.appendChild(img)
    main.appendChild(article);
}

createHtml()


const updateClock = () => {
    // creating date
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // adding 0 if it's 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // making it string
    let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + "";

    // displaying time as html
    document.getElementById('clock').innerHTML= currentTimeString;
}

// function for updating the clock
const showclock = () => {
    setInterval(updateClock, 1000);
}

showclock();



