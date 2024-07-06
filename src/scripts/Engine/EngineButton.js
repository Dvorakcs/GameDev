class EngineButton extends EngineSprite{
    constructor(name,position,size,imageUrl,cutSize,sizeFrame,limitFrame){
        super(imageUrl,position,size,cutSize,sizeFrame,limitFrame);
        this.name = name;
        this.position = position;
        this.size = size;
    }

    UPDATE(event){
       if(event == undefined || event == null) return
        
       if(this.collisionDefault(event.mouse) && event.mouse.leftClick){
        return true
       }
       super.UPDATE(event)
       return false
    }

    collisionDefault(object){
        if(object.position.x < this.position.x + this.size.x &&
            object.position.x + object.size.x > this.position.x &&
            object.position.y < this.position.y + this.size.y &&
            object.position.y + object.size.y > this.position.y){
                this.frame = 1
                return true
        }
        this.frame = 0
        return false
    }
    DRAW(event){
        if(event == undefined || event == null) return
        if(event.engineCanvas == undefined || event.engineCanvas == null) return   
        super.DRAW(event)
        const EngineCanvas = event.engineCanvas
        EngineCanvas.context.fillStyle = "rgba(255,255,255,0)"
        EngineCanvas.context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)
    }
}