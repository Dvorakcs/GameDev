class EngineCamera extends EngineObjectGenerics{
    constructor(position,size){
        super()
        this.position = position
        this.size = size
        this.player = null
        this.map = null
    }


    UPDATE(event){
        this.player = event.player;
        this.elementMap = event.elementMap;
        if(!this.VerifyEntities()) return

        this.MoveToMap()
    }

    VerifyEntities(){
        if(this.player && this.elementMap) return true

        return false
    }

    MoveToMap(){
        if(this.player.velocity.x != 0 ){
            
            for (let element of this.elementMap) {
                if(!this.player.collisionX) {
                    
                 //   element.position.x -= this.player.velocity.x
                };
                
                
            } 
            return
        }
        
    }
}