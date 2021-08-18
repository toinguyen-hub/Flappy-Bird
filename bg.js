var bg = function(game){
    this.game = game;

    var self = this;

    this.image = null;
    this.loaded = false;
    this.x = 0;

    this.init = function(){
        this.loadImage();
    }


    this.loadImage = function(){
        this.image = new Image();
        this.image.onload = function(){
            self.loaded = true;
        //    console.log('image loaded');
        }

        this.image.src = 'img/bg.png';

    }

    this.update = function(){

        if(this.game.gameOver){
            return;
        }
        this.x--;
        if(this.x == -360){
            this.x = 0;
        }

    }


    this.draw = function(){

        if(self.loaded == false){   //nếu k load dc hình thì return
            return;
        }
        self.game.context.drawImage(this.image,this.x,0);
        self.game.context.drawImage(this.image,this.x+360,0);
        
       
    }
}