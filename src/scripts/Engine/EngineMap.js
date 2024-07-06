class EngineMap {
    constructor(){
        this.EngineManagerMap = new EngineManagerMap([
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            [" "," "," "," "," "],
            ["#","#"," "," ","#"],
            
            
        ])
        this.elementMap = this.EngineManagerMap.elementMap
        this.player = new EnginePlayer({x:FormatGrid(2),y:FormatGrid(2)});
        this.camera = new EngineCamera({x:0,y:0},{x:100,y:100})
    }

    START(){

    }

    UPDATE(event){
        this.player.UPDATE({
            keys:event.controller.keys,
            obj:this.elementMap
        });
       
        this.elementMap.forEach((element) => {
            element.UPDATE({
                obj:[this.player]
            })
        })    
        
      //  this.camera.UPDATE({
         //   player:this.player,
         //   elementMap:this.elementMap
       // })
    }

    DRAW(event){    
        this.player.DRAW(event);
        
        this.elementMap.forEach((element) => {
            element.DRAW(event)
        })
    }

    STOP(){

    }
    
}