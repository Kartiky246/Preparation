// merge two sorted linked list

var mergeTwoLists = function(list1, list2) {
    let dummyNode = new Node(0);
    let l1 = list1;
    let l2 =list2;
    let current = dummyNode;
    while(l1!==null && l2!==null){
        if(l1.val<l2.val){
            current.next = l1;
            l1 = l1.next;
        }
        else{
            current.next =l2;
            l2 = l2.next
        }
        current = current.next;
    }
 
    if(l1!==null){
        current.next = l1;
        
    }
    if(l2!==null){
        current.next = l2;
    }
    return dummyNode.next;
 
 };
 
 class Node{
     constructor(data){
         this.val=data;
         this.next = null;;
     }
 }
 