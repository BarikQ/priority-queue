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
		if(node==this.left) {
			this.left.parent=null;
			this.left=null;
			}
		else if(node==this.right){ 
			  this.right.parent=null;
			  this.right=null;	       
			  }
			 else throw new Error('Not a child');
	   }

	remove() {
		if (this.parent !== null) this.parent.removeChild(this);
	}

	swapWithParent() {
		if (this.parent!=null){
			var buf=new Node(null,null);
			if (this.parent.parent!=null) {	
			 if (this.parent.parent.left==this.parent) this.parent.parent.left=this;
			 else this.parent.parent.right=this;
			 			
			}
					
		    if (this.left!=null) this.left.parent=this.parent;							
			if (this.right!=null) this.right.parent=this.parent;
			
			if (this.parent.left==this) {
				
				buf=this.parent.right;
				
				this.parent.left=this.left;
				this.parent.right=this.right;
				this.left=this.parent;							
				this.right=buf;
				this.parent=this.parent.parent;
				this.left.parent=this;	
				if (buf!=null) this.right.parent=this;
			}
			else if(this.parent.right==this)
				{
				buf=this.parent.left;
				
                this.parent.left=this.left;
				this.parent.right=this.right;
				this.right=this.parent;
				this.parent=this.parent.parent;
				this.right.parent=this;
				this.left=buf;
				this.left.parent=this;						
			}
			
			
		}
	}
}

module.exports = Node;
