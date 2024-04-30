class EnginePlayer extends EngineObjectGenerics{
    constructor(position){
        super(position,
        {x:154,y:136},{x:720/2,y:750/2},
        {x:149*2,y:136*2},
        true,
        true,
        {
            idle:"./src/images/Idle.png",
            run:"./src/images/Run.png",
            jump:"./src/images/Jump.png",
            fall:"./src/images/Fall.png",
            attack:"./src/images/Attack1.png"
        },
        {x:144,y:150},
        {x:150,y:0},
        7,
        true
        )

        
    }

    UPDATE(event){
        super.UPDATE(event)
        //console.log(`PLAYER: X${this.realPosition.x}, Y:${this.realPosition.y},
          //          Velocity: ${this.velocity.y}`)
    }

    DefaultCollisionX(){
       
    }
}
   
