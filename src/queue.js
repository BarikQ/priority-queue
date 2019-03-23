const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		if(maxSize != null) this.maxSize = maxSize;
		// else this.maxSize = 30;
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		if(this.heap !== null) this.heap.push(data, priority);
	}

	shift() {
		this.heap.pop();
	}

	size() {
		
	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
