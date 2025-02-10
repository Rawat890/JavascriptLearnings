class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
        this.maxCount = 7;
    }

    push(item) {
        if (this.count > this.maxCount - 1) {
            console.log("Stack Overflow")
            return;
        }
        this.items[this.count] = item;
        this.count++;
        console.log(`${item} is added to stack\n`)
    }

    pop() {
        if (this.count === 0) {
            console.log("Stack Underflow")
            return;
        }
        const removedItem = this.items[this.count - 1];
        this.count--;
        console.log(`${removedItem} is removed from stack\n`)

    }

    peek() {
        if (this.count === 0) {
            console.log("There is not peek element because the stack is empty\n")
            return;
        }

        const peekElement = this.items[this.count - 1];
        console.log(`${peekElement} is the peek element in stack\n`)
    }

    isEmpty() {
        if (this.count === 0) {
            return true;
        }
        return false;
    }

    clearStack() {
        console.log("Currently the stack has " + this.count + " elements\n")
        console.log("Clearing stack.....\n")
        setTimeout(() => {
            this.count = 0;
            console.log("Stack is cleared")
        }, 2000)
    }

    printStack() {
        for (let i = this.count - 1; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }
}

const stack = new Stack();
stack.push(12);
stack.push(45);
stack.push(42);

// stack.pop();

stack.peek();
console.log(stack.isEmpty())

console.log(stack)

stack.printStack();

stack.clearStack()

setTimeout(() => {
    stack.peek();
}, 3000)