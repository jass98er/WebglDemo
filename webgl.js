var Webgl = /** @class */ (function () {
    function Webgl(width, height) {
        this.canvas = this.createCanvas(width, height);
        this.gl = this.createGL(this.canvas);
        this.gl.viewport(0, 0, width, height);
    }
    Webgl.prototype.createCanvas = function (width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.id = 'canvas';
        document.body.appendChild(canvas);
        return canvas;
    };
    Webgl.prototype.createGL = function (canvas) {
        var gl = canvas.getContext('webgl');
        if (gl == null || !(gl instanceof WebGLRenderingContext)) {
            console.log('cannot create webgl');
            return null;
        }
        return gl;
    };
    Webgl.prototype.getCanvas = function () {
        return this.canvas;
    };
    Webgl.prototype.getGl = function () {
        return this.gl;
    };
    return Webgl;
}());
