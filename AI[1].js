var xR = 0;
var yR = 0;
var colorR = "white";
var colorN = 0;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var INP = 0;


ctx.font = "100px Arial";

function RenderStart() {
INP = parseInt(document.getElementById("INPUT").value);
while (INP > 0) {
xR = Math.floor((Math.random() * 2000) + 1);
yR = Math.floor((Math.random() * 2000) + 1);
colorN = Math.floor(Math.random() * 4);
if (colorN == 1) {
colorR = "#008000";   
} else if (colorN == 2) {
colorR = "#0000FF";
} else if (colorN == 3) {
colorR = "#FF0000";
} else if (colorN == 0) {
colorR = "#000000"; };
ctx.fillStyle = colorR;
	ctx.fillText(".",xR,yR);
INP--;
} ;
INP = parseInt(document.getElementById("INPUT").value);
} ;

