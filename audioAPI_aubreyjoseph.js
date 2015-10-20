var a = document.getElementById("audioAPI");
var aCtx = a.getContext("2d");
var imag = new Image();
var whateveruwannanameit = new Audio("http://a.tumblr.com/tumblr_mcx5iuK1Dm1r48tndo1.mp3");
whateveruwannanameit.loop = true
imag.src = "http://oi58.tinypic.com/2d0l3j8.jpg";
imag.onload = function () {aCtx.drawImage(imag,0,0, 500, 500);};
whateveruwannanameit.play();
