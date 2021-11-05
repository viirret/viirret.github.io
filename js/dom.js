'use strict'

import { textmodecheck } from "./fun.js";

// dom here
export const $ = ({id:id, class:c, q:q}) => {
	if(id) return document.getElementById(id)
	else if(c) return document.getElementsByClassName(c);
	else if(q) return document.querySelector(q);
}

export const make = (value) => document.createElement(value)

export const makeIMG = (src, alt, append, myClass) => {
	const img = make('img')
	img.src = src;
	img.alt = alt;
	// makes the image not load with display: none
	img.loading = "lazy"
	if(myClass){
		img.classList.add(myClass)
	}
	append.appendChild(img)
	return img
}

export const makeTEXT = (type, innerHTML, append, id) => {
	const text = make(type);
	text.innerHTML = innerHTML;
	if(id){
		text.id = id;
	}
	textmodecheck(text)
	append.appendChild(text);
	return text;
}


export const LINK = (href, innerHTML, append) => {
    const tag = make('a');
    tag.href = href
    tag.innerHTML = innerHTML
    tag.classList.add('infolink');
    append.appendChild(tag)
}

export const linkIMG = (href, myclass, img, alt, append) => {
    const div = make('div');
    div.classList.add(myclass);
    const a = make('a');
    a.href = href;
    let myimg = makeIMG(img, alt, div);
    
    a.appendChild(myimg)
    div.appendChild(a);
    append.appendChild(div);
}



