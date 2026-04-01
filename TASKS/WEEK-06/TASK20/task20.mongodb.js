// TASK 20

// Use database WEEK06
use("WEEK06");

// Create collection TASK20 and insert 3 records
db.TASK20.insertMany([
  { nvno: "01", name: "abc", phoneno: "123", BusNo: "3", Marks: 80 },
  { nvno: "02", name: "def", phoneno: "456", BusNo: "3", Marks: 85 },
  { nvno: "03", name: "ghi", phoneno: "789", BusNo: "2", Marks: 90 }
]);

// Search for all documents
db.TASK20.find();

// Update all documents to increase 5 Marks
db.TASK20.updateMany({}, { $inc: { Marks: 5 } });

// Search for all documents
db.TASK20.find();
