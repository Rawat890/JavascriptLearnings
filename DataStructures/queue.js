class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
        this.maxCount = 7;
        this.currentCount = 0
    }

    enqueue(item) {
        if (this.rear === this.maxCount) {
            console.log("Queue cannot accept more elements");
            return;
        }

        this.items[this.rear] = item;
        this.rear++;
        console.log(`${item} has been added to queue\n`)
    }

    dequeue(item) {
        if (this.front === this.items.length) {
            console.log("Queue Underflow");
            return;
        }

        const removedItem = this.items[this.front];
        this.front++;
        console.log(`${removedItem} has been removed from queue\n`)
    }


    frontElement() {
        const frontElementValue = this.items[this.front];
        console.log(`${frontElementValue} is the first in queue`)
    }
}


const queue = new Queue();
queue.enqueue(12);
queue.enqueue(2);
queue.enqueue(27);
queue.enqueue(61);
queue.enqueue(14);

queue.frontElement();

queue.dequeue();
queue.dequeue();
queue.dequeue();
