var bird = function(game){
    //bird nhận trạng thái của game (vd: width,height)
    this.game = game;
    this.images = [];
    this.img1Loaded = false;
    this.img2Loaded = false;
    this.img3Loaded = false;

    
    var self = this;
    this.currentImage = null;
    this.currentFrame = 0;
    this.currentImageIndex = 0;
    this.x =100;
    this.y = 0;
    this.speedY = 0;
    this.acceleration = 1.5;
    



    this.init = function(){
        this.loadImage();
    }


    this.loadImage =  function(){
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();

        img1.onload = function(){
            self.img1Loaded = true;
            self.currentImage = img1;
            self.images.push(img1);
            //console.log(self.images);
        }

        img2.onload = function(){
            self.img2Loaded = true;
            self.currentImage = img2;
            
            self.images.push(img2);
        }

        img3.onload = function(){
            self.img3Loaded = true;
            self.currentImage = img3;
            
            self.images.push(img3);
        }

        img1.src = 'img/bird_0.png';
        img2.src = 'img/bird_1.png';
        img3.src = 'img/bird_2.png';

    }


    this.update = function(){

        if(!self.img1Loaded || !self.img2Loaded || !self.img3Loaded){
            return;
        }

       self.currentFrame++;
       if(self.currentFrame % 5 == 0){
           self.changeImage();
       }

       //forget all stuff 

       //tốc độ rơi 
       if(this.y< 610){
            this.speedY += this.acceleration;
            this.y += this.speedY;
       }

       if(this.y >= 610)
       {
           this.y = 610;
       }

       if(this.y <= 0){
           this.y = 0;
       }
       //

       //check game over
       if(this.y >= 550){
           this.game.gameOver = true;
       }

       //check hit

       this.checkHitPipe();

    }

    this.checkHitPipe = function(){
        if(
            (this.x+34 > this.game.pipe.x && this.x < this.game.pipe.x+52) &&
            (this.y+24 > this.game.pipe.y || this.y < this.game.pipe.y - 150)
        ){
            this.game.gameOver = true;
        }
    }


    this.flap = function(){
        //bird stop flying 
        if(this.game.gameOver){
            return;
        }

        this.speedY = -15;
    }


    this.changeImage = function(){
        //game over k vỗ cánh
        if(this.game.gameOver){
            return;
        }



        if(self.currentImageIndex == 2){
            self.currentImageIndex = 0;
        }
        else{
            self.currentImageIndex++;
        }

        this.currentImage = this.images[this.currentImageIndex];
       // console.log(this.images[this.currentImageIndex]);
    }


    this.draw = function(){
        if(self.img1Loaded && self.img2Loaded && self.img3Loaded){
            self.game.context.drawImage(self.currentImage,this.x,this.y);
        }
    }
}