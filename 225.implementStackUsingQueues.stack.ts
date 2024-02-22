/**
 * https://leetcode.com/problems/implement-stack-using-queues/description/
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 */

class MyStack {
  private data: any[] | null;
  constructor() {
      this.data = null;
  }

  push(x: number): void {
      this.data.push(x);
  }

  pop(): number {
      return this.data.pop();
  }

  top(): number {
      return this.data[this.data.length - 1];
  }

  empty(): boolean {
      if (this.data.length === 0) return true;
      return false;
  }
}


class MyQueue {
  queue;
  constructor() {
      this.queue = []
  }
  push(n: number) {
      this.queue.push(n)
  }
  peek(): (number | null) {
      return this.queue[0]
  }
  pop() {
      let r = this.peek();
      this.queue.shift()
      return r;
  }
  size() {
      return this.queue.length
  }
  isEmpth() {
      return this.queue.length == 0
  }
}


class MyStack2 {
  public Q;
  constructor() {
      this.Q = new MyQueue()
  }

  push(x: number): void {
      let l = this.Q.queue.length;
      this.Q.push(x)
      for(let i = 1; i <= l; i++) {
          let r = this.Q.pop();
          this.Q.push(r)
      }
  }

  pop(): number {
      return this.Q.pop()
  }

  top(): number {
      return this.Q.peek()
  }

  empty(): boolean {
      return this.Q.queue.length == 0
  }
}
