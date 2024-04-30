class EngineButtonMusic extends EngineButton{
    constructor(name,position,size,fontSize){
        super(name,position,size,fontSize);
    }


    UPDATE(event){
        super.UPDATE(event)
        if(event.music){
            if(this.click){
                this.name = "Audio Y"
                event.music.play().catch((error) => {
                    console.error('fail audio')
                });
            }else{
                this.name = "Audio N"
                event.music.pause()
            }
        }
    }

   
}