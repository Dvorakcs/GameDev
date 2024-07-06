class EngineAnimationSprite{
    constructor(isAnimation,timeMax,limitFrame){
        this.isAnimation = isAnimation ?? false
        this.time = 0
        this.timeLimit = 0
        this.timeMax = timeMax ?? 0 
        this.limitFrame = limitFrame ?? 0
    }


    UPDATE(event){
        if(event.genericsObject){
            this.VerifyAnimation(event.genericsObject)
        }
        if(this.isAnimation){
            this.ApplyAnimation()
        }

        return this.frame;
    }
    VerifyAnimation(genericsObject){
        if(genericsObject.velocity.y != 0){
            this.spriteSelect = "jump"
            return
        }else
        if(genericsObject.velocity.x != 0){
            genericsObject.isJumping == true ? this.spriteSelect = "jump": this.spriteSelect = "run"
            return
        }
        if(genericsObject.velocity.y == 0 && 
            genericsObject.velocity.x == 0){
                genericsObject.isJumping == true ? this.spriteSelect = "jump": this.spriteSelect = "idle"
        }
    }
    ApplyAnimation(){
        
        if(this.time > this.timeMax){
            this.time = 0
            this.frame += 1
        }

        if(this.frame > this.limitFrame){
            this.frame = 0
        }
        this.time++;
    }
}
