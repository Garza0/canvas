var canvas = document.getElementsByTagName('canvas')[0]

onload = onresize = function (){
    canvas.height = innerHeight - 4
    canvas.width = innerWidth
}

var ctx = canvas.getContext('2d')


var drawing = false

canvas.onmousedown = function (event){
    drawing = true
    ctx.beginPath()
    ctx.moveTo(event.x, event.y) 
    draw(event)
    ctx.fillRect(event.x, event.y, 2, 2)
    ctx.lineWidth = 5

}



canvas.onmouseup = function (event){
    drawing = false
    ctx.closePath()
}


function draw(event){
   
    ctx.lineTo(event.x, event.y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(event.x, event.y)
}

canvas.onmousemove = function (event){
    ctx.strokeStyle = 'hsl('+ event.timeStamp/30 +' 50% 50%)'
    if (drawing)  draw(event)
}
