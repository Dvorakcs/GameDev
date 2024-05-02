class EngineAnimationSprite{
    constructor(isAnimation,timeMax,limitFrame){
        this.isAnimation = isAnimation ?? false
        this.time = 0
        this.timeMax = timeMax ?? 0 
        this.limitFrame = limitFrame ?? 0
    }


    UPDATE(event){
        if(this.isAnimation){
        if(this.time > this.timeMax){
            this.time = 0
            this.frame += 1
        }

        if(this.frame > this.limitFrame){
            this.frame = 0
        }
        this.time++;
       }

        return this.frame;
    }
}
