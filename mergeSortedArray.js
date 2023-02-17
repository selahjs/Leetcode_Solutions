function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    let new_node = new ListNode();
    const dummy = new_node;
    while(list1&&list2){
        if(list1.val < list2.val){
            new_node.next = list1;
            list1 = list1.next;
            //only list1 is incremented & list2 stays the same
        }
        else{
            new_node.next = list2;
            list2 = list2.next;
            //only list2 is incremented & list1 stays the same
        }
        new_node = new_node.next;

    }
    //at last the last node is compared with null so 
    if(list1) new_node.next = list1;
    if(list2) new_node.next = list2;
    return dummy.next;
};
list1 = [1,2,3];
list2 = [1,4,3,4]


console.log(mergeTwoLists(list1,list2));