var Program = /** @class */ (function () {
    function Program(gl, vsSource, fsSource) {
        this.program = this.createProgram(gl, vsSource, fsSource);
    }
    Program.prototype.createProgram = function (gl, vsSource, fsSource) {
        var vs = this.createShader(gl, gl.VERTEX_SHADER, vsSource);
        var fs = this.createShader(gl, gl.FRAGMENT_SHADER, fsSource);
        var program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Cannot create Project');
            return null;
        }
        return program;
    };
    Program.prototype.createShader = function (gl, type, source) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Cannot create shader object');
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    };
    Program.prototype.getProgram = function () {
        return this.program;
    };
    return Program;
}());
