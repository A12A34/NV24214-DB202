use('ITSTUDENTS')
db.createCollection("CUSTOMERS")
db.CUSTOMERS.insertOne(
    {
     NAME   :"CUSTOMERNAME",
     CPR    :"CPRNO",
     MOBILE :"XXXXX",
     EMAIL  :"TEST@GMAIL.COM"
    }
)
