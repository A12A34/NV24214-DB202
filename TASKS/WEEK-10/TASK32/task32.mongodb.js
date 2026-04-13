// TASK 32

// Use database WEEK10
use("WEEK10");

// Reset collection TASK32
db.TASK32.drop();
db.createCollection("TASK32");

// Insert 7 documents
db.TASK32.insertMany([
  { NVNO: "001", NAME: "Kiran", MARKS: 78 },
  { NVNO: "002", NAME: "Asha", MARKS: 84 },
  { NVNO: "003", NAME: "Rahul", MARKS: 92 },
  { NVNO: "004", NAME: "Meera", MARKS: 88 },
  { NVNO: "005", NAME: "Diya", MARKS: 96 },
  { NVNO: "006", NAME: "Naveen", MARKS: 81 },
  { NVNO: "007", NAME: "John", MARKS: 69 }
]);

// Show all documents
db.TASK32.find();

// Find students whose marks are between 80 and 95
db.TASK32.find({
  $where: "this.MARKS > 80 && this.MARKS < 95"
});
