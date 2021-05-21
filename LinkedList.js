class Node {
	constructor(data, next = null) { // data and pointer
		this.data = data;
		this.next = next;
	}
}


class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}


//Insert first node
insertFirst(data) {
 	this.head = new Node(data, this.head); // head
 	this.size++;
 }

//Insert last node 
insertLast(data) {
	let node = new Node(data);
	let current;

	//if empty, make head
	if(!this.head) {
		this.head = node;
	} else {
		current = this.head;

		while(current.next) { // traverse thru list
			current = current.next;
		}

		current.next = node; // add node to the end
	}

	this.size++; //increments the size

}


//Insert at index
insertAt(data, index) {
	// if index out of range
	if(index > 0 && index > this.size) {
		return;
	}




//if first index
	if(index === 0) {
		this.head = new Node(data, this.head);
		return;	
	}

	const node = new Node(data);
	let current, previous;

	//Set current to first
	current = this.head;
	let count = 0;

	while(count < index) {
		previous = current; // Node before index
		count++;
		current = current.next; // Node after index
	}

	node.next = current;
	previous.next = node;


	this.size++;

}

// Get at index

getAt(index) {
	let current = this.head;
	let count = 0;

	while(current) {
		if(count == index) {
			console.log(current.data); // gets the data
		}
		count++; // increment counter
		current = current.next; 
	}
	return null;
}

  //Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

//Clear list
clearList() {
	this.head = null;
	this.size = 0;
}


 // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100); // only one node
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400)
ll.insertAt(500, 2);
ll.removeAt(2);
ll.clearList();
ll.printListData(); // prints the data of the nodes


//ll.getAt(2);
// console.log(ll);