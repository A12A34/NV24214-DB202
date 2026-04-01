// TASK 17

// Use database WEEK06
use("WEEK06");

// Create collection TASK17 and insert 3 records
db.TASK17.insertMany([
  { nvno: "01", name: "abc", phoneno: "123", BusNo: "3" },
  { nvno: "02", name: "def", phoneno: "456", BusNo: "3" },
  { nvno: "03", name: "ghi", phoneno: "789", BusNo: "2" }
]);

// Search for all documents
db.TASK17.find();

// Update all documents to BusNo: "1"
db.TASK17.updateMany({}, { $set: { BusNo: "1" } });

// Search for all documents
db.TASK17.find();
