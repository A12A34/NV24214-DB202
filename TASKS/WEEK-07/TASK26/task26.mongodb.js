// TASK 26

// Use database WEEK07
use("WEEK07");

// Create collection TASK26
try { db.createCollection("TASK26"); } catch (e) {}

// Insert 3 documents
db.TASK26.insertMany([
  { nvno: "001", name: "abc", phoneno: "123", busno: "3" },
  { nvno: "002", name: "def", phoneno: "456", busno: "3" },
  { nvno: "003", name: "ghi", phoneno: "789", busno: "2" }
]);

// Search for all documents
db.TASK26.find();

// Replace the document for nvno "007" with new data
db.TASK26.replaceOne(
  { nvno: "007" },
  { nvno: "007", name: "ncst", phoneno: "111", busno: "07" }
);

// Search for all documents
db.TASK26.find();
