// var mergeTwoLists = function(l1, l2) {
//     let result = "";

//     for(let p1 = 0,p2 = 0;;){
//         let value1 = l1[p1];
//         let value2 = l2[p2];
//         if(value1 && (value2 == undefined || value1 <= value2)){
//             result = result + value1.toString();
//             p1++;
//         }
//         else if(value2){
//             result = result + value2.toString();
//             p2++;
//         }

//         if(p1 >= l1.length && p2 >= l2.length){
//             return result;
//         }
//         else{
//             result = result + "->";
//         }
//     }
// };
var mergeTwoLists = function(l1, l2) {
    //let result = "";
    let result = [];

    for(let p1 = 0,p2 = 0;p1 < l1.length || p2 < l2.length;){
        let value1 = l1[p1];
        let value2 = l2[p2];

        if(value1 == undefined){
            result.push(value2)
            p2++;
        }
        else if(value2 == undefined){
            result.push(value1);
            p1++;
        }
        else if(value1 <= value2){
            result.push(value1);
            p1++;
        }
        else{
            result.push(value2);
            p2++;
        }
    }

    return result;
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))