class EngineManagerMap{
    constructor(arrayMap){
        this.arrayMap = arrayMap
        this.elementMap = []
        this.convertArrayMapToElementMap()
    }

    convertArrayMapToElementMap(){
     for (let Y = 0; Y < this.arrayMap.length; Y++) {
        for (let X = 0; X < this.arrayMap[Y].length; X++) {
            if(this.arrayMap[Y][X] === "#"){
                this.elementMap.push(new EngineBlockGenericsCollision({
                    x:32 * X,y:32*Y
                }))
            }
            
        }
        
     }
    }


}