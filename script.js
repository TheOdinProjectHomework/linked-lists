console.log("Hello Linked Lists!");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// const node1 = new Node("cris");
// console.log(node1.value);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(element) {
        let newNode = new Node(element);
        let current;
        if (this.head === null) {
            this.head = newNode;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    prepend(element) {
        let newNode = new Node(element);
        let current;
        if(this.head === null) {
            this.head = newNode;
        } else {
            current = this.head;
            this.head = newNode;
            this.head.next = current;
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        let current = this.head;
        if (current === null) {
            return null;
        } else {
            while (current.next !== null) {
                current = current.next;
            }
            return current;
        }
    }

    toString() {
        let current = this.head;
        let str = "";
        while(current) {
            str += `( ${current.value} ) -> `;
            current = current.next;
        }
        console.log(str += ` null `);
    }
}

let ll = new LinkedList();
ll.append('one');
console.log(ll.head);
ll.prepend('two');
ll.prepend('three');
ll.append('four');
console.log(ll.size);
ll.toString();
console.log(ll.head);
console.log(ll.tail());