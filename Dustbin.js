class Dustbin{
    constructor(x,y){
        var options = {
            isStatic: true
        }

        this.body1 = Bodies.rectangle(x-44,y,13,110,options);
        World.add(world,this.body1);
        this.body2 = Bodies.rectangle(x,y+45,100,20,options);
        World.add(world,this.body2);
        this.body3 = Bodies.rectangle(x+44,y,13,110,options);
        World.add(world,this.body3);

        this.sprite = createSprite(this.body2.position.x,this.body1.position.y);
        this.sprite.addImage("dustbin",dustbinI);
        this.sprite.scale = 0.355;
    }

    display(){

        push();
        noStroke();

        fill("lightblue");
        var pos1 = this.body1.position;
        rect(pos1.x,pos1.y,13,110);

        var pos2 = this.body2.position;
        rect(pos2.x,pos2.y,100,20);

        var pos3 = this.body3.position;
        rect(pos3.x,pos3.y,13,110);
        pop();
    }
}