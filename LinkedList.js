var Node = require('./Node').Node;

function LinkedList(){
	var head;
	this.addNodeAtEnd = function(data){
		var node = new Node();
		node.setData(data);
		node.setNext(null);
		if(head == null){
			head = node;
			return;
		}
		var currentNode = head;
		while(currentNode.getNext()!=null){
			currentNode = currentNode.getNext();
		}
		currentNode.setNext(node);
	};

	this.printList = function(){
		var currentNode = head;
		var dataArray = [];
		while(currentNode!=null){
			dataArray.push(currentNode.getData());
			currentNode = currentNode.getNext();
		}
		console.log(dataArray.join('-->'));
	};

	this.reverseList = function(){
		var prev = null;
		var currentNode = head;
		var next = currentNode.getNext();
		while(next!=null){
			currentNode.setNext(prev);
			prev = currentNode;
			currentNode = next;
			next = next.getNext();	
		}
			currentNode.setNext(prev);
			head = currentNode;															
	}

	this.findMiddleNode = function(){
		var prev = currentNode = head;	
		while(currentNode!=null){
			currentNode = currentNode.getNext();
			if(currentNode == null){
				console.log(prev.getData());
				return;	
			}
			currentNode = currentNode.getNext();
			prev = prev.getNext();
		}	

		console.log(prev.getData());
	}

}

exports.LinkedList = LinkedList;