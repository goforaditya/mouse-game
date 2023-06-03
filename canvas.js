var canvas = document.querySelector('canvas')
console.log(canvas)

var trim = 6
canvas.width = window.innerWidth - trim
canvas.height = window.innerHeight - trim

var c = canvas.getContext('2d')

var mouse = {
    x: undefined,
    y: undefined
}

var colorArray = ["#f49a00",
"#e49eff",
"#01c67b",
"#e95d27",
"#ba749c"]

window.addEventListener('mousemove', 
    function(event) {
        // console.log(event)
        mouse.x = event.x
        mouse.y = event.y
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth - trim
    canvas.height = window.innerHeight - trim
    init()
})

const RANGE = 50
const maxRadius = 40
const minRadius = 2

function Circle(x,y,dx,dy,r,clr) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.r = r
    this.minRadius = r
    this.maxRadius = r + 40
    this.clr = colorArray[Math.floor(Math.random() * colorArray.length)]
    this.circ = Math.PI * 2
    
    this.draw = function() {
        c.beginPath()
        c.arc(this.x,this.y,this.r,0,this.circ,false)
        c.fillStyle = this.clr
        c.fill()
        c.strokeStyle = this.clr
        c.stroke()
    }

    this.update = function() {

        if (this.x + this.r > innerWidth  || 
            this.x - this.r < 0){
            this.dx= -this.dx
        }
        if (this.y + this.r > innerHeight  || 
            this.y - this.r < 0){
            this. dy= -this.dy
        }
    
        this.x+=this.dx
        this.y+=this.dy

        // interactivity
        if ((mouse.x - this.x < RANGE && mouse.x - this.x > -RANGE) && 
        (mouse.y - this.y < RANGE && mouse.y - this.y > -RANGE)) {
            if (this.r < this.maxRadius) {
                this.r += 1
            }
            
        } else if (this.r > this.minRadius){
            this.r -= 1
        }

        this.draw()
    }
}


const NUM_CIRCLES = 600
var circleArray = []


function init() {
    circleArray = []
    for (var i=0;i<NUM_CIRCLES;i++) {
        var r = Math.random() * 3 +1
        var x =  Math.random() * (innerWidth - r * 2) + r
        // 0.5*(100-20) + 10
        var y =  Math.random() * (innerHeight - r * 2) + r
        var dx = (Math.random() - 0.5) * 2
        var dy = (Math.random() - 0.5) * 2
        var clr = "rgba("+(Math.random() * 255)+","+(Math.random() * 255)+","+(Math.random() * 255)+")"
        circleArray.push(new Circle(x,y,dx,dy,r,clr))
    }
    
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    
    for (var i=0;i<circleArray.length;i++){
        circleArray[i].update()
    }
}

init()
animate()