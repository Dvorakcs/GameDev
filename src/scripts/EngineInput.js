class EngineInput extends EngineObjectGenerics{
    constructor(position){
        super(position,
        {x:0,y:0},{x:window.innerWidth - 100,y:40},
        {x:0,y:0},
        false,
        false,
        "",
        {x:144,y:150},
        {x:150,y:0},
        7,
        true
        )
        this.isSelected = false
        this.text = ""
        this.returnText = ""
    }


    UPDATE(event){
        if(event == undefined || event == null) return
        
        if(this.collisionDefault(event.mouse) && event.mouse.leftClick){
          
                this.isSelected = true
            
            
        }else if(event.mouse.leftClick){
            this.isSelected = false
        }

        if(this.isSelected){
            for(const key  in event.keys){
                if(event.keys[key] === true && 
                    key != "Backspace" &&
                    key != "Enter" &&
                    key != "Control" &&
                    key != "Shift"&&
                    key != "Alt" &&
                    key != "CapsLock" &&
                    key != "Tab" &&
                    key != "Escape"){
                    this.text += key
                    event.keys[key] = false;
                    break;
                }else if( event.keys[key] === true && key === "Backspace"){
                    
                    let textBackspace = this.text.split('')
                    textBackspace.pop()
                    this.text = textBackspace.join('');
                    event.keys[key] = false;
                    break;
                }else if(event.keys[key] === true && key == "Enter" ){
                    
                    this.returnText = this.text
                    this.text = ""
                    break
                }
            }
            
        }
        super.UPDATE(event)


        return this.returnText
    }


    collisionDefault(object){
        if(object.position.x < this.position.x + this.size.x &&
            object.position.x + object.size.x > this.position.x &&
            object.position.y < this.position.y + this.size.y &&
            object.position.y + object.size.y > this.position.y){
                
                return true
        }

        return false
    }


    DRAW(event){
        super.DRAW(event)

        event.engineCanvas.drawObjectText({
            color:'black',
            fontSize:12,
            name:this.text,
            position:this.position,
            size:this.size
        })
    }
}