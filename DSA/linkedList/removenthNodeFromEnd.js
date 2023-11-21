var removeNthFromEnd = function(head, n) {
    let dummy = new Node(0);
    let p1 = dummy;
    p1.next = head;
    let p2;
    let curr = head;
    let i =1;
    while(i<=n){
        curr = curr.next;
        i++;
    }
    p2 = curr;
    let node = dummy;
    while(node!==null && p2!==null){
        p2=p2.next;
        p1=p1.next;
        node =node.next;
    }
    p1.next = p1.next.next
    return dummy.next
   
};

class Node{
    constructor(data){
        this.val = data;
        this.next=null
    }
}