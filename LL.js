var head;

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

function printData(){
    var n = head
            while(n != null){
                console.log(n.data+' ');
                n = n.next;
            }
        }
function insertfirst(data){
    var new_node = new Node(data);

    new_node.next = head;
    head = new_node;
}

//Since a Linked List is typically represented by the head of it, 
//-we have to traverse the list till the end and then change the next to last node to a new node.
function insertLast(data){ 
    
    var new_node = new Node(data);

    if(head == null) new_node = head;// if head is empty new node becomes head

    var last = head;

    while(last.next != null){
        last = last.next;
    }
    
    last.next = new_node;
    new_node.next = null;
}

function insertBefore(some_node,data){
    var new_node = new Node(data);
    var before = head;
    while(before.next != some_node)
    {
        before = before.next;
    }
    before.next = new_node;
    new_node.next = some_node;
    
}

function insertAfter(some_node, data){
    
    if(some_node == null){
        console.log('no previous data');
        return;
    }

    var new_node = new Node(data);
    
    new_node.next = some_node.next;
    some_node.next = new_node;

}

function removeNode(some_node){
    var prev = head;


    if(prev == some_node){
        head = prev.next;
        return;
       }

    while(prev.next != some_node){
        prev = prev.next;
    }

    prev.next = some_node.next;

}




var head = new Node(1);
var second = new Node(2);
var third = new Node(3);


head.next = second;
second.next = third;
insertfirst(4);
insertAfter(second,5);
insertLast(0);
insertBefore(third,6);

printData();
removeNode(head);
console.log('---------------')
printData();

// class linkedList{
//     constructor(head){
//         this.head = new Node(head);
//         this.size = 0;
//     }

//     insertData(value){
//         while(value != null){
//             value = value.next
//             this.size ++;
//         }

//     }

//     printData(){
//         while(this.head != null){
//             console.log(this.head.data+' ');
//             this.head = this.head.next;
//         }
//     }
// }