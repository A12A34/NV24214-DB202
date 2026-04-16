// TASK 34

// Use database WEEK10
use("WEEK10");

// Reset collection TASK34
db.TASK34.drop();
db.createCollection("TASK34");

// Insert 7 documents
db.TASK34.insertMany([
  { NVNO: "001", NAME: "Kiran", CLASS: "11AI", MARKS: 78 },
  { NVNO: "002", NAME: "Asha", CLASS: "11AI", MARKS: 84 },
  { NVNO: "003", NAME: "Rahul", CLASS: "11AI", MARKS: 92 },
  { NVNO: "004", NAME: "Meera", CLASS: "11CS", MARKS: 88 },
  { NVNO: "005", NAME: "Diya", CLASS: "11CS", MARKS: 94 },
  { NVNO: "006", NAME: "Naveen", CLASS: "11EC", MARKS: 81 },
  { NVNO: "007", NAME: "John", CLASS: "11EC", MARKS: 69 }
]);

// Show all documents
db.TASK34.find();

// Find the average marks of students in each class
// Show only class and average marks
// Display only classes where average marks is greater than 80
db.TASK34.aggregate([
  {
    $group: {
      _id: "$CLASS",
      AVERAGE_MARKS: { $avg: "$MARKS" }
    }
  },
  {
    $match: {
      AVERAGE_MARKS: { $gt: 80 }
    }
  },
  {
    $project: {
      _id: 0,
      CLASS: "$_id",
      AVERAGE_MARKS: 1
    }
  }
]);
