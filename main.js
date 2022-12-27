const canvas=document.getElementById("myCanvas");
canvas.height = window.innerHeight; 
canvas.width = 200;

const context = canvas.getContext("2d");     // get 2D context of the canvas
const road = new Road(canvas.width/2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

animate();

function animate() {
    car.update();
    
    canvas.height = window.innerHeight;
    context.save();
    context.translate(0, -car.y + canvas.height * 0.7);

    road.draw(context);
    car.draw(context);
    
    context.restore();
    requestAnimationFrame(animate);
}