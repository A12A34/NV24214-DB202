// TASK 23

// Use database WEEK07
use("WEEK07");

// Create collection TASK23
try { db.createCollection("TASK23"); } catch (e) {}

// Insert 3 documents
db.TASK23.insertMany([
  { nvno: "001", name: "abc", phoneno: "123", busno: "3" },
  { nvno: "002", name: "def", phoneno: "456", busno: "3" },
  { nvno: "003", name: "ghi", phoneno: "789", busno: "2" }
]);

// Search for all documents
db.TASK23.find();

// Delete all people who belong to bus 3
db.TASK23.deleteMany({ busno: "3" });

// Search for all documents
db.TASK23.find();
