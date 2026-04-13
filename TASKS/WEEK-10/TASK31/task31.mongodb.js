// TASK 31

// Use database WEEK10
use("WEEK10");

// Reset collection TASK31
db.TASK31.drop();
db.createCollection("TASK31");

// Insert 5 documents
db.TASK31.insertMany([
  { NVNO: "001", NAME: "Kiran", MARKS: 88 },
  { NVNO: "002", NAME: "Asha", MARKS: 93 },
  { NVNO: "003", NAME: "Rahul", MARKS: 97 },
  { NVNO: "004", NAME: "Meera", MARKS: 85 },
  { NVNO: "005", NAME: "Diya", MARKS: 91 }
]);

// Show all documents
db.TASK31.find();

// Find students whose marks are greater than 90
db.TASK31.find({
  $where: "this.MARKS > 90"
});
