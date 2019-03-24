class Webgl{

    private canvas:HTMLCanvasElement;
    private gl:WebGLObject;


    constructor(width:number,height:number){
        this.canvas = this.createCanvas(width,height);
        this.gl = this.createGL(this.canvas);
        this.gl.viewport(0,0,width,height);
    }


    private createCanvas(width:number,height:number){
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.id = 'canvas';
        document.body.appendChild(canvas);
        return canvas;
    }
    private createGL(canvas:HTMLCanvasElement){
        const gl = canvas.getContext('webgl');
        if(gl==null || !(gl instanceof WebGLRenderingContext)){
            console.log('cannot create webgl')
            return null;
        }
        
        return gl;
    }

    getCanvas(){
        return this.canvas;
    }

   getGl(){
        return this.gl;
    }
    

    
}