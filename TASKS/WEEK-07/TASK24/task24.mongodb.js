// TASK 24

// Use database WEEK07
use("WEEK07");

// Create collection TASK24
try { db.createCollection("TASK24"); } catch (e) {}

// Insert 3 documents
db.TASK24.insertMany([
  { nvno: "001", name: "abc", phoneno: "123", busno: "3" },
  { nvno: "002", name: "def", phoneno: "456", busno: "3" },
  { nvno: "003", name: "ghi", phoneno: "789", busno: "2" }
]);

// Search for all documents
db.TASK24.find();

// Delete one person who belongs to bus 2
db.TASK24.deleteOne({ busno: "2" });

// Search for all documents
db.TASK24.find();
