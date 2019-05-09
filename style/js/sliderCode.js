var i = 0; 
var j=1;
var k=2	;		
var images = [];	
var time = 3000;	

images[0] = "assets/person1.png";
images[1] = "assets/person2.png";
images[2] = "assets/person3.png";

function changeImg(){
	document.slide.src = images[i] 
	if(i < images.length - 1 ){
	  i++; 
	} 
	else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload=changeImg;