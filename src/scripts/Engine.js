class Engine extends EngineGenerics{
    constructor(){
        super();
        this.engineCanvas = new EngineCanvas();
        this.engineController = new EngineController();
        this.menu = new EngineMenu(
            "Menu",
            {
            x:450,
            y:450
            }
        );
        this.engineMap = new EngineMap();
        this.START();
    }

    START(){
        this.UPDATE();
    }

    UPDATE(){
        if(!this.menu.IsStart){
            this.menu.UPDATE({
                mouse: this.engineController.mouse
            })
        }else{
            this.engineMap.UPDATE({
                controller:this.engineController,
                mouse: this.engineController.mouse,
                engineCanvas:this.engineCanvas
            });
        }


        this.DRAW();
        requestAnimationFrame(this.UPDATE.bind(this));
    }
    DRAW(){
        
        super.DRAW({
            x: 0,
            y: 0,
            canvas:this.engineCanvas.canvas,
            context:this.engineCanvas.context
        })
        if(!this.menu.IsStart){
            this.menu.DRAW({ 
                engineCanvas:this.engineCanvas
            })
        }else{
            
            this.engineMap.DRAW({ 
                engineCanvas:this.engineCanvas,
            })
        }
        
    }
    STOP(){

    }

}


