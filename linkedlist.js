var Node = require('./Node');

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

}

exports.LinkedList = LinkedList;