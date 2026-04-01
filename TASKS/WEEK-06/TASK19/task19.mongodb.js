// TASK 19

// Use database WEEK06
use("WEEK06");

// Create collection TASK19 and insert 3 records
db.TASK19.insertMany([
  { nvno: "01", name: "abc", phoneno: "123", BusNo: "3", Marks: 80 },
  { nvno: "02", name: "def", phoneno: "456", BusNo: "3", Marks: 85 },
  { nvno: "03", name: "ghi", phoneno: "789", BusNo: "2", Marks: 90 }
]);

// Search for all documents
db.TASK19.find();

// Search for nvno: "05", if not found insert using upsert
db.TASK19.updateOne(
  { nvno: "05" },
  { $set: { nvno: "05", name: "xyz", phoneno: "111", BusNo: "1", Marks: 100 } },
  { upsert: true }
);

// Search for all documents
db.TASK19.find();
