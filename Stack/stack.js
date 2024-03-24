class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // remove element to the top of the stack
  pop() {
    if (!this.isEmpty()) {
      this.items.pop();
    } else {
      console.log(`stack is underflow !`);
    }
  }

  isEmpty() {
    return this.items.length == 0;
  }
  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Print the elements of the stack
  print() {
    console.log(this.items.toString());
  }
}


const st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.print();

