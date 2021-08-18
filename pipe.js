var pipe = function(game){
    this.game = game;
    this.image = null;
    this.x =380;
    this.y = 320;
    this.loaded = false;

    var self = this;

    this.init = function(){
        this.loadImage();
    }


    this.loadImage = function(){
        this.image = new Image();

        this.image.onload = function(){
            self.loaded = true;
        }

        this.image.src = "img/pipe.png";
    }


    this.update = function(){
        if(this.game.gameOver){
            return;
        }
        
        this.x -=2;
        if(this.x == -54){  //ống đi qua hết
            this.x = 380;   //ống đi qua hết sẽ load lại ống
            this.y = Math.floor(200+(Math.random()*200));
        }
    }


    this.draw = function(){
        if(self.loaded == false){
            return;
        }
        self.game.context.drawImage(this.image,this.x,this.y-150-320); //ống trên; 150: độ rộng ống
        self.game.context.drawImage(this.image,this.x,this.y);     //ống dưới

    }

}