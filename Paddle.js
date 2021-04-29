class Paddle{
    constructor(x,y,w,h){

        var options={
            resitution:1,
            density:3,
            friction:1,
            isStatic:true
            
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height = h;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("blue");
        rect(0,0, this.width, this.height);
        pop();
      }

      control_with_arrow(up,down,left,right,angleKey){
        var paddlepos= this.body.position;
        this.x_y_key(right,paddlepos.x+10,paddlepos.y,this.body)
        this.x_y_key(left,paddlepos.x-10,paddlepos.y,this.body)
        this.x_y_key(up,paddlepos.x,paddlepos.y-10,this.body)
        this.x_y_key(down,paddlepos.x,paddlepos.y+10,this.body)
        if(keyIsDown(angleKey)){
            Matter.Body.setAngle(this.body,this.body.angle+0.2);

        }
        
      }
      x_y_key(key,x,y,body){
        if(keyIsDown(key)){
            Matter.Body.setPosition(body,{x:x,y:y});
          }
      }
}