/** Node: node for a singly linked list. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */
class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
    }
    else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.tail = node;
    }
    else {
      node.next = this.head;
    }
    this.head = node;
    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    if (this.tail === null) {
      return (null);
    }

    let node = this.head;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return (node.val);
    }

    while (node.next !== null) {
      this.tail = node;
      node = node.next;
    }
    this.tail.next = null;

    this.length--;
    return (node.val);
  }

  /** shift(): return & remove first item. */
  shift() {
    if (this.head === null) {
      return (null);
    }

    let node = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return (node.val);
    }

    this.head = node.next;
    this.length--;
    return (node.val);
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (this.head === null) {
      return (null);
    }

    let node = this.head;
    while (idx > 0) {
      if (node.next === null) {
        return (null);
      }
      node = node.next;
      idx--;
    }
    return (node.val);
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (this.head === null) {
      return;
    }

    let node = this.head;
    while (idx > 0) {
      if (node.next === null) {
        return (null);
      }
      node = node.next;
      idx--;
    }
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    const node = new Node(val);

    if (idx === 0) {
      node.next = this.head;
      if (this.head === null) {
        this.tail = node;
      }
      this.head = node;
      this.length++;
      return;
    }

    if (this.head === null) {
      return;
    }

    let next = this.head;
    while (idx > 1) {
      if (next === null) {
        return;
      }
      next = next.next;
      idx--;
    }
    node.next = next.next;
    if (node.next === null) {
      this.tail = node
    }
    next.next = node;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {
    if (this.head === null) {
      return;
    }

    let node = this.head;
    if (idx === 0) {
      this.head = node.next;
      if (this.tail === node) {
        this.tail = null;
      }
      this.length--;
      return (node);
    }

    while (idx > 1) {
      if (node.next === null) {
        return (null);
      }
      next = next.next;
      idx--;
    }

    node.next = next.next;
    next.next = node;
    this.length++;
    return (node);
  }

  /** average(): return an average of all values in the list */
  average() {
    if (this.head === null) {
      return (0);
    }

    let node = this.head;
    let values = node.val;
    let count = 1;

    while (node.next !== null) {
      node = node.next;
      values += node.val;
      count++;
    }

    return (values/count);
  }
}

module.exports = LinkedList;
