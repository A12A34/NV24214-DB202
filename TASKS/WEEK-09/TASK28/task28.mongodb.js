// TASK 28

// Use database WEEK09
use("WEEK09");

// Reset collection TASK28
db.TASK28.drop();
db.createCollection("TASK28");

// Insert 7 documents
db.TASK28.insertMany([
  { NVNO: "001", NAME: "Kiran", MARKS: 78 },
  { NVNO: "002", NAME: "Nisha", MARKS: 82 },
  { NVNO: "003", NAME: "Arun", MARKS: 94 },
  { NVNO: "004", NAME: "Keerthi", MARKS: 96 },
  { NVNO: "005", NAME: "Rahul", MARKS: 88 },
  { NVNO: "006", NAME: "Meera", MARKS: 91 },
  { NVNO: "007", NAME: "John", MARKS: 67 }
]);

// Show all documents
db.TASK28.find();

// Find students with marks greater than 80 and less than 95
db.TASK28.find({
  $and: [
    { MARKS: { $gt: 80 } },
    { MARKS: { $lt: 95 } }
  ]
});
