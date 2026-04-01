use("WEEK05")
db.createCollection("TASK13")
db.TASK13.insertMany([
  {_id: 1, courseName: "DB202", teacherName: "RAGHU D", marks: 90},
    {_id: 2, courseName: "PL202", teacherName: "RAGHU D", marks: 90},
])      
db.TASK13.findOne()
db.TASK13.findOne({ marks: 90 })

