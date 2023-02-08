
    let x = 0;
    let y = 0;
    let theta = 0;
    let inc = 0.05;
    let offset = 0; //the amount offset from begining of wave
    let amplitude;
    let frequency;
    let maxAngle;
    
    

    function setup() {
        amplitude = windowHeight/8;
        frequency = windowWidth/8;
        maxAngle = (windowWidth/frequency) * TWO_PI;
        createCanvas(windowWidth, windowHeight);
        noStroke();
        
    }

function draw() {
    background(0);
    while(theta < maxAngle + offset){
        
         //sine wave 3
         x = sin(theta-1) * amplitude + (windowWidth*0.4);
         fill(255, 0, 0);
         ellipse(x + 100, y, 16);

        //cosine wave
        x2 = cos(theta) * amplitude + (windowWidth*0.46); 
        fill(0, 0, 255);
        ellipse(x2, y, 16);


        theta += 0.3;
        y = ((theta - offset ) / maxAngle) * windowWidth;  
    }

    offset += inc;
    theta = offset;
}