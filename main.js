var canvas= new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=='80'){
        console.log("P and shift key are pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;

    }
    if(e.shiftKey==true && keyPressed=='77'){
        console.log("M and shift key are pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;

    }
    if(keyPressed=='38'){
        up();
        console.log("Up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    if(keyPressed=='87'){
        new_image('wall.jpg');
        console.log("W");
    }
    if(keyPressed=='89'){
        new_image('yellow_wall.jpg');
        console.log("Y");
    }
    if(keyPressed=='67'){
        new_image('cloud.jpg');
        console.log("C");
    }
    if(keyPressed=='87'){
        new_image('dark_green.jpg');
        console.log("D");
    }
    if(keyPressed=='71'){
        new_image('ground.jpg');
        console.log("G");
    }
    if(keyPressed=='76'){
        new_image('light_green.jpg');
        console.log("L");
    }
    if(keyPressed=='82'){
        new_image('roof.jpg');
        console.log("R");
    }
    if(keyPressed=='84'){
        new_image('trunk.jpg');
        console.log("T");
    }
    if(keyPressed=='85'){
        new_image('unique.jpg');
        console.log("W");
    }
}