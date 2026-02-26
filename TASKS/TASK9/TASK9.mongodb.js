use("EXAMS")
db.createCollection("Formative")
db.Formative.insertMany([
    { "SUBJECT CODE": "DB202", "SUBJECT NAME": "DATABASE", "MARKS": 90 },   
    { "SUBJECT CODE": "PL202", "SUBJECT NAME": "PROGRAMMING LANGUAGE", "MARKS": 85 },
    { "SUBJECT CODE": "NE801", "SUBJECT NAME": "NETWORKING", "MARKS": 80 }
])

db.Formative.find()