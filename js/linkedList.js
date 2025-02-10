import Node from "./node.js";

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        let newNode = new Node(data);
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

    prepend(data) {
        let newNode = new Node(data);
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

    at(index) {
        let current = this.head;
        let i = 0;
        if(!current) {
            return null;
        }
        while(current) {
            if(i === index) {
                return current;
            } else {
                i++;
                current = current.next;
            }
        }
        return null;
    }

    pop(data) {
        if(this.head === null) {
            return;
        }
        let current = this.head;
        if(current.value === data) {
            this.head = current.next;
            return;
        }
        while(current.next) {
            if(current.next.value === data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        return current;
    }

    contains(data) {
        if(!this.head) {
            return false;
        } 
        let current = this.head;
        while(current) {
            if(current.value === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(data) {
        if(!this.head) return;
        let current = this.head;
        let index = 0;
        while(current) {
            if(current.value === data) {
                return index;
            } else {
                index++;
                current = current.next;
            }
        }
        return null;
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

export default LinkedList;