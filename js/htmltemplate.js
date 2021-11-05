'use strict';

// with this class you can create a basic HTML template for JS file
// might add stuff later but works fine currently

export default class Htmltemplate { 
    constructor(title, scriptpath) {
        this.title = title;
        this.scriptpath = scriptpath;
        this.create()
    }

    // creating html
    create = () => {

    const w = window.open("")
    w.document.writeln
    (`
    <html lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <title>${this.title}</title>
    <link rel='stylesheet' type='text/css' href="/style/style.css">
    <link rel="stylesheet preload" href="/style/wide.css" as="style" media="(min-width: 1000px)">
    <link rel="stylesheet preload" href="/style/mid.css" as="style" media="(max-width: 1000px)">
    <link rel="stylesheet preload" href="/style/small.css" as="style" media="(max-width: 550px)">
    </head>
    <body>
    <main id='main'>
    </main>
    <script src=${this.scriptpath}></script>
    </body>
    </html>
    `)
    
    }
}