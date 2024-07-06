class EngineObjectGenerics extends EngineSprite{
    constructor(position,rePosition,size,reSize,isController, isGravity,
       spriteUrlsImage, spriteCutSize,spriteSizeFrame,
        spriteLimitFrame,spriteIsAnimation){
        
            super(spriteUrlsImage,
            position,
            size,
            spriteCutSize,
            spriteSizeFrame,
            spriteLimitFrame,
            spriteIsAnimation)

        this.position = position;
        this.rePosition = rePosition;
        this.size = size;
        this.reSize = reSize;
        this.velocity = {x:0,y:0};
        this.gravity = 1;
        this.isController = isController ?? false;
        this.isJumping = false;
        this.isGravity = isGravity ?? false
        this.collision = false
        this.collisionX = false
        this.collisionY = false
    }
    get realPosition(){
        return {
            x: this.position.x + this.rePosition.x,
            y: this.position.y + this.rePosition.y
        }
    
    }
    get realSize(){
        return {
            x: this.size.x - this.reSize.x,
            y: this.size.y - this.reSize.y
        }
    }

    START(){

    }

    UPDATE(event){
      
        console.log(this.collisionX)
        super.UPDATE({
            genericsObject:this
        })
        
        
        if(this.isGravity) this.ApplyVelocityX()
        if(event.obj) this.CollisionObject(event.obj,"x")
        if(this.isGravity) this.ApplyVelocityY()
        if(event.obj) this.CollisionObject(event.obj,"y") 
        
        if(this.position.y + this.rePosition.y + this.size.y - this.reSize.y > window.innerHeight - 200){
            this.position.y = window.innerHeight - 200 - this.size.y + this.rePosition.y;
            this.velocity.y = 0;
            this.isJumping = false;
        }
        if(this.isController) this.ToMove(event.keys)
        
    }
    ApplyVelocityX(){
        this.velocity.x += this.velocity.x;
        this.position.x += this.velocity.x;
    }
    ApplyVelocityY(){
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;
    }
    CollisionObject(objs,axes){

        for(const obj in objs){
           if(this.VerifyCollision(objs[obj],axes)){
            
            return
           }
           if(!this.collisionX){
            objs[obj].position.x -= this.velocity.x
           }
           
        }
            
    }
    VerifyCollision(obj,axes){
       if(this.Collision(obj,axes)) return true
       return false
    }
    Collision(obj,axes){
        
       if(!this.IsCollision(obj)) {
            
        return false
       }
        
       if(!this.applyCollision(obj,axes) ) return false
        
        return true
    }
    IsCollision(obj){
        
        if(this.realPosition.x + this.realSize.x < obj.realPosition.x) return false
        if(this.realPosition.x > obj.realPosition.x + obj.realSize.x) return false                
        if(this.realPosition.y + this.realSize.y < obj.realPosition.y) return false
        if(this.realPosition.y > obj.realPosition.y + obj.realSize.y) return false
     
       
        return true
        
    }
    applyCollision(obj,axes){
       
        if(this.velocity[axes] > 0){
            this.position[axes] = obj.realPosition[axes] - this.rePosition[axes] - this.realSize[axes] - 0.001
            this.velocity[axes] = 0
            if(axes === "x"){
                this.DefaultCollisionX()
            }
            if(axes === "y"){
                this.isJumping = false
                this.DefaultCollisionY()
            } 
            return true
        }
        if(this.velocity[axes] < 0){
            
            this.position[axes] = obj.realPosition[axes] - this.rePosition[axes] + obj.realSize[axes] + 0.001
            this.velocity[axes] = 0
            if(axes === "x"){
                this.DefaultCollisionX()
                
            }
            if(axes === "y"){
                this.DefaultCollisionY()
            } 
            return true
        }

       return false
    }
    DefaultCollision(){
        this.collision = true
    }
    DefaultCollisionX(){
        
        this.collisionX = true
    }

    DefaultCollisionY(){
        this.collisionY = true
    }

    ToMove(keys){
       if(keys.a){
            this.velocity.x = -2;
       }
       if(keys.d){
           this.velocity.x = +2;
       }
       if(keys.w && !this.isJumping){  
        this.velocity.y = -20
        this.isJumping = true
       }
       if(!keys.a && !keys.d){
           this.velocity.x = 0;
       } 
    }

    DRAW(event){
        if(event == undefined || event == null) return
        if(event.engineCanvas == undefined || event.engineCanvas == null) return
        
        const EngineCanvas = event.engineCanvas
       
        EngineCanvas.drawObjectStroke({
            color: "red",
            context:EngineCanvas.context,
            position:{x:this.realPosition.x,y:this.realPosition.y},
            size:{x:this.realSize.x,y:this.realSize.y},
            radius:[0,0,0,0]
        })
        super.DRAW(event)
    }

    STOP(){

    }
}