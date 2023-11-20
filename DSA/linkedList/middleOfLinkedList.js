// find middle element of linked list in one iteration

var middleNode = function(head) {
    const map =new Map();
    let curr = head;
    let count =0;
    while(curr!==null){
        count++;
        map.set(count,curr)
        curr = curr.next;
    }
    if(count%2==0){
        return map.get((count/2)+1);
    }
    return map.get((count+1)/2)
};