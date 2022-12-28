let quote = "every thing is hard before it is easy";
// 1. convert string to camel case?
// idea1: make first char and immidiate char after "space" to uppercase.
function camelCase1(str){
    const n = str.length;
    if(n == 0){
        return "";
    }
    let camelCase = '';
    for(let i = 0; i < n; i++){
        let char = str[i];
        if(i == 0 && char.charCodeAt() >= 90){
            camelCase = camelCase + char.toUpperCase();
        }else if(str[i-1] == " "){
            camelCase = camelCase + char.toUpperCase();
        }else{
            camelCase = camelCase + char;
        }
    }
    return camelCase;
}
console.log(camelCase1(quote));

// -------------- IDEA1 ------------------
let rows = 3;
let cols = 4;
let mat = new Array(rows).fill(0).map(()=> new Array(cols).fill(0));
console.log(mat);
// -------------- IDEA1 ------------------

// -------------- IDEA2 ------------------
let matrix = [];
let row = 4;
let col = 3;
function createMatrix(matrix,row,col){
    for(let i = 0; i < row; i++){
        // matrix.push([0]);
        matrix.push([]);
        for(let j = 0; j < col; j++){
            matrix[i][j] = 0;
        }
    }
    return matrix;
}
console.log(createMatrix(matrix,row,col));

// T.C = O(row * col);
// -------------- IDEA2 ------------------
