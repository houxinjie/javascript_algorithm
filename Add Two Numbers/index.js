var addTwoNumbers = function(l1, l2, add) {
    var val = l1.val + l2.val + (add ? 1 : 0);
    var node;
    if(val > 9){
        node = new ListNode(val - 10);
        add = true;
    }else{
        node = new ListNode(val);
        add = false;
    }

    node.next = addTwoNumbers(l1.next, l2.next, add);
    return node;
};
