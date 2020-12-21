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
        if (!this.head) {
            return null;
        }

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

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        } else if (index === 0) {
            if (this.head.next) {
                return this.head = this.head.next;
            } else {
                return this.head = null;
            }
        }
        const previous = this.getAt(index - 1);
        const next = this.getAt(index + 1);
        return previous.next = next;
    }

    insertAt(data, index) {
        if (!this.head) {
            return this.head = new Node(data);
        } else if (index === 0) {
            if (this.head.next) {
                const previous = this.head;
                this.head = new Node(data);
                return this.head.next = previous
            } else {
                return this.head.next = new Node(data);
            }
        }
        if (!this.getAt(index) || !this.getAt(index).next) {
            const last = this.getLast();
            return last.next = new Node(data);
        }
        const previous = this.getAt(index - 1);
        const next = this.getAt(index);
        previous.next = new Node(data);
        previous.next.next = next;
        return previous;
    }

}

module.exports = { Node, LinkedList };
