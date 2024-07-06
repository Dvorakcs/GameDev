class EnginePlayer extends EngineObjectGenerics{
    constructor(position){
        super(position,
        {x:154,y:136},{x:720/2,y:750/2},
        {x:149*2,y:136*2},
        true,
        true,
        {
            idle:{
                spriteUrl:"./src/images/Idle.png",
                limitFrame:7
            },
            run:{
                spriteUrl:"./src/images/Run.png",
                limitFrame: 7
            },
            jump:{
                spriteUrl:"./src/images/Jump.png",
                limitFrame: 1
            },
            attack:{
                spriteUrl:"./src/images/Attack1.png",
                limitFrame: 7 
            }
            //fall:"./src/images/Fall.png",
        },
        {x:144,y:150},
        {x:150,y:0},
        7,
        true,
        8
        )

        
    }

    UPDATE(event){
        super.UPDATE(event)
        //console.log(`PLAYER: X${this.realPosition.x}, Y:${this.realPosition.y},
          //          Velocity: ${this.velocity.y}`)
    }

    
}
   
