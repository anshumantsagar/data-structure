// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    add(record) {
        this.stackA.push(record);
    }

    remove() {
        while (this.stackA.peek()) {
            this.stackB.push(this.stackA.pop());
        }
        const a = this.stackB.pop();
        while (this.stackB.peek()) {
            this.stackA.push(this.stackB.pop());
        }
        return a;
    }

    peek() {
        let a = null;
        while (this.stackA.peek()) {
            this.stackB.push(this.stackA.pop());
        }
        a = this.stackB.peek();
        while (this.stackB.peek()) {
            this.stackA.push(this.stackB.pop());
        }
        return a;
    }
}

module.exports = Queue;

// class Queue {
//     constructor() {
//         this.stackA = new Stack();
//         this.stackB = new Stack();
//     }

//     add(record) {
//         this.stackA.push(record);
//     }

//     remove() {
//         while (this.stackA.peek()) {
//             this.stackB.push(this.stackA.peek());
//             this.stackA.pop();
//             //alternatively we can write this as 
//             //this.stackB.push(this.stackA.pop());
//         }
//         const a = this.stackB.pop();
//         while (this.stackB.peek()) {
//             this.stackA.push(this.stackB.peek());
//             this.stackB.pop();
//         }
//         return a;
//     }

//     peek() {
//         let a = null;
//         while (this.stackA.peek()) {
//             this.stackB.push(this.stackA.peek());
//             this.stackA.pop();
//         }
//         a = this.stackB.peek();
//         while (this.stackB.peek()) {
//             this.stackA.push(this.stackB.peek());
//             this.stackB.pop();
//         }
//         return a;
//     }
// }