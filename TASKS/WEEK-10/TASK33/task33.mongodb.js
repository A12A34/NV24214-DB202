// TASK 33

// Use database WEEK10
use("WEEK10");

// Reset collection TASK33
db.TASK33.drop();
db.createCollection("TASK33");

// Insert 7 documents
db.TASK33.insertMany([
  { NVNO: "001", NAME: "Kiran", CLASS: "11AI", MARKS: 78 },
  { NVNO: "002", NAME: "Asha", CLASS: "11AI", MARKS: 84 },
  { NVNO: "003", NAME: "Rahul", CLASS: "11AI", MARKS: 92 },
  { NVNO: "004", NAME: "Meera", CLASS: "11CS", MARKS: 88 },
  { NVNO: "005", NAME: "Diya", CLASS: "11AI", MARKS: 96 },
  { NVNO: "006", NAME: "Naveen", CLASS: "11EC", MARKS: 81 },
  { NVNO: "007", NAME: "John", CLASS: "11AI", MARKS: 69 }
]);

// Show all documents
db.TASK33.find();

// 1) Find all students whose marks are greater than 80
db.TASK33.aggregate([
  {
    $match: { MARKS: { $gt: 80 } }
  }
]);

// 2) Group students from class 11AI and count students who got greater than 80
db.TASK33.aggregate([
  {
    $match: {
      CLASS: "11AI",
      MARKS: { $gt: 80 }
    }
  },
  {
    $group: {
      _id: "$CLASS",
      STUDENT_COUNT: { $sum: 1 }
    }
  }
]);
