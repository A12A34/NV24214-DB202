// TASK 15

// Create and switch to database WEEK06
use("WEEK06");

// Create collection TASK15 and insert 3 records
db.TASK15.insertMany([
    { nvno: "01", name: "abc", phoneno: "123" },
    { nvno: "02", name: "def", phoneno: "456" },
    { nvno: "03", name: "ghi", phoneno: "789" }
]);

// Search for all documents
db.TASK15.find();

// Update the document whose nvno is "02"
db.TASK15.updateOne(
    { nvno: "02" },
    { $set: { name: "updated_def", phoneno: "999" } }
);

// Search for all documents
db.TASK15.find();