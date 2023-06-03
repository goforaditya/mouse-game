var canvas = document.querySelector('canvas')
console.log(canvas)

var trim = 6
canvas.width = window.innerWidth - trim
canvas.height = window.innerHeight - trim

var c = canvas.getContext('2d')

function Circle(x,y,dx,dy,r,clr) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.r = r
    this.clr = clr
    
    this.draw = function() {
        c.beginPath()
        c.arc(this.x,this.y,this.r,0,Math.PI * 2,false)
        c.lineWidth = 3
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
    
        this.x+=this.dx
    
        if (this.y + this.r > innerHeight  || 
            this.y - this.r < 0){
            this. dy= -this.dy
        }
    
        this.y+=this.dy
        this.draw()
    }
}


const NUM_CIRCLES = 100
var circleArray = []


for (var i=0;i<NUM_CIRCLES;i++) {
    var r = Math.random()*30
    var x =  Math.random() * (innerWidth - r * 2) + r
    // 0.5*(100-20) + 10
    var y =  Math.random() * (innerHeight - r * 2) + r
    var dx = (Math.random() - 0.5) * 2
    var dy = (Math.random() - 0.5) * 2
    var clr = "rgba("+(Math.random() * 255)+","+(Math.random() * 255)+","+(Math.random() * 255)+")"
    circleArray.push(new Circle(x,y,dx,dy,r,clr))
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    
    for (var i=0;i<circleArray.length;i++){
        circleArray[i].update()
    }
}

animate()