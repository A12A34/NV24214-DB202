// TASK 16

// Create and switch to database WEEK06
use("WEEK06");

// Create collection TASK16 and insert 3 records
db.TASK16.insertMany([
    { nvno: "01", name: "abc", phoneno: "123", BusNo: "3" },
    { nvno: "02", name: "def", phoneno: "456", BusNo: "3" },
    { nvno: "03", name: "ghi", phoneno: "789", BusNo: "2" }
]);

// Search for all documents
db.TASK16.find();

// Update all documents whose BusNo is "3" to BusNo "1"
db.TASK16.updateMany(
    { BusNo: "3" },
    { $set: { BusNo: "1" } }
);

// Search for all documents
db.TASK16.find();