use("NCST")
db.createCollection("WEEK05")
db.WEEK05.insertMany([ {_id: 1, name: 'Clark', dept: 'Sales' },
  {_id: 2, name: 'Dave', dept: 'Accounting' },
    {_id: 3, name: 'Ava', dept: 'Sales' }
])
db.WEEK05.findOne()
db.WEEK05.find({ dept: 'Sales' })
db.WEEK05.find({ name: 'Dave' })

