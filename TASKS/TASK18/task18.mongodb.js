// TASK 18

// Use database WEEK06
use("WEEK06");

// Create collection TASK18 and insert 3 records
db.TASK18.insertMany([
  { nvno: "01", name: "abc", phoneno: "123", BusNo: "3", Marks: 80 },
  { nvno: "02", name: "def", phoneno: "456", BusNo: "3", Marks: 85 },
  { nvno: "03", name: "ghi", phoneno: "789", BusNo: "2", Marks: 90 }
]);

// Search for all documents
db.TASK18.find();

// Update document to increase 5 Marks for only nvno: "02"
db.TASK18.updateOne({ nvno: "02" }, { $inc: { Marks: 5 } });

// Search for only nvno: "02" document
db.TASK18.find({ nvno: "02" });
