var webgl:Webgl;
var program:Program;


function init(){
    const vs = document.getElementById('2d-vertex-shader').text;
    const fs = document.getElementById('2d-fragment-shader').text;
    webgl = new Webgl(window.innerWidth,window.innerHeight);
    const gl = webgl.getGl();
    pg = new Program(gl,vs,fs);
    program = pg.getProgram();
    gl.useProgram(program);
    var positionAttributeLocation = gl.getAttribLocation(program,'a_position');
    var resolutionUniformLocation = gl.getUniformLocation(program, "u_resolution");
    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
    gl.enableVertexAttribArray(positionAttributeLocation);

   
    
    
    gl.bindBuffer(gl.ARRAY_BUFFER, testBuffer(gl));
    

    var size = 2;         
    var type = gl.FLOAT;  
    var normalize = false;
    var stride = 0;       
                      
    var offset = 0;
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

    requestAnimationFrame(render);
}

function render(){
    var gl = null;
    if(gl == null){
    gl = webgl.getGl();
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 6;
    }
    //I am trying to refresh the buffer and trying to make the square move here, but it didnt work.
    var buffer = testBuffer(gl);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.clearColor(0.0,1.0,1.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(primitiveType, offset, count);
    requestAnimationFrame(render);
}

var positions = [
    10, 20,
    80, 20,
    10, 30,
    10, 30,
    80, 20,
    80, 30,
  ];

document.addEventListener('keydown',function(event){
    if(event.keyCode==87){
        positions[0] += 1;
        positions[2] += 1;
        positions[4] += 1;
        positions[6] += 1;
        positions[8] += 1;
        positions[10] += 1;
        console.log('a')
    }
},false)

function testBuffer(gl){
    const buffer = gl.createBuffer();
    
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(positions),gl.STATIC_DRAW);
    return buffer;
}



init();