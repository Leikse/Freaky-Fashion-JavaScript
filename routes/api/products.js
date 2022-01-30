var express = require('express');
var router = express.Router();

let nextId = 3;

const products = [
    { 
        id: 1, 
        name: "Black T-Shirt", 
        description: "Lorem ipsum dolor sit amet", 
        imageUrl: "https://via.placeholder.com/640x480?text=Black+T-Shirt",
        articleNumber: "ABC123",
        price: 149
    },
    { 
        id: 2, 
        name: "White T-Shirt", 
        description: "Lorem ipsum dolor sit amet", 
        imageUrl: "https://via.placeholder.com/640x480?text=White+T-Shirt",
        articleNumber: "CBA321",
        price: 149
    }
];

/* GET /api/products */
router.get('/', function(req, res, next) {
  res.json(products);
});

/* GET /api/products/:id */
router.get('/:id', function(req, res, next) {

  const product = products.find(x => x.id == req.params.id);

  if (!product) {
      res.status(404).send();
      return;
  }

  res.json(product);
});

/* POST /api/products */
router.post('/', function(req, res, next) {

  const {
    name,
    description,
    imageUrl,
    articleNumber,
    price
  } = req.body;

  let newProduct = {
    id: nextId++,
    name,
    description,
    imageUrl,
    articleNumber,
    price
  };

  products.push(newProduct);

  res.status(201).send(newProduct);
});
  
module.exports = router;
