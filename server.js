var LinkedList = require('./LinkedList');
console.log(LinkedList);
var http = require('http');
var server = http.createServer(function(req,res){

});

server.listen(3000);
console.log('server is listening');

var listObj = new LinkedList.LinkedList();
listObj.addNodeAtEnd(2);
listObj.addNodeAtEnd(3);
listObj.addNodeAtEnd(4);
listObj.addNodeAtEnd(5);
listObj.addNodeAtEnd(6);
listObj.addNodeAtEnd(7);
listObj.addNodeAtEnd(8);
listObj.addNodeAtEnd(9);

listObj.reverseList();
listObj.reverseList();
listObj.printList();
listObj.findMiddleNode();