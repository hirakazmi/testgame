import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_cube(gl: WebGL2RenderingContext) {
    let Vertices = gl.createBuffer();
    gl.bindBuffer(GL_ARRAY_BUFFER, Vertices);
    gl.bufferData(GL_ARRAY_BUFFER, vertices, GL_STATIC_DRAW);
    let Normals = gl.createBuffer();
    gl.bindBuffer(GL_ARRAY_BUFFER, Normals);
    gl.bufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW);
    let Indices = gl.createBuffer();
    gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, Indices);
    gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW);
    return <Mesh>{
        Vertices,
        Normals,
        Indices,
        Count: indices.length,
    };
}

let vertices = Float32Array.from([
    -0.5,
    -0.5,
    0.5,
    -0.5,
    0.5,
    0.5,
    -0.5,
    0.5,
    -0.5,
    -0.5,
    -0.5,
    -0.5,
    -0.5,
    -0.5,
    -0.5,
    -0.5,
    0.5,
    -0.5,
    0.5,
    0.5,
    -0.5,
    0.5,
    -0.5,
    -0.5,
    0.5,
    -0.5,
    -0.5,
    0.5,
    0.5,
    -0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    -0.5,
    0.5,
    0.5,
    -0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    -0.5,
    0.5,
    0.5,
    -0.5,
    -0.5,
    0.5,
    -0.5,
    -0.5,
    -0.5,
    0.5,
    -0.5,
    -0.5,
    0.5,
    -0.5,
    0.5,
    -0.5,
    -0.5,
    0.5,
    0.5,
    0.5,
    -0.5,
    -0.5,
    0.5,
    -0.5,
    -0.5,
    0.5,
    0.5,
    0.5,
    0.5,
    0.5,
]);

let normals = Float32Array.from([
    -1,
    0,
    0,
    -1,
    0,
    0,
    -1,
    0,
    0,
    -1,
    0,
    0,
    0,
    0,
    -1,
    0,
    0,
    -1,
    0,
    0,
    -1,
    0,
    0,
    -1,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    -1,
    0,
    0,
    -1,
    0,
    0,
    -1,
    0,
    0,
    -1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
]);

let indices = Uint16Array.from([
    23,
    22,
    20,
    22,
    21,
    20,
    19,
    18,
    16,
    18,
    17,
    16,
    15,
    14,
    12,
    14,
    13,
    12,
    11,
    10,
    8,
    10,
    9,
    8,
    7,
    6,
    4,
    6,
    5,
    4,
    3,
    2,
    0,
    2,
    1,
    0,
]);
