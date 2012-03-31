/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */
var linha = require('drawlines');
var Ax = 0;
var Ay = 0;

var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff',
}),
mask = Ti.UI.createView({
    height:'100%',
    backgroundColor:'#ccc',
    ID:'mask',
    opacity:1
});

mask.addEventListener('touchstart', function(e) {
    Ax = e.x;
    Ay = e.y;
});
mask.addEventListener('touchend', function(e) {
    linha.drawline(Ax,Ay,e.x,e.y,win,'blue');
});

win.add(mask);
win.open();
