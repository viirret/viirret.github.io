'use strict';
//global for timeout
let timeOut = false;

//global for score
let score = 0;


//creating all the HTML elements
const elements = () => {
    const main = document.getElementById('main');
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    h1.id = 'lyoniiloa';
    h1.innerHTML = 'Osu Niiloon!';
    const h3 = document.createElement('h3');
    h3.id = 'score';
    h3.innerHTML = score;
    const button = document.createElement('button');
    button.innerHTML = 'Aloita peli!';
    button.id = 'startbutton';

    const section2 = document.createElement('section');
    const game = document.createElement('div');
    game.classList.add('game');
    
    for (let i = 0; i < 6; i++){
        let hole = document.createElement('div');
        hole.classList.add('hole');
        hole.id = `hole${[i]}`;
        let mole = document.createElement('div');
        mole.classList.add('mole');
        mole.id = `mole${[i]}`;
        hole.appendChild(mole);
        game.appendChild(hole);
    }

    section.appendChild(h1);
    section.appendChild(h3);
    section.appendChild(button);
    section2.appendChild(game);
    main.appendChild(section);
    main.appendChild(section2);
}

elements();

const randomtime = (min, max) =>{
    return Math.random() * (max - min) + min;
}

const getNumber = () => {
    let selectedhole;
    do {
        const myholes = document.getElementsByClassName('hole');
        const idx = Math.floor(Math.random() * myholes.length);
        selectedhole = myholes[idx];
    }
    while(selectedhole === getNumber.last)
    getNumber.last = selectedhole;
    return selectedhole;

}

const peek = () => {
    const time = randomtime(200, 1000)
    const hole = getNumber();
    hole.classList.add('peek');
    setTimeout(() =>{
        hole.classList.remove('peek');
        if(timeOut === false) {
        peek();
        }
    }, time);
}

const startGame = () => {
    score = 0;
    timeOut = false;
    peek();
    setTimeout(() => timeOut = true, 10000)
}

const buttonEvent = () => {
    const button = document.getElementById('startbutton');
    button.addEventListener('click', startGame)
}

buttonEvent();
  
const addingsScore = () => {
    const scoreboard = document.getElementById('score');
    score++;
    scoreboard.innerHTML = score;
}

const molesevent = (e) => {
    console.log('hit');
    if(!e.isTrusted){ //prevents cheating
        return;
        }
        addingsScore();
        const hole = document.querySelectorAll('.hole');
                    for(let i = 0; i < hole.length; i++){
                        hole[i].classList.remove('peek');
                    }  
        }

   const listener = () => {
       const moles = document.querySelectorAll('.mole');
        for(let i = 0; i < moles.length; i++){
            moles[i].addEventListener('click', molesevent);
            }
        }

   listener();

   