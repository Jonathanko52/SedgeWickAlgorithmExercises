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

// function frequencyCounter(lengthCutoff) {
//   this.data
//   this.lengthCutoff = lengthCutoff;
//   this.storage = {};
//   this.lastInserted = ''
//   this.priorInsertedCount = 0
//   this.put = key => {
//     if (key.length >= this.lengthCutoff)
//       if (this.storage[key]) {
//         this.storage[key]++;
//       } else {
//         this.storage[key] = 1;
//       }
//   };
//   this.get = () => {
//     fs.readFile("tale.txt", "utf8", (err, data) => {
//       if (err) {
//         throw err;
//       }
//       data.split("\n").forEach(cur => {
//         cur.split(' ').forEach(cur1 => {
//           this.put(cur1);
//         })
//       });

//       for (keys in this.storage) {
//         if (this.longestCount < this.storage[keys]) {
//           this.longestCount = this.storage[keys]
//           this.longestWord = keys
//         }
//       };
//       console.log(this.longestCount)
//       console.log(this.longestWord)
//     });
//   }
//   this.longestWord = 'test'
//   this.longestCount = Math.max()
// }

// frequencyCounter10 = new frequencyCounter();

// //3.1.7
// //3.1.8
// frequencyCounter10 = new frequencyCounter(10);
// frequencyCounter10.get()

// //3.1.9;

// frequencyCounter1 = new frequencyCounter(1);
// frequencyCounter1.get()
// frequencyCounter8 = new frequencyCounter(8);
// frequencyCounter8.get()

// 3.1.12

function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );

}
function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex][1] < right[rightIndex][1]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

let BinarySearchST = function () {
  this.storage = [];
  this.put = (key, value) => {
    let alreadyInStorage = false
    this.storage.forEach((cur) => {
      if (cur[0] === key) {
        cur[1] = value
        alreadyInStorage = true;
      }
    })
    if (!alreadyInStorage) {
      this.storage.push([key, value])
    }
    this.storage = mergeSort(this.storage)
  }
  this.get = (key) => {
    let returnVal = 'invalid'
    this.storage.forEach((cur) => {
      if (cur[0] === key) {
        returnVal = cur[1]
      }
    })
    return returnVal
  }
}

let newBinarySearchST = new BinarySearchST
newBinarySearchST.put('one', 1)
newBinarySearchST.put('two', 2)
newBinarySearchST.put('five', 5)
newBinarySearchST.put('three', 3)


//3.1.13

//3.1.16

BinarySearchST.prototype.delete = function (key) {
  this.storage.forEach((cur, ind) => {
    if (cur[0] === key) {
      this.storage.splice(ind, 1)
    }
  })
}
newBinarySearchST.delete('three')
console.log(newBinarySearchST.storage)

// //3.1.17
// BinarySearchST.prototype.floor

// //3.1.18
// BinarySearchST.prototype.rank

