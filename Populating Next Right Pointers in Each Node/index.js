function TreeLinkNode(val){
    this.val = val;
    this.left = this.right = this.next = null;
}

var connect = function(root) {

    if(!root) {return;}

    var next;

    if(root.left){
        if(root.right){
            root.left.next = root.right;
        }else if(next = root.next){
            while(next){
                if(next.left){
                    root.left.next = next.left;
                    break;
                }else if(next.right){
                    root.left.next = next.right;
                    break;
                }else{
                    next = next.next;
                }
            }
        }

    }

    if(root.right && next = root.next){
        while(next){
            if(next.left){
                root.right.next = next.left;
                break;
            }else if(next.right){
                root.right.next = next.right;
                break;
            }else{
                next = next.next;
            }
        }

    }

    if(root.right){
        connect(root.right);
    }

    if(root.left){
        connect(root.left);
    }

};


var root = new TreeLinkNode(1);
root.left = new TreeLinkNode(2);
root.right = new TreeLinkNode(3);
connect(root);

console.log(root);
