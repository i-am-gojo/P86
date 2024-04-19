var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(img){
        bannerObject=img;

        bannerObject.scaleToWidth(700)
        bannerObject.scaleToHeight(500)
        bannerObject.set({
            top:0,
            left:0
        })
        canvas.add(bannerObject)
    })
}
new_image()
function playSound(){
	x.play();
}