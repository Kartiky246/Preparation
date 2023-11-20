
//create linkedlist in js

//class to create a single node
 class Node{
    constructor(data){
        this.data=data;
        this.next = null; // initially the node is not pointing anywhere
    }
 }

 class linkedlist{
    constructor(){
        this.head = null; // head is the starting node of linkedlist, initally it will point to null
    }


    // code to connect node to linked list 

    append(data){

       const newNode = new Node(data);


        // if linkedlist is not made yet, make this node as head
        if(this.head===null){
            this.head = newNode;
            return
        }

        // if linkedlist is made connect this newNode to tail
        let currNode = this.head;
        while(currNode.next!==null){
            currNode = currNode.next;
        }
        currNode.next = newNode;

    }

    //method to view the linkedList of this class

    display(){
        let currNode = this.head;
        console.log(currNode)
        while(currNode?.next!==null){
            console.log(currNode);
            currNode = currNode?.next;
        }
    }


 }

 const l = new linkedlist();

 l.append(5);
 l.append(6);
 l.append(7);
 l.append(8);
 l.display()