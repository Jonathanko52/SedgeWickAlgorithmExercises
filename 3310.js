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
