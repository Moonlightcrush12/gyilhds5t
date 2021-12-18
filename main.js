var mouseEvent="empty"
var x,y;

canvas= document.getElementById("myCanvas")
ctx=  canvas.getContext('2d')
color="black";
width="1";

canvas.addEventListener("mousedown", my_mousedown )

function my_mousedown(e){
    
    color = document.getElementById("Hello1").value
    width = document.getElementById("width").value
    mouseEvent="mouseDown"
}
canvas.addEventListener("mousemove", my_mousemove )

function my_mousemove(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    
if (mouseEvent== "mouseDown"){
    console.log("tejal")
ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=width
ctx.arc=(mouse_x,mouse_y,30,0,2*Math.PI)
ctx.stroke();
}
x=mouse_x
y=mouse_y
}