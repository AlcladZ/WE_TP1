document.addEventListener("DOMContentLoaded", (event) =>{
    var spinner = document.getElementById('spinnerWidth');
    spinner.value = 5;

    var colour = document.getElementById('colour');
    colour.value = '#000000';

})

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = 800
canvas.height = 600

// Code temporaire pour tester le DnD
//new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////


// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);