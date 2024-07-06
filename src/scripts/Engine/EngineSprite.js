class EngineSprite extends EngineAnimationSprite{
    constructor(sprites,position,size,cutSize,
        sizeFrame,limitFrame,isAnimation,timeMax
    ){
        super(isAnimation,timeMax ?? 8,limitFrame)
        this.position = position;
        this.size = size;       
        this.imagesSprites = {}
        this.spriteSelect = "idle"
        this.spriteDirect = "right"
        this.cutSize = cutSize;
        this.sizeFrame = sizeFrame;
        this.frame = 0;
        
        this.LoadSprite(sprites)
    }
     
    LoadSprite(sprites){
        
        for(const sprite in sprites){
            this.ApplySprite(sprite, sprites)
        }
       
    }

    ApplySprite(sprite, sprites){
        
        this.imagesSprites[sprite] = new Image();
        this.imagesSprites[sprite].src = sprites[sprite].spriteUrl;
        this.imagesSprites[sprite].onload = (image) => {
            image.loaded = true
            this.imagesSprites[sprite].limitFrame = sprites[sprite].limitFrame
        }
    }

    START(event){

    }

    UPDATE(event){
        this.frame = super.UPDATE(event)
        if(event.genericsObject){
            this.VerifyDirection(event.genericsObject)
        }
    }
    VerifyDirection(genericsObject){
        if(genericsObject.velocity.x > 0){
            this.spriteDirect = "right"
            
        }else if(genericsObject.velocity.x < 0){
            this.spriteDirect = "left"
        }

    }
    DRAW(event){
        if(event == undefined || event == null) return
        if(event.engineCanvas == undefined || event.engineCanvas == null) return   
        if(this.loadImage == false) return
        const EngineCanvas = event.engineCanvas
        
       if(Object.keys(this.imagesSprites).length > 0){

        this.SetLimitFrame()
        
        this.ApplyDirectionSprite(EngineCanvas)
        }
    }

    SetLimitFrame(){
        this.limitFrame = this.imagesSprites[this.spriteSelect].limitFrame
    }
    
    ApplyDirectionSprite(engineCanvas){
        this.spriteDirect === "left" ? 
                            engineCanvas.InvertWindow({x:-1,y:1},{x:-this.position.x,y:this.position.y},
                                                        {x:-this.size.x,y:this.size.y},this.imagesSprites[this.spriteSelect],this.sizeFrame,this.frame,this.cutSize) :
                            engineCanvas.InvertWindow({x:1,y:1},this.position,this.size,
                                                        this.imagesSprites[this.spriteSelect],this.sizeFrame,this.frame,this.cutSize) 
    }
    
    STOP(event){  

    }
}
