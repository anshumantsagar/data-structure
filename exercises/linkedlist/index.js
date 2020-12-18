// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        if (this.head) {
            let data = this.head;
            count = 1;
            while (data.next) {
                data = data.next
                count++;
            }
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        // if (!this.head) {
        //     return null;
        // }

        let data = this.head;
        while (data.next) {
            data = data.next;
        }
        if (!data.next) {
            return data;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        } else {
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let data = this.head;
        while (data.next.next) {
            data = data.next;
        }
        if (!data.next.next) {
            data.next = null
        }
    }

    insertLast(data) {
        const last = this.getLast();
        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

}

module.exports = { Node, LinkedList };
