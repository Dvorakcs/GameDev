class EngineMenu extends EngineSprite{
    constructor(name,size){
        super( {idle:{
            spriteUrl:"./src/images/MenuSpriteBase.png",
            limitFrame:0
        }},
        {x:window.innerWidth/2 - 450/2,y:window.innerHeight/2 - 450/2},
        {x:450,y:450},
        {x:450,y:450},
        {x:0,y:0},
        0);
        this.size = size;
        this.btnStart = new EngineButton("Start Game",
        {x:window.innerWidth/2 - 208/2,y:window.innerHeight/2 - 322/2},
            {x:216,y:107},
            {idle:{
                spriteUrl: "/src/images/BtnStart.png",
                limitFrame:0
            }},
            {x:216,y:107},
            {x:216,y:0},
            1
        );
        this.btnOptions = new EngineButton("Start Game",
        {x:window.innerWidth/2 - 208/2,y:window.innerHeight/2 - 107/2},
            {x:216,y:107},
            {idle:{
                spriteUrl:"/src/images/BtnOptions.png",
                limitFrame:0
            }},
            {x:216,y:107},
            {x:216,y:0},
            1
        );
    }

    START(){
    }

    UPDATE(event){
       super.UPDATE(event)
       this.IsStart = this.btnStart.UPDATE({
            mouse:event.mouse,
            
        });

        this.IsOption = this.btnOptions.UPDATE({
            mouse:event.mouse,
            
        });

    }

    DRAW(event){
        if(event == undefined || event == null) return
        if(event.engineCanvas == undefined || event.engineCanvas == null) return
        
        const EngineCanvas = event.engineCanvas
        EngineCanvas.context.fillStyle = "#ff007f"
        EngineCanvas.context.fillRect(0,0,window.innerWidth,window.innerHeight)
        super.DRAW(event)
        this.btnStart.DRAW({
            engineCanvas:EngineCanvas
        });

        this.btnOptions.DRAW({
            engineCanvas:EngineCanvas
        });
    }

    STOP(){

    }
}