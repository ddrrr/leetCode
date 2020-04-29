var addTwoNumbers = function(l1, l2) {
    let add = 0;
    let result = {};
    while(l1||l2){
        let v1 = l1.value?l1.value:0;
        let v2 = l2.value?l2.value:0;
        let p = result;

        p.value = v1 + v2 + add;
        if(p.value>= 10){
            p.value -= 10;
            add = 1;
        }
        else{
            add = 0;
        }

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        p = p.next; 
    }

    return result;
};

console.log(addTwoNumbers([2,4,3],[5,6,4]));