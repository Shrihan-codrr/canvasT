Canvas = document.getElementById("my_canvas");

pen = Canvas.getContext("2d");



var last_pos_x,last_pos_y;

color = "blue";
width_line = 5;

Canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {


last_pos_x = e.touches[0].clientX-Canvas.offsetLeft;
last_pos_y= e.touches[0].clientY-Canvas.offsetTop;
   
}




Canvas.addEventListener("touchmove",my_touchMove);
function my_touchMove(e){
     
      current_pos_x=e.touches[0].clientX-Canvas.offsetLeft;
      current_pos_y=e.touches[0].clientY-Canvas.offsetTop;

        pen.beginPath();
        pen.strokeStyle = color;
        pen.lineWidth = width_line;
        pen.moveTo(last_pos_x,last_pos_y);   
        pen.lineTo(current_pos_x,current_pos_y);
        pen.stroke();
        last_pos_x = current_pos_x;
        last_pos_y = current_pos_y;
       
    
}


