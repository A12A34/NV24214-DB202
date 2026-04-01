use("NCST")
db.createCollection("TASK14")
db.TASK14.insertMany([ {_id: 1, name: 'Clark', dept: 'Sales' },
  {_id: 2, name: 'Dave', dept: 'Accounting' },
  {_id: 3, name: 'Ava', dept: 'Sales' }
])
db.TASK14.find({}, {_id: 0, name: 1, dept: 1})
