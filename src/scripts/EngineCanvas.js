class EngineCanvas{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.classList.add('canvasClass');
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    }
    drawObjectRound(objectContext){
        objectContext.context.fillStyle = objectContext.color;
        objectContext.context.beginPath();
        objectContext.context.roundRect(objectContext.position.x, objectContext.position.y, 
            objectContext.size.x, objectContext.size.y,objectContext.radius);
            objectContext.context.fill();
    }
    drawObjectStroke(objectContext){
        objectContext.context.strokeStyle = objectContext.color;
        objectContext.context.strokeRect(objectContext.position.x, objectContext.position.y
        ,objectContext.size.x, objectContext.size.y)
       
    }
    drawObjectText(objectTextContext){
        this.context.fillStyle = objectTextContext.color;
        this.context.font = `${objectTextContext.fontSize}px '${objectTextContext.style}'`;
        const textWidth =this.context.measureText(objectTextContext.name).width
        const fontBoundingBoxAscent =this.context.measureText(objectTextContext.name).fontBoundingBoxAscent
        this.context.fillText(objectTextContext.name, 
            objectTextContext.position.x + (objectTextContext.size.x / 2) - (textWidth/2), 
            objectTextContext.position.y + (objectTextContext.size.y / 2) + (fontBoundingBoxAscent/2));
    }
}