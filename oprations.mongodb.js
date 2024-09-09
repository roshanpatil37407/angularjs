use ("texts")

texts> db.createCollection("product")

texts> db.product.insertMany([ { name: "Laptop", price: 1200, category: "Electronics", stock: 30 }, { name: "Smartphone", price: 800, category: "Electronics", stock: 50 }, { name: "Tablet", price: 400, category: "Electronics", stock: 20 }, { name: "Headphones", price: 150, category: "Accessories", stock: 100 }, { name: "Charger", price: 25, category: "Accessories", stock: 200 }] )
{
  acknowledged: true,
  {
    '0': ObjectId('66def239128971cd9d2710c1'),
    '1': ObjectId('66def239128971cd9d2710c2'),
    '2': ObjectId('66def239128971cd9d2710c3'),
    '3': ObjectId('66def239128971cd9d2710c4'),
    '4': ObjectId('66def239128971cd9d2710c5')
  }
}
texts> db.product.find()
[
  {
    _id: ObjectId('66def239128971cd9d2710c1'),
    name: 'Laptop',
    price: 1200,
    category: 'Electronics',
    stock: 30
  },
  {
    _id: ObjectId('66def239128971cd9d2710c2'),
    name: 'Smartphone',
    price: 800,
    category: 'Electronics',
    stock: 50
  },
  {
    _id: ObjectId('66def239128971cd9d2710c3'),
    name: 'Tablet',
    price: 400,
    category: 'Electronics',
    stock: 20
  },
  {
    _id: ObjectId('66def239128971cd9d2710c4'),
    name: 'Headphones',
    price: 150,
    category: 'Accessories',
    stock: 100
  },
  {
    _id: ObjectId('66def239128971cd9d2710c5'),
    name: 'Charger',
    price: 25,
    category: 'Accessories',
    stock: 200
  }
]
texts> db.products.find({ price: { $gt: 500 } })
[
  {
    _id: ObjectId('66def217128971cd9d2710bc'),
    name: 'Laptop',
    price: 1200,
    category: 'Electronics',
    stock: 30
  },
  {
    _id: ObjectId('66def217128971cd9d2710bd'),
    name: 'Smartphone',
    price: 800,
    category: 'Electronics',
    stock: 50
  }
]
texts> db.products.find({ stock: { $lt: 50 } })
[
  {
    _id: ObjectId('66def217128971cd9d2710bc'),
    name: 'Laptop',
    price: 1200,
    category: 'Electronics',
    stock: 30
  },
  {
    _id: ObjectId('66def217128971cd9d2710be'),
    name: 'Tablet',
    price: 400,
    category: 'Electronics',
    stock: 20
  }
]
texts> db.products.find({ price: { $gte: 100, $lte: 1000 } })
[
  {
    _id: ObjectId('66def217128971cd9d2710bd'),
    name: 'Smartphone',
    price: 800,
    category: 'Electronics',
    stock: 50
  },
  {
    _id: ObjectId('66def217128971cd9d2710be'),
    name: 'Tablet',
    price: 400,
    category: 'Electronics',
    stock: 20
  },
  {
    _id: ObjectId('66def217128971cd9d2710bf'),
    name: 'Headphones',
    price: 150,
    category: 'Accessories',
    stock: 100
  }
]
texts> db.products.find({ category: { $ne: "Accessories" } })
[
  {
    _id: ObjectId('66def217128971cd9d2710bc'),
    name: 'Laptop',
    price: 1200,
    category: 'Electronics',
    stock: 30
  },
  {
    _id: ObjectId('66def217128971cd9d2710bd'),
    name: 'Smartphone',
    price: 800,
    category: 'Electronics',
    stock: 50
  },
  {
    _id: ObjectId('66def217128971cd9d2710be'),
    name: 'Tablet',
    price: 400,
    category: 'Electronics',
    stock: 20
  }
]
texts> db.products.find({ stock: { $gte: 100 } })
[
  {
    _id: ObjectId('66def217128971cd9d2710bf'),
    name: 'Headphones',
    price: 150,
    category: 'Accessories',
    stock: 100
  },
  {
    _id: ObjectId('66def217128971cd9d2710c0'),
    name: 'Charger',
    price: 25,
    category: 'Accessories',
    stock: 200
  }
]
texts> db.products.find({ price: { $lte: 400 } })
[
  {
    _id: ObjectId('66def217128971cd9d2710be'),
    name: 'Tablet',
    price: 400,
    category: 'Electronics',
    stock: 20
  },
  {
    _id: ObjectId('66def217128971cd9d2710bf'),
    name: 'Headphones',
    price: 150,
    category: 'Accessories',
    stock: 100
  },
  {
    _id: ObjectId('66def217128971cd9d2710c0'),
    name: 'Charger',
    price: 25,
    category: 'Accessories',
    stock: 200
  }
]
texts> db.products.find({ price: { $in: [150, 800, 1200] } })
[
  {
    _id: ObjectId('66def217128971cd9d2710bc'),
    name: 'Laptop',
    price: 1200,
    category: 'Electronics',
    stock: 30
  },
  {
    _id: ObjectId('66def217128971cd9d2710bd'),
    name: 'Smartphone',
    price: 800,
    category: 'Electronics',
    stock: 50
  },
  {
    _id: ObjectId('66def217128971cd9d2710bf'),
    name: 'Headphones',
    price: 150,
    category: 'Accessories',
    stock: 100
  }
]

texts> db.products.find({ $and: [ { price: { $gt: 500 } }, { stock: { $lt: 50 } }] })
[
  {
    _id: ObjectId('66def217128971cd9d2710bc'),
    name: 'Laptop',
    price: 1200,
    category: 'Electronics',
    stock: 30
  }
]

texts> db.products.find({ $or: [ { price: { $lt: 100 } }, { stock: { $gt: 100 } }] })
[
  {
    _id: ObjectId('66def217128971cd9d2710c0'),
    name: 'Charger',
    price: 25,
    category: 'Accessories',
    stock: 200
  }
]
db.products.find({ $nor: [ { price: { $gt: 1000 } }, /* Condition 1: Price greater than 1000*/ { category: "Accessories" } /* Condition 2: Category is "Accessories"*/] })
[
  {
    _id: ObjectId('66def217128971cd9d2710bd'),
    name: 'Smartphone',
    price: 800,
    category: 'Electronics',
    stock: 50
  },
  {
    _id: ObjectId('66def217128971cd9d2710be'),
    name: 'Tablet',
    price: 400,
    category: 'Electronics',
    stock: 20
  }
]
texts> db.products.find({ $or: [ { price: { $gt: 1000 } }, { category: "Accessories" }] })
[
  {
    _id: ObjectId('66def217128971cd9d2710bc'),
    name: 'Laptop',
    price: 1200,
    category: 'Electronics',
    stock: 30
  },
  {
    _id: ObjectId('66def217128971cd9d2710bf'),
    name: 'Headphones',
    price: 150,
    category: 'Accessories',
    stock: 100
  },
  {
    _id: ObjectId('66def217128971cd9d2710c0'),
    name: 'Charger',
    price: 25,
    category: 'Accessories',
    stock: 200
  }
]

db.products.find({ price: { $not: { $gt: 1000 } } })
[
  {
    _id: ObjectId('66def217128971cd9d2710bd'),
    name: 'Smartphone',
    price: 800,
    category: 'Electronics',
    stock: 50
  },
  {
    _id: ObjectId('66def217128971cd9d2710be'),
    name: 'Tablet',
    price: 400,
    category: 'Electronics',
    stock: 20
  },
  {
    _id: ObjectId('66def217128971cd9d2710bf'),
    name: 'Headphones',
    price: 150,
    category: 'Accessories',
    stock: 100
  },
  {
    _id: ObjectId('66def217128971cd9d2710c0'),
    name: 'Charger',
    price: 25,
    category: 'Accessories',
    stock: 200
  }
]

db.products.aggregate([ { $group: { _id: null, totalStock: { $sum: "$stock" } } }] )
[ { _id: null, totalStock: 400 } ]
texts> db.products.aggregate([ { $group: { _id: null, avgPrice: { $avg: "$price" } } }] )
[ { _id: null, avgPrice: 515 } ]

texts> db.products.aggregate([ { $group: { _id: null, maxPrice: { $max: "$price" }, minPrice: { $min: "$price" } } }] )
[ { _id: null, maxPrice: 1200, minPrice: 25 } ]


texts> db.products.aggregate([ { $project: { name: 1, totalRevenue: { $multiply: ["$price", "$stock"] } } }] )
[
  {
    _id: ObjectId('66def217128971cd9d2710bc'),
    name: 'Laptop',
    totalRevenue: 36000
  },
  {
    _id: ObjectId('66def217128971cd9d2710bd'),
    name: 'Smartphone',
    totalRevenue: 40000
  },
  {
    _id: ObjectId('66def217128971cd9d2710be'),
    name: 'Tablet',
    totalRevenue: 8000
  },
  {
    _id: ObjectId('66def217128971cd9d2710bf'),
    name: 'Headphones',
    totalRevenue: 15000
  },
  {
    _id: ObjectId('66def217128971cd9d2710c0'),
    name: 'Charger',
    totalRevenue: 5000
  }
]
