const fs = require("fs");

// //3.1.1

// let GradeTable = {};
// GradeTable["A+"] = 4.33;
// GradeTable["A"] = 4.0;
// GradeTable["A-"] = 3.67;
// GradeTable["B+"] = 3.33;
// GradeTable["B"] = 3.0;
// GradeTable["B-"] = 2.67;
// GradeTable["C+"] = 2.33;
// GradeTable["C"] = 2.0;
// GradeTable["C-"] = 1.67;
// GradeTable["D+"] = 1.0;
// GradeTable["D"] = 1.0;
// GradeTable["D-"] = 1.0;
// GradeTable["F"] = 0.0;

// function returnAverageGPA(list) {
//   let count = 0;
//   list.forEach(cur => {
//     count += GradeTable[`${cur}`];
//   });
//   return count / list.length;
// }

// //3.1.2

// var ArrayST = function() {
//   this.storage = [];
//   this.get = key => {
//     let returnVal;
//     this.storage.forEach(cur => {
//       if (cur[0] === key) {
//         returnVal = cur[1];
//       }
//     });
//     return returnVal;
//   };
//   this.put = (key, value) => {
//     this.storage.push([key, value]);
//   };
// };

// let test = new ArrayST();
// test.put("a", 0);
// // console.log(test.get("a"));

// //3.1.3

// var OrderedSequentialSearchST = function() {
//   this.storage = null;
//   this.node = function(key, value) {
//     this.key = key;
//     this.value = value;
//     this.next = null;
//   };
//   this.get = function(key) {
//     let returnVal = "N/A";
//     let step = this.storage;
//     while (step) {
//       if (step.key === key) {
//         returnVal = step.value;
//       }
//       step = step.next;
//     }
//     console.log("RUNNING", returnVal);
//     return returnVal;
//   };
//   this.put = (key, value) => {
//     let newNode = new this.node(key, value);
//     var newStep = this.storage;

//     if (newStep === null) {
//       this.storage = newNode;
//     } else {
//       newNode.next = this.storage;
//       this.storage = newNode;
//     }
//   };
// };
// let newStorage = new OrderedSequentialSearchST();
// newStorage.put("a", 1);
// newStorage.put("b", 2);
// newStorage.put("c", 3);
// newStorage.put("d", 4);

// console.log(newStorage.get("c"));

//3.1.4

// 'Develop Time and Event ADTs that allow processing of data as in the example
// illustrated on page 367.

// Sedgewick, Robert. Algorithms (p. 389). Pearson Education. Kindle Edition. '

// let TimeTable = function() {
//   this.storage = {};
//   this.put = (key, value) => {
//     key = JSON.stringify(key);
//     this.storage[key] = value;
//   };
//   this.get = key => {
//     key = JSON.stringify(key);
//     return this.storage[key];
//   };
// };

//3.1.5
// function createLinkedList() {
//   let newList = null;
//   newList = new node(1, "a");
//   newList.next = new node(2, "b");
//   newList.next.next = new node(3, "c");
//   return newList;
// }
// let node = function(value, key, next) {
//   this.value = value;
//   this.key = key;
//   this.next = null;
// };
// function LinkedList() {
//   this.storage = createLinkedList();
//   this.size = () => {
//     let count = 0;
//     let step = this.storage;
//     while (step) {
//       count++;
//       step = step.next;
//     }
//     return count;
//   };
//   this.delete = key => {
//     let step = this.storage;
//     while (step) {
//       if (step.next && step.next.key === key) {
//         step.next = step.next.next;
//       } else {
//         step = step.next;
//       }
//     }
//   };
//   this.keys = () => {
//     let array = [];
//     let step = this.storage;
//     while (step) {
//       array.push(step.key);
//       step = step.next;
//     }
//     return array;
//   };
// }
// let testList = new LinkedList();
// console.log(testList.size());
// testList.delete("b");
// console.log(testList.size());
// console.log(testList.keys());

//3.1.6

let frequencyCounter = function () {
  this.storage = {};
  this.put = key => {
    if (this.storage[key]) {
      this.storage[key]++;
    } else {
      this.storage[key] = 1;
    }
  };
  this.get = () => { };
};
frequencyCounter = new frequencyCounter();

fs.readFile("tale.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  data.split("\n").forEach(cur => {
    cur.split(' ').forEach(cur1 => {
      if (cur1.length >= 10) {
        frequencyCounter.put(cur1);
      }
    })
  });
  console.log(frequencyCounter.storage);
});
//3.1.7
//3.1.8
//3.1.9
