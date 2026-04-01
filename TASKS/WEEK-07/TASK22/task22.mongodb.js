// TASK 22

// Use database WEEK07
use("WEEK07");

// Create collection TASK22
try { db.createCollection("TASK22"); } catch (e) {}

// Insert 3 documents
db.TASK22.insertMany([
  { nvno: "001", name: "abc", phoneno: "123", busno: "3", class: "11ccp" },
  { nvno: "002", name: "def", phoneno: "456", busno: "3", class: "11ccp" },
  { nvno: "003", name: "ghi", phoneno: "789", busno: "2", class: "11ai" }
]);

// Search for all documents
db.TASK22.find();

// Delete all documents which belong to 11ccp
db.TASK22.deleteMany({ class: "11ccp" });

// Search for all documents
db.TASK22.find();
