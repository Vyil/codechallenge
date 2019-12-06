var intArray = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 1, 19, 1, 19, 5, 23, 2, 10, 23, 27, 2, 27, 13, 31, 1, 10, 31, 35, 1, 35, 9, 39, 2, 39, 13, 43, 1, 43, 5, 47, 1, 47, 6, 51, 2, 6, 51, 55, 1, 5, 55, 59, 2, 9, 59, 63, 2, 6, 63, 67, 1, 13, 67, 71, 1, 9, 71, 75, 2, 13, 75, 79, 1, 79, 10, 83, 2, 83, 9, 87, 1, 5, 87, 91, 2, 91, 6, 95, 2, 13, 95, 99, 1, 99, 5, 103, 1, 103, 2, 107, 1, 107, 10, 0, 99, 2, 0, 14, 0]
// for(var i=0 ; i<intArray.length-1; i+=4){

//     if(intArray[i] == 1){
//         console.log('Pos is 1')
//         var posA = intArray[i+1];
//         var posB = intArray[i+2];
//         var posC = intArray[i+3];

//         intArray[posC] = intArray[posA] + intArray[posB]

//         // intArray[i] = (intArray[posA] + intArray[posB])

//     } else if(intArray[i] == 2){
//         console.log('Pos is 2')
//         var posA = intArray[i+1];
//         var posB = intArray[i+2];
//         var posC = intArray[i+3];
//         // intArray[i+3] = intArray[posA] * intArray[posB]

//         // intArray[i] = (intArray[posA] * intArray[posB])
//         intArray[posC] = intArray[posA] * intArray[posB]
//     } else if (intArray[i] == 99){
//         console.log('Pos is 99')
//         console.log(intArray[0])
//         break;
//     } else {
//         console.log('else')
//     }
// }
var goal = 19690720;

function initLoops(){
    for (var k = 0; k < 100; k++) {
        for (var l = 0; l < 100; l++) {
            loopArray(k,l)
        }
    }
}

function loopArray(noun,verb){
    var clonedArray = intArray.slice();
    clonedArray[1] = noun;
    clonedArray[2] = verb;

    var initPos = 0;

    while(clonedArray[initPos] != 99){

        var posA = clonedArray[initPos + 1];
        var posB = clonedArray[initPos + 2];
        var posC = clonedArray[initPos + 3];

        if (clonedArray[initPos] == 1) {
            // console.log('Pos is 1')

            clonedArray[posC] = clonedArray[posA] + clonedArray[posB]

        } else if (clonedArray[initPos] == 2) {
            // console.log('Pos is 2')

            clonedArray[posC] = clonedArray[posA] * clonedArray[posB]
        }
        initPos +=4;

    }
    if (clonedArray[0]==goal) {
        console.log('RESULT:\n')
        console.log((100 * noun) + verb)
        return;
    }

}

initLoops()

