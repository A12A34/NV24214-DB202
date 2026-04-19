// TASK 35

// Use database WEEK10
use("WEEK10");

// Reset collection TASK35
db.TASK35.drop();
db.createCollection("TASK35");

// Insert 5 documents
db.TASK35.insertMany([
  { name: "A", marks: 85, class: "10A" },
  { name: "B", marks: 60, class: "10A" },
  { name: "C", marks: 75, class: "10B" },
  { name: "D", marks: 50, class: "10B" },
  { name: "E", marks: 90, class: "10A" }
]);

// Show all documents
db.TASK35.find();

// Calculate the average marks of each class
db.TASK35.aggregate([
  {
    $group: {
      _id: "$class",
      avgMarks: { $avg: "$marks" }
    }
  },
  {
    $project: {
      _id: 0,
      class: "$_id",
      avgMarks: 1
    }
  }
]);
