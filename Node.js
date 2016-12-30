function Node(){
	var data,next;
	this.getData = function(){
		return data;
	};

	this.setData = function(d){
		data = d;
	}

	this.getNext = function(){
		return next;
	};

	this.setNext = function(node){
		next = node;
	};
}

exports.Node = Node;