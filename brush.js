class Brush extends BaseClass {
    constructor(x, y,radius){
      super(x,y,radius);
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
    erase(){
        fill(255,255,255);
    }
  };
  