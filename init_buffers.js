function initBuffersCube(gl) {

  // Create a buffer for the cube's vertex positions.

  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the cube.

  const positions = [
    // Front face
    -0.3, -4.0,  0.2,
     0.3, -4.0,  0.2,
     0.3,  4.0,  0.2,
    -0.3,  4.0,  0.2,

    // Back face
    -0.3, -4.0, -0.2,
    -0.3,  4.0, -0.2,
     0.3,  4.0, -0.2,
     0.3, -4.0, -0.2,

    // Top face
    -0.3,  4.0, -0.2,
    -0.3,  4.0,  0.2,
     0.3,  4.0,  0.2,
     0.3,  4.0, -0.2,

    // Bottom face
    -0.3, -4.0, -0.2,
     0.3, -4.0, -0.2,
     0.3, -4.0,  0.2,
    -0.3, -4.0,  0.2,

    // Right face
     0.3, -4.0, -0.2,
     0.3,  4.0, -0.2,
     0.3,  4.0,  0.2,
     0.3, -4.0,  0.2,

    // Left face
    -0.3, -4.0, -0.2,
    -0.3, -4.0,  0.2,
    -0.3,  4.0,  0.2,
    -0.3,  4.0, -0.2,
  ];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Now set up the colors for the faces. We'll use solid colors
  // for each face.
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Front
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Back
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Top
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Bottom
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Right
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Left
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                gl.STATIC_DRAW);

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  const indices = [
    0,  1,  2,      0,  2,  3,    // front
    4,  5,  6,      4,  6,  7,    // back
    8,  9,  10,     8,  10, 11,   // top
    12, 13, 14,     12, 14, 15,   // bottom
    16, 17, 18,     16, 18, 19,   // right
    20, 21, 22,     20, 22, 23,   // left
  ];

  // Now send the element array to GL

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };
}

function initBuffersTriangle(gl) {

  // Create a buffer for the cube's vertex positions.

  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the cube.
  // var a = (Math.sqrt(2) - 1) * 4;
  const positions = [
    // Front face
    -1.0, -4.0, 0.2,
     1.0, -4.0, 0.2,
     0.0, 0.0, 0.2,

     0.0, 0.0, 0.2,
     1.0, 4.0, 0.2,
    -1.0, 4.0, 0.2,
  ];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Top
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
    // Bottom
    0.0,  0.0,
    1.0,  0.0,
    1.0,  1.0,
    0.0,  1.0,
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                gl.STATIC_DRAW);

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  const indices = [
    0,  1,  2,      3,  4,  5,    // front
  ];

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };
}

function initBuffers(gl) {

  // Create a buffer for the cube's vertex positions.

  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
  var s = (Math.sqrt(2) - 1) * 4;
  // Now create an array of positions for t4e cube.

  const positions = [
    // Front face
     1.6568, 4,  1.0,
    -1.6568, 4,  1.0,
     1.6568, 4, -1.0,
    -1.6568, 4, -1.0,

    // Back face
     1.6568, 4,  1.0,
     4, 1.6568,  1.0,
     1.6568, 4, -1.0,
     4, 1.6568, -1.0,

    // Top face
     4, 1.6568,  1.0,
     4,-1.6568,  1.0,
     4, 1.6568, -1.0,
     4,-1.6568, -1.0,

     4,-1.6568,  1.0,
     1.6568,-4,  1.0,
     4,-1.6568, -1.0,
     1.6568,-4, -1.0,

     1.6568,-4,  1.0,
    -1.6568,-4,  1.0,
     1.6568,-4, -1.0,
    -1.6568,-4, -1.0,

    -1.6568,-4,  1.0,
    -4,-1.6568,  1.0,
    -1.6568,-4, -1.0,
    -4,-1.6568, -1.0,

    -4,-1.6568,  1.0,
    -4, 1.6568,  1.0,
    -4,-1.6568, -1.0,
    -4, 1.6568, -1.0,

    -4, 1.6568,  1.0,
    -1.6568, 4,  1.0,
    -4, 1.6568, -1.0,
    -1.6568, 4, -1.0,

  ];
  
  for(var i=0;i<tunnelPoints;i++)
  {
    var len = positions.length;
    for(var j=0;j<96;j++)
    {
      var t = len+j;
      // console.log(t);
      if(t%3==2)
        positions[t] = positions[j]-2*(i+1);
      else
        positions[t] = positions[j];
    }
  }

  console.log(positions.length);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  const textureCoordinates = [
    // Front
    [0.0, 0.0,1.0, 0.0, 1.0, 1.0, 0.0, 1.0],
    // Back
    [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0],
    // Top
    [0.0,  0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0],
    // Bottom
    [0.0,  0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0],
    // Right
    [0.0,  0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0],
    // Left
    [0.0,  0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0],

    [0.0,  0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0],
    // Left
    [0.0,  0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0],
  ];

  var colors = []

  for (var j = 0; j < textureCoordinates.length*300; ++j) {
    c = textureCoordinates[i%8];
    colors = colors.concat(c, c, c, c);
  }

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors),
                gl.STATIC_DRAW);

  // Build the element array buffer; this specifies the indices
  // into the vertex arrays for each face's vertices.
  const normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  var p = 5.65;
  var q = 2.34;
  const vertexNormals = [
    // Front
     [p, q, 0,
     p, q, 0,
     p, q, 0,
     p, q, 0],

    [q, p, 0,
      q, p, 0,
      q, p, 0,
      q, p, 0],

     [-q, p, 0,
      -q, p, 0,
      -q, p, 0,
      -q, p, 0],

     [-p, q, 0,
     -p, q, 0,
   -p, q, 0,
 -p, q, 0],

     [-p, -q, 0,
     -p, -q, 0,
   -p, -q, 0,
 -p, -q, 0],

     [-q, -p, 0,
     -q, -p, 0,
   -q, -p, 0,
 -q, -p, 0],

     [q, -p, 0,
     q, -p, 0,
   q, -p, 0,
 q, -p, 0],
     [p, -q, 0,
     p, -q, 0,
   p, -q, 0,
 p, -q, 0],
  ];

  var nor = [];
  for(var i=0;i<vertexNormals.length*300;i++)
  {
    n = vertexNormals[i%8];
    nor = nor.concat(n,n,n,n);
  }

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(nor),
                gl.STATIC_DRAW);
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  const indices = [
    0,  1,  2,      1,  2,  3,    // front
    4,  5,  6,      5,  6,  7,    // back
    8,  9,  10,     9,  10, 11,   // top
    12, 13, 14,     13, 14, 15,   // bottom
    16, 17, 18,     17, 18, 19,   // right
    20, 21, 22,     21, 22, 23,   // left
    24, 25, 26,     25, 26, 27,   // left
    28, 29, 30,     29, 30, 31,   // left
  ];

  

  for(var i=0;i<tunnelPoints;i++)
  {
    var lenIn = indices.length;
    for(var j = 0;j<48;j++)
    {
      indices[lenIn+j] = indices[j]+32*(i+1);
    }
  }

  console.log(indices.length);

  // Now send the element array to GL

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    normal: normalBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
  };
}

