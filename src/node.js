class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(this.left === null){
			this.left = node;
			node.parent = this;
		}
		else if(this.right === null && this.left !== null){
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if(node === this.left){
			this.left.parent = null;
			this.left = null;
		}
		else if(node === this.right){
			this.right.parent = null;
			this.right = null;
		}
		else throw new Error('node is not a child');
		
	}

	remove() {
		if (this.parent !== null) this.parent.removeChild(this);
	}

	swapWithParent() {
		if(this.parent !== null){
			var buffer = new Node(null, null);
			this.buffer = appendChild(this);
			parent.appendChild(this);
			this = this.parent;
			this.parent = this.buffer;
		}
	}
}

module.exports = Node;
