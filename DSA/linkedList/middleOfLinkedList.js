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

// whithout using extra space

var middleNode = function(head) {
    let pointer1 = head;
    let pointer2 = head
    while(pointer2!==null && pointer2.next!==null){
        pointer2 = pointer2.next.next ;
        pointer1 = pointer1.next;
    }
    return pointer1;
  };