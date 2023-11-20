// give a linkedlist head write a method which will return return if there is a loop in linkedlist else false


var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast!==null&&fast.next!==null){
        slow=slow.next;
        fast = fast.next.next;
        if(slow===fast) return true
    }
    return false
};

// it can be solve in O(n) Space by using hash map also