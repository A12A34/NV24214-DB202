// TASK 25

// Use database WEEK07
use("WEEK07");

// Create collection TASK25
try { db.createCollection("TASK25"); } catch (e) {}

// Insert 3 documents
db.TASK25.insertMany([
  { nvno: "001", name: "abc", phoneno: "123", busno: "3" },
  { nvno: "002", name: "def", phoneno: "456", busno: "3" },
  { nvno: "003", name: "ghi", phoneno: "789", busno: "2" }
]);

// Search for all documents
db.TASK25.find();

// Replace the document for nvno "002" with new data
db.TASK25.replaceOne(
  { nvno: "002" },
  { nvno: "002", name: "ncst", phoneno: "111", busno: "07" }
);

// Search for all documents
db.TASK25.find();
