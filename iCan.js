var canvas = document.querySelector("canvas");
console.log(canvas);

canvas.width = innerWidth;
canvas.height = innerHeight;

var c = canvas.getContext("2d");


/*
//Rectangle
c.fillStyle = "rgba(0 , 231 , 200 , 0.5)";
c.fillRect(100, 100 , 50 , 50);                  // c.fillRect(x , y , height , width ); 
c.fillStyle = "rgba(234, 213 , 0 , 0.4)";
c.fillRect(200, 300 , 120 , 100);

//line
c.beginPath();                                   // call them again to end path ;
c.moveTo(100 , 400);
c.lineTo( 200 , 600 );
c.lineTo( 250 , 200 );							// connecting path over and over bcz of beginPath();
c.strokeStyle = "rgb(255 , 0 , 0)";
c.stroke();										*/




//arc
// c.beginPath();            //call it again to seprate it from line;

// for(var i = 0; i<100; i++ ){
// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// c.beginPath();
// c.arc(x , y , Math.random() * 50 , 0 , 2 * Math.PI );
// c.strokeStyle = "rgb( Math.random() * 255 , Math.random() * 255 , Math.random() * 255 )";
// c.stroke();
// }


/*
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = (Math.random() * 10);                    //sometime fast sometime slow;
var	dy = (Math.random() * 10);


function animate(){
	requestAnimationFrame(animate);
	
	
	c.clearRect( 0 , 0 , innerWidth , innerHeight );
	c.beginPath();
	c.arc(x , y , Math.random() * 50 , 0 , 2 * Math.PI );
	c.strokeStyle = "black";
	c.stroke();
	
	if(x > innerWidth || x < 0 )
	{
		dx = -dx;
	}		
	x += dx;
	
	if(y > innerHeight || y < 0 )
	{
		dy = -dy;
	}		
	y += dy;	
}
animate(); */

var colorArray = ["#1c6bea","#27e881","#d81331","#ffc700","#8d80c9" ];
function Circle(x , y , dx , dy , radius){ 

this.x = x;
this.y = y;
this.dx = dx;
this.dy = dy;
this.radius = radius * Math.random();
this.color = colorArray[Math.floor(colorArray.length * Math.random())];

this.draw = function(){
	
	c.beginPath();
	c.arc(this.x , this.y , this.radius , 0 , 2 * Math.PI );
	c.strokeStyle = "black";
	c.stroke();
	c.fillStyle = this.color;
	c.fill() ;
}

this.update = function(){
	
	if( this.x > innerWidth || this.x < 0 )
	{
		this.dx = -this.dx;
	}		
	this.x += this.dx;
	
	if(this.y > innerHeight || this.y < 0 )
	{
		this.dy = -this.dy;
	}		
	this.y += this.dy;

	this.draw();
}
	
}

var circleArray = [];

for(var i = 0; i<100; i++){
var radius = 35;
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = (Math.random() * 10);                    //sometime fast sometime slow;
var	dy = (Math.random() * 10);

circleArray.push(new Circle(x,y,dx,dy,radius));	
}


var vari = 0;
var st = document.getElementById("webBack");

function animate(){
	requestAnimationFrame(animate);
	vari++;

		if( vari == 1 )
		st.style.backgroundImage = "url(1.jpg)";

		if( vari == 200 )
		st.style.backgroundImage = "url(2.jpg)";

		if( vari == 400 )
		st.style.backgroundImage = "url(3.jpg)";

		if( vari == 600 )
		st.style.backgroundImage = "url(4.jpg)";


		if( vari == 800 )
		st.style.backgroundImage = "url(5.jpg)";

		if( vari == 1000 ){
		st.style.backgroundImage = "url(6.jpg)";
		vari = 0;
		}

	c.clearRect( 0 , 0 , innerWidth , innerHeight );

	for(var i = 0 ; i < circleArray.length ; i++ )
	circleArray[i].update();

	}	
animate();
