// TASK 21

// Use database WEEK07
use("WEEK07");

// Create collection TASK21
try { db.createCollection("TASK21"); } catch (e) {}

// Insert 3 documents
db.TASK21.insertMany([
  { nvno: "001", name: "abc", phoneno: "123", busno: "3" },
  { nvno: "002", name: "def", phoneno: "456", busno: "3" },
  { nvno: "003", name: "ghi", phoneno: "789", busno: "2" }
]);

// Search for all documents
db.TASK21.find();

// Delete one document (example: nvno "001")
db.TASK21.deleteOne({ nvno: "001" });

// Search for all documents
db.TASK21.find();
