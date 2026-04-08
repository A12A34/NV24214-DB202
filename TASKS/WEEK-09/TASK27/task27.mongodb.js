// TASK 27

// Use database WEEK09
use("WEEK09");

// Reset collection TASK27
db.TASK27.drop();
db.createCollection("TASK27");

// Insert 5 documents
db.TASK27.insertMany([
  { NVNO: "001", NAME: "Kiran", MARKS: 95 },
  { NVNO: "002", NAME: "Naveen", MARKS: 88 },
  { NVNO: "003", NAME: "Asha", MARKS: 91 },
  { NVNO: "004", NAME: "Rahul", MARKS: 76 },
  { NVNO: "005", NAME: "Keerthi", MARKS: 99 }
]);

// Show all documents
db.TASK27.find();

// Find students with marks above 90
db.TASK27.find({ MARKS: { $gt: 90 } });

// Count how many students are above 90 marks
db.TASK27.countDocuments({ MARKS: { $gt: 90 } });
