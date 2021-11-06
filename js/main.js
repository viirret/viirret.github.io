'use strict'

import { mobileCheck, listen, createArticle, darkmode, textmodecheck, checkall  } from './fun.js';
import { $, make, makeIMG, makeTEXT, LINK, linkIMG} from './dom.js';
import Proj from './proj.js';

mobileCheck();


// the very front page you see
const front = () => {
    const article = createArticle()

    // this thing makes the typing effect on front
    // only used here so not an export function like everything else   
    let i = 0;
    let txt = 'Tervetuloa Valtteri Viirteen kotisivuille!';
    let speed = 50;

    const h1 = make('h1')
    h1.id = 'maintext';
    h1.classList.add('switcher')

    const typeWriter = () => {
        if (i < txt.length) {
            if($({id: "maintext"}))
            {
                $({id: "maintext"}).innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
    }

    textmodecheck(h1)
    article.appendChild(h1)

    typeWriter()
    
    // GIF COPIED FROM:
    // https://tenor.com/view/beavis-computer-shitposting-gif-7431307
    makeIMG('/images/coding.gif', 'beavis-computer', article, 'center');

    const row = make('div');
    row.classList.add('row')
    
    linkIMG('https://en.wikipedia.org/wiki/C%2B%2B', 'imagecolumn', '/images/c++.png', 'C++', row)
    linkIMG('https://en.wikipedia.org/wiki/JavaScript', 'imagecolumn', '/images/javascript150.png', 'JavaScript', row)
    linkIMG('https://en.wikipedia.org/wiki/Kotlin_(programming_language)', 'imagecolumn', '/images/kotlin150.png', 'Kotlin', row)
    linkIMG('https://en.wikipedia.org/wiki/C_Sharp_(programming_language)', 'imagecolumn', '/images/csharp.png', 'C#', row)

    
    article.appendChild(row)

}



// my works here
const myworks = () => {
    const ul = document.createElement('ul')
    const article = createArticle()

    new Proj('Osu Niiloon!', 'Osu Niiloon peli, JavaScript/CSS', ul, '/js/projects/whack-a-mole.js')
    new Proj('Kello', 'Niilo22 kertoo kellon', ul, '/js/projects/clock.js')

    //LINK('/EFTDweb/index.html', 'Escape From The Dark, C#, (ryhmätyö)', ul)
    //makeIMG('/images/EFTDgameplay2.png', 'Escape From The Dark -gameplay', ul, 'center');

    article.appendChild(ul)
}

// html for the info page
const info = () => {
    const article = createArticle()
    makeTEXT('h1', 'Hei, nimeni on Valtteri', article, 'switcher');
    makeTEXT('h3', 'Olen tietotekniikan opiskelija Espoosta', article, 'switcher');
    makeTEXT('h3', 'Lempikieliäni ovat C++ ja JavaScript', article, 'switcher');
    makeTEXT('h3', 'Löydät minut allaolevista linkeistä', article, 'switcher');
    
    makeIMG('//users.metropolia.fi/~valttvii/pictures/kuva-valtteri.muokattu.jpg', 'Valtteri', article, 'center');
    LINK('mailto:viirretvaltteri@gmail.com', 'viirretvaltteri@gmail.com', article);
    LINK('https://github.com/valtteriviirret', 'github.com/valtteriviirret', article);
    LINK('https://www.instagram.com/valtteriviirret/', 'instagram.com/valtteriviirret', article);

    remove_hash_from_url()
}

function remove_hash_from_url() {
    var uri = window.location.toString();

    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0,
                        uri.indexOf("#"));

        window.history.replaceState({},
                document.title, clean_uri);
    }
}

listen('nightswitch', darkmode)

listen('frontpage', front)
listen('myworks', myworks)
listen('info', info)


front()

ethereum.autoRefreshOnNetworkChange = false
                
  