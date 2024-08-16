use("CrudDb")

db.createCollection("couse")

// db.couse.insertOne({
//     name:"Roshan patil",
//     price:100,
//     assignments:12,
//     project:20
// })


// db.couse.insertMany([
//     [
//         {
//             "name": "Roshan Patil",
//             "price": 100,
//             "assignments": 12,
//             "project": 20
//         },
//         {
//             "name": "Ananya Sharma",
//             "price": 150,
//             "assignments": 8,
//             "project": 15
//         },
//         {
//             "name": "Raj Kumar",
//             "price": 200,
//             "assignments": 20,
//             "project": 30
//         },
//         {
//             "name": "Meera Iyer",
//             "price": 120,
//             "assignments": 10,
//             "project": 18
//         },
//         {
//             "name": "Suresh Rao",
//             "price": 90,
//             "assignments": 15,
//             "project": 22
//         }
//     ]
    
// ])

// let a = db.couse.find({price:100})
// console.log(a.toArray())

// let b= db.couse.findOne({price:100})
// console.log(b)




// db.couse.updateOne({price:100},{$set:{price:50}})



db.couse.deleteMany({price:100})