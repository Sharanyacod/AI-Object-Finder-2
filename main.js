status="";
function preload(){
    
}
function setup(){
  canvas=createCanvas(520,520);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
   image(video,0,0,520,520) 
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting Object";
}
function modelLoaded(){
    console.log("modelLoaded");
}