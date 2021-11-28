Status = "";
 
function preload()
{

}

function setup()
{
    canvas = createCanvas(400,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(400,300);
}

function start_js()
{
    objectdetector = ml5.objectDetector("cocossd",modelLoaded);
    objectdetector.detect(video , gotResults);
    document.getElementById("object").innerHTML = "Status : Detecting objects";
    document.getElementById("input_id").value;
}

function modelLoaded()
{
    console.log("modelLoaded!");
    Status = true;
}

function draw()
{
    image(video , 0, 0, 400 , 300);
}
