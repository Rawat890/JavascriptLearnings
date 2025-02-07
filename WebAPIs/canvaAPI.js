//Canvas Api - provides a mean for drawing the graphics via html and js. It can be used for animations, data visualization, photo manipulation
//focused on 2d graphics 

const canvas = document.getElementById('my-canvas');  // Corrected the ID selection

const canvasContext = canvas.getContext('2d');

//draw rectangle
canvasContext.fillStyle = 'green';
canvasContext.fillRect(10, 10, 150, 100);

//draw circle
canvasContext.fillStyle = 'red';
canvasContext.arc(300, 100, 40, 0, 360, false);
canvasContext.fill()


//draw line
canvasContext.beginPath();
canvasContext.strokeStyle = 'orange';
canvasContext.lineWidth = 5;
canvasContext.moveTo(10, 10);
canvasContext.lineTo(300, 100);
canvasContext.stroke();


//Draw Text 
canvasContext.font = '30px Arial';
canvasContext.lineWidth = 1;
canvasContext.fillStyle = 'blue';
canvasContext.strokeStyle = 'blue';
canvasContext.fillText('Hello', 200, 100, 300);
canvasContext.strokeText('Hello', 200, 300, 300);