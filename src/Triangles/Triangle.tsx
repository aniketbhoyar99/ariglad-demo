import React,{useState,useEffect} from 'react'

const Triangle = () => {
const [pascalData, setPascalData] =useState();

// //-------------***********---------
// const pascalTriangle = (val:any) => {
//     const arr = []

//     for (let i = 0; i < val; i++) {
//         const row = [1]

//         for (let j = 1; j < i; j++) {
//            row.push(arr[i - 1][j - 1] + arr[i - 1][j])
//         }

//         if (i > 0) row.push(1)
//         arr.push(row)
//     }
//     return arr
// }

// console.log(pascalTriangle(7))

// //-------------***********---------
// const leftTriangle =(n:any)=>{
//     let starData = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 0; j < n - i; j++) {
//             starData = starData + " ";
//         }
//         for (let k = 0; k < i; k++) {
//             starData = starData + "*";
//         }
//         starData = starData + "\n";
//     }
//     return starData;
// }
//     console.log(leftTriangle(6))

// //-------------***********---------

// const reversLeftTriangle =(b:any)=>{
//     let starVal = "";
//     for(let i=0;i<4;i++){
//         for(let j=0; j<b-i;j++){
//             starVal = starVal + "*"
//         }
//         for (let k = 0; k < i; k++) {
//             starVal = starVal + " ";
//         }
//         starVal = starVal + "\n";
//     }
//      return starVal;
// }
//     console.log(reversLeftTriangle(4))


//-------------***************-----------

const triangle =(d:any)=>{
 let string ="";
    for(let i=1;i<4;i++){
        for(let j=0; j<d-i; j++){
            string =string + " "
        }
        for (let k = 0; k < 2 * i-1; k++) {
            string =string + "*";
        }
        string = string + "\n";
    }
     return string;
}
    console.log(triangle(3))

   

    // function createPascalTriangle(numRows) {
    //     var pascalTriangle = [];

    //     for (var i = 0; i < numRows; i++) {
    //         pascalTriangle[i] = new Array(i + 1);

    //         for (var j = 0; j < i + 1; j++) {
    //             if (j === 0 || j === i) {
    //                 pascalTriangle[i][j] = 1;
    //             } else {
    //                 pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
    //             }
    //         }
    //     }

    //     return pascalTriangle;
    // }

    // console.table(createPascalTriangle(6));


    return (
        <div>
            hii
           
        </div>
    )
}

export default Triangle;
