// TASK 30

// Use database WEEK09
use("WEEK09");

// Reset collection TASK30
db.TASK30.drop();
db.createCollection("TASK30");

// Insert 10 documents
db.TASK30.insertMany([
  { NVNO: "001", NAME: "Kiran", MARKS: 75 },
  { NVNO: "002", NAME: "Asha", MARKS: 82 },
  { NVNO: "003", NAME: "Rahul", MARKS: 91 },
  { NVNO: "004", NAME: "Keerthi", MARKS: 99 },
  { NVNO: "005", NAME: "Meera", MARKS: 87 },
  { NVNO: "006", NAME: "John", MARKS: 68 },
  { NVNO: "007", NAME: "Kavya", MARKS: 95 },
  { NVNO: "008", NAME: "Naveen", MARKS: 100 },
  { NVNO: "009", NAME: "Arun", MARKS: 89 },
  { NVNO: "010", NAME: "Diya", MARKS: 80 }
]);

// Show all documents
db.TASK30.find();

// Find students with marks greater than 80 and less than 100, sorted descending
db.TASK30.find({
  $and: [
    { MARKS: { $gt: 80 } },
    { MARKS: { $lt: 100 } }
  ]
}).sort({ MARKS: -1 });
