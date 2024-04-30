class EngineMap {
    constructor(){
        this.letter = []
        this.player = new EnginePlayer({x:window.innerHeight/2,y:0});
        this.input = new EngineInput({x:50,y:window.innerHeight -100})
    
    }

    START(){

    }

    UPDATE(event){
        this.letter.forEach((letter) => {
            letter.UPDATE(
                {
                    keys:event.controller.keys,
                    obj:this.letter.filter(l => l != letter)
                }
            );
        })
        
        this.player.UPDATE({
            keys:event.controller.keys,
            obj:this.letter
        });

        this.input.UPDATE({
            keys:event.controller.keys,
            mouse:event.mouse,
        })

        if(this.input.returnText != ""){
           
            this.letter.push(new EngineLetterObject({x:(Math.random() * window.innerWidth),y:0},
            this.input.returnText, 
            event.engineCanvas.context.measureText(this.input.returnText).width + 20))
            this.input.returnText = ""
            return
        }
    }

    DRAW(event){
        this.letter.forEach((letter) => {
            letter.DRAW(event)
        })
        this.player.DRAW(event);
        this.input.DRAW(event)
    }

    STOP(){

    }
    
}