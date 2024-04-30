class EngineLetterObject extends EngineObjectGenerics{
    constructor(position,text,width){
        super(position,
        {x:0,y:0},{x:width,y:30},
        {x:0,y:0},
        false,
        true,
        "",
        {x:144,y:150},
        {x:150,y:0},
        7,
        true
        )
        this.text = text
    }


    DRAW(event){
        super.DRAW(event)
       // console.log(`Letter: X${this.realPosition.x}, Y:${this.realPosition.y}`)
        event.engineCanvas.drawObjectText({
            color:'black',
            fontSize:12,
            name:this.text,
            position:this.position,
            size:this.size
        })
    }
}