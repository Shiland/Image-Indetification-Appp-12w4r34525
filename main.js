function preload(){
   img = loadImage('dog_cat.jpg')
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw() {
    Image(img, 0, 0, 640, 420);
    fill("#004e91")
    Text("Dog", 45, 75);
    noFill();
    stroke("#004e91")
    rect(30, 60, 450, 350 );
}