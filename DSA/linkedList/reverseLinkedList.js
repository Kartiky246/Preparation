// give a head of linkedlist, reversed it and return the head of reversed one


const reverseLinkedList =(head) =>{

    let previous = null;
    let current = head;
    while(current!==null){
        const temp = current.next;
        current.next = previous;
        previous=current;
        current = temp
    }
    return previous

}