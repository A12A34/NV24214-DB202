use("NCST")
db.createCollection("STUDENTS")
db.STUDENTS.insertMany([ {_id: 1, name: 'Clark', dept: 'Sales' },
  {_id: 2, name: 'Dave', dept: 'Accounting' },
  {_id: 3, name: 'Ava', dept: 'Sales' }
])
db.STUDENTS.find()
db.STUDENTS.find({ dept: 'Sales' })
db.STUDENTS.find({ name: 'Dave' })