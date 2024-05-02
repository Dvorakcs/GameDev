class EngineSprite extends EngineAnimationSprite{
    constructor(imageUrl,position,size,cutSize,
        sizeFrame,limitFrame,isAnimation
    ){
        super()
        this.position = position;
        this.size = size;       
        this.imagesSprites = {}
        this.spriteSelect = "idle"
        this.spriteDirect = "right"
        this.cutSize = cutSize;
        this.sizeFrame = sizeFrame;
        this.frame = 0;
        this.limitFrame = limitFrame;

        this.time = 0;
        this.timeMax = 8
        this.isAnimation = isAnimation ?? false;



        this.LoadSprite(imageUrl)
    }
     
    LoadSprite(imagesUrl){
        
        for(const url in imagesUrl){

            this.imagesSprites[url] = new Image();
            this.imagesSprites[url].src = imagesUrl[url];
            this.imagesSprites[url].onload = (image) => {
                image.loaded = true
            }
        }
       
    }

    START(event){

    }

    UPDATE(event){
      
        this.frame = super.UPDATE(event)
       /* if(this.isAnimation){
        if(this.time > this.timeMax){
            this.time = 0
            this.frame += 1
        }

        if(this.frame > this.limitFrame){
            this.frame = 0
        }
        this.time++;
       }*/
    }

    DRAW(event){
        if(event == undefined || event == null) return
        if(event.engineCanvas == undefined || event.engineCanvas == null) return   
        if(this.loadImage == false) return
        const EngineCanvas = event.engineCanvas
        
       if(Object.keys(this.imagesSprites).length > 0){
        

        if(this.spriteDirect == "left"){
            EngineCanvas.context.save()
            EngineCanvas.context.scale(-1,1)
            EngineCanvas.context.drawImage(
                this.imagesSprites[this.spriteSelect],
                this.sizeFrame.x * this.frame,this.sizeFrame.y,
                this.cutSize.x,this.cutSize.y,
                -this.position.x,
                this.position.y, 
                -this.size.x,
                this.size.y)
           }else{
            EngineCanvas.context.save()
            EngineCanvas.context.scale(1,1)
            EngineCanvas.context.drawImage(
                this.imagesSprites[this.spriteSelect],
                this.sizeFrame.x * this.frame,this.sizeFrame.y,
                this.cutSize.x,this.cutSize.y,
                this.position.x,
                this.position.y, 
                this.size.x,
                this.size.y)
           }
           EngineCanvas.context.restore();
        }
        
        
    }

    STOP(event){  

    }
}
