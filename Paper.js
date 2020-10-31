class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.d = r*2;

        
        this.sprite = createSprite(x,y);
        this.sprite.addImage("paper",paperI);
        this.sprite.scale = 0.35;
    }

    display(){
        this.sprite.x = this.body.position.x;
        this.sprite.y = this.body.position.y;
        
    }
}