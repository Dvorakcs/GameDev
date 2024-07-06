class EngineController {
    constructor(){
        this.mouse = {
            rightClick:false,
            leftClick:false,
            position:{x:0,y:0},
            size: {x:20,y:20}
        }
        this.keys = {
           
        }
        this.keysClick = {}
        this.keyDown = addEventListener('keydown', (event) => this.setKey(event.key,true))
        this.keyUp = addEventListener('keyup', (event) => this.setKey(event.key,false))
        this.mouseEvent = addEventListener('mousemove', (event) => this.setMousePosition(event))
        this.mouseEventClickDown = addEventListener('mousedown', (event) => this.setMouseClick())
        this.mouseEventClickUp = addEventListener('mouseup', (event) => this.setMouseClick())
    }


    setKey(keys,value){
        this.keys[keys] = value
    }
    setMouseClick(){
        if(this.mouse.leftClick){
            this.mouse.leftClick = false
        }else{
            this.mouse.leftClick = true
        }
    }
    setMousePosition(event){
        this.mouse.position.x = event.clientX
        this.mouse.position.y = event.clientY
    }
}