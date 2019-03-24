const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		this.nodes=[];
	}

	push(data, priority) {
		var n=new Node(data, priority);
		this.insertNode(n);	
		this.shiftNodeUp(n);
	}

	pop() {
		if(this.root!=null){
		 var x=this.root.data;
		 var detached=new Node(null,null);		 
         detached=this.detachRoot();		 
		 if(this.parentNodes.length>0) {	 
			 this.restoreRootFromLastInsertedNode(detached);
		     this.shiftNodeDown(this.root);
		     }
		 return x;						
		}
	}

	detachRoot() {
		var x=new Node(null,null);
		x=this.root;
		if (this.parentNodes.indexOf(this.root)>=0) this.parentNodes.splice(this.parentNodes.indexOf(this.root),1);
		this.nodes.splice(this.nodes.indexOf(x),1);			
		if (this.parentNodes.indexOf(this.root)>=0) this.parentNodes.splice(this.parentNodes.indexOf(this.root),1);
		
		this.root=null;
		return x
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.nodes.length;
	}

	isEmpty() {
		if (this.parentNodes.length==0) return true;
		else return false;
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
		this.nodes=[];
	}

	insertNode(node) {
		if (this.isEmpty()) {
		 this.root=node;
         this.nodes.push(node);
		 this.parentNodes.push(node);
		}		
		 else {	
          this.nodes.push(node);
		  this.parentNodes.push(node);		 
		  this.parentNodes[0].appendChild(node);
		  if (this.parentNodes[0].right!=null) this.parentNodes.shift();
	    }	 
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
