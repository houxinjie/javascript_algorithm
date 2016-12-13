class MaxHeap{
    constructor(data){
        this.data = data;
    }
    insert(value){
        this.data.push(value);
        this._filterup(this.data.length - 1);
    }
    _filterup(current_index){
        if(!current_index) {
            current_index = this.data.length - 1;
        }
        let parent_index = Math.floor((current_index - 1) / 2);
        let current = this.data[current_index];

        while(current_index > 0){
            if(this.data[parent_index] > current) {
                break;
            } else {
                this.data[current_index] = this.data[parent_index];
                current_index = parent_index;
                parent_index = Math.floor((parent_index - 1) / 2);
            }
        }
        this.data[current_index] = current;
    }

    _filterdown(current_index){
        let child_index = current_index * 2 + 1;
        let current = this.data[current_index];
        while(child_index <= this.data.length - 1) {
            if(child_index < this.data.length - 1 && this.data[child_index] < this.data[child_index+1]){
                child_index++;
            }
            if(current >= this.data[child_index]){
                break;
            } else {
                this.data[current_index] = this.data[child_index];
                current_index = child_index;
                child_index = child_index * 2 + 1;
            }
        }
        this.data[current_index] = current;
    }

    remove(data){
        if(!this.data.length) return -1;

        let index = this.data.indexOf(data);

        if(index === -1) return -1;

        let last = this.data.pop();

        if(index !== this.data.length) {
            this.data[index] = last;
            this._filterdown(index);
        }
        return 0;
    }

    print(){
        console.log(this.data);
    }
}


let heap = new MaxHeap([90,80,70,60,40,30,20,10,50]);
heap.print();
heap.insert(85);
heap.print();
heap.remove(60);
heap.print();
