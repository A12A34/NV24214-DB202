// TASK 29

// Use database WEEK09
use("WEEK09");

// Reset collection TASK29
db.TASK29.drop();
db.createCollection("TASK29");

// Insert 5 documents
db.TASK29.insertMany([
  { NVNO: "001", NAME: "Kiran", MARKS: 92 },
  { NVNO: "002", NAME: "Kavya", MARKS: 87 },
  { NVNO: "003", NAME: "Naveen", MARKS: 90 },
  { NVNO: "004", NAME: "Keerthi", MARKS: 84 },
  { NVNO: "005", NAME: "Kunal", MARKS: 96 }
]);

// Show all documents
db.TASK29.find();

// Find students with marks greater than 85 and names starting with K
db.TASK29.find({
  $and: [
    { MARKS: { $gt: 85 } },
    { NAME: { $regex: "^K" } }
  ]
});
