var game = function () {

    this.canvas = null;
    this.context = null;
    //context là 1 object điều khiển canvas

    this.width = 360;
    this.height = 640;

    this.bird = null;
    this.bg = null;
    this.base = null;
    this.pipe = null;
    var self = this;    //dùng để callback
    //check gameOver
    this.gameOver = false;

    this.init = function () {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        document.body.appendChild(this.canvas);

        //create new bird
        this.bird = new bird(this);     //this là game   
        this.bird.init();

        //create background 
        this.bg = new bg(this);
        this.bg.init();

        //create base
        this.base = new base(this);
        this.base.init();

        //create pipe
        this.pipe = new pipe(this);
        this.pipe.init();

        //listenMouse

        this.listenMouse();

        this.loop();
    }


    this.listenMouse = function(){
        this.canvas.addEventListener('click',function(){
            self.bird.flap();
        });
    }

    this.loop = function () {
        self.update();
        self.draw();
        setTimeout(self.loop, 33);   //gọi lại hàm loop
    }


    this.update = function () {
        this.bg.update();
        this.base.update();
        this.pipe.update();
        this.bird.update();
    }


    this.draw = function () { 
        this.bg.draw();
        this.base.draw();
        this.pipe.draw();
        this.bird.draw();
    }
}


var g = new game();
g.init();