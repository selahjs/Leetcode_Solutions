class Node{
    constructor(value){
        this.value  = value;
        this.next = null
    }
}

//alwasy check if the list is empty before adding new element to the list
//if list is empty make the new list the head and return
class singlyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null
        this.size = 0;
    }

    //Insert first node
    insertFirst(value){
        const new_node = new Node(value);
        if(!this.head){
            this.head = new_node
            this.tail = new_node
        }
        else{
            new_node.next = this.head
            this.head = new_node
        }
        
        this.size+=1;
    }

    //Inser last node
    insertLast(value){
        const new_node = new Node(value);
        if(!this.head) this.head = new_node
        var current = this.head
        while(current.next){
            current = current.next
        }
        current.next = new_node;
        new_node.next = null
        this.tail = new_node
        this.size+=1;
    }

    printListData(){
        var current = this.head;
        var all = {}
        while(current){
            all[current.value] = current.value
            current = current.next;
        }
        return all
    }

    insertAfter(pointer, value){
        const new_node = new Node(value);
        var current = this.head
        while(current.value != pointer){
            current = current.next
        }
        new_node.next = current.next
        current.next = new_node
        this.size+=1
    }
    pop(value){
        if(this.head.value == value){
            this.head = null
            return
        }
        var current = this.head
        while(current.data != value){
            current = current.next
        }
        current
    }
}

const ll = new singlyLinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertLast(500);
ll.insertAfter(300,600)
console.log(ll.printListData());
console.log(ll.size)