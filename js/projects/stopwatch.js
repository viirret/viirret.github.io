'use strict'

const main = document.getElementById('main')
const article = document.createElement('article')
const h1 = document.createElement('h1')
h1.innerHTML = 'Stopwatch'
h1.style.textAlign = 'center'
const time = document.createElement('div')
time.id = 'time'
time.innerHTML = '00:00:00'
time.style.textAlign = 'center'
const btns = document.createElement('div')
btns.id = 'stopwatchbuttons'
btns.style.position = 'relative'
btns.style.left = '46.5%'
btns.style.right = '50%'
const start = document.createElement('button')
start.innerHTML = 'Start'
const stop = document.createElement('button')
stop.innerHTML = 'Stop'
const reset = document.createElement('button')
reset.innerHTML = 'Reset'
btns.appendChild(start)
btns.appendChild(stop)
btns.appendChild(reset)
article.appendChild(h1)
article.appendChild(time)
article.appendChild(btns)
main.appendChild(article)

var hour = 0
var min = 0
var sec = 0
var stoptime = true

const startCount = () => {
    if (stoptime) {
        stoptime = false
        Count()
    }
}
start.addEventListener('click', startCount)

const stopCount = () => {
    if (!stoptime)
        stoptime = true
}
stop.addEventListener('click', stopCount)

const resetCount = () => {
    time.innerHTML = '00:00:00'
    hour = 0
    min = 0
    sec = 0
    stoptime = true
}
reset.addEventListener('click', resetCount)

const Count = () => {
    if (!stoptime) {
        sec = parseInt(sec)
        min = parseInt(min)
        hour = parseInt(hour)

        sec++

        if (sec == 60) {
            min++
            sec = 0
        }
        
        if (min == 60) {
            hour++
            min = 0
            sec = 0
        }

        if (sec < 10 || sec == 0)
            sec = '0' + sec
        
        if (min < 10 || min == 0)
            min = '0' + min
        
        if (hour < 10 || hour == 0)
            hour = '0' + hour
        
        time.innerHTML = hour + ':' + min + ':' + sec

        setTimeout("Count()", 1000)
    }
}
