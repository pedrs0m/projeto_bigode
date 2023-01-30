noseX=0;
noseY=0;

function preload()
{
    clownNose = loadImage('https://i.postimg.cc/QtSYjWnv/bigode.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(results)
{
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x-23;
      noseY = results[0].pose.nose.y-0;
    }
}

function modelLoaded()
{
    console.log('PoseNet Foi inicializado');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clownNose, noseX, noseY, 45, 45);
  }

  function takeSnapshot()
  {
    save('myFilterImage.png');
  }

