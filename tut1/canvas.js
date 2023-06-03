var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d') // this is the context
// within 'c' there are a lot of funtioncs to draw content
c.fillStyle = "rgba(255,0,0,0.5)"
c.fillRect(100,100,100,100)
c.fillStyle = "rgba(0,0,255,0.5)"
c.fillRect(400,100,100,100)
c.fillStyle = "rgba(0,255,0,0.7)"
c.fillRect(300,300,100,100)
console.log(canvas)

// Line
c.beginPath();
c.moveTo(50,300)
c.lineTo(300,100)
c.lineTo(400,300)
c.strokeStyle = "#fa34a3"
c.stroke()

// Arc / Circle
// c.beginPath() // otherwise it will connect with the line
// c.arc(300, 300, 30, 0, Math.PI*2, false)
// c.strokeStyle = "cyan"
// c.stroke()

// For loops
for(var i=0;i<400;i++) {
    var x = Math.random() * window.innerWidth
    var y = Math.random() * window.innerHeight
    c.beginPath()
    c.arc(x, y, 30, 0, Math.PI*2, false)
    c.strokeStyle = "rgba("+ Math.random() * 255+","+ Math.random() * 255+","+ Math.random() * 255+",0.6)"
    // c.strokeStyle = "rgba(0,255,0,0."+(9-(i*2))+")"
    c.stroke()
}