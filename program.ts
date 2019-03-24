class Program{

    private program:WebGLProgram;

    constructor(gl:WebGLObject,vsSource,fsSource){
        this.program = this.createProgram(gl,vsSource,fsSource);
    }

    private createProgram(gl,vsSource,fsSource){
        const vs = this.createShader(gl,gl.VERTEX_SHADER,vsSource);
        const fs = this.createShader(gl,gl.FRAGMENT_SHADER,fsSource);
        const program = gl.createProgram();
        gl.attachShader(program,vs);
        gl.attachShader(program,fs);
        gl.linkProgram(program);
        if(!gl.getProgramParameter(program,gl.LINK_STATUS)){
            console.error('Cannot create Project');
            return null;
        }
        return program;
    }
    private createShader(gl,type,source){
        const shader = gl.createShader(type);
        gl.shaderSource(shader,source);
        gl.compileShader(shader);
        if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){
            console.error('Cannot create shader object');
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
    getProgram(){
        return this.program;
    }

}