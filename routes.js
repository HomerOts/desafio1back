import express from "express"

const app = express();
const routerProducts = express.Router();
const routerCards = express.Router();

// Declaramos los endpoints
app.use('api/products', routerProducts);
app.use('api/cards', routerCards);

routerProducts.use(express.urlencoded({extended: true}));
routerCards.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));


routerProducts.get('/listar', (req, res) => {
  res.json(products);
})

routerProducts.post('/guardar', (req, res) => {
  products.push(req.body)
  res.json(req.body)
}) 
// Cards
routerCards.get('/listar', (req, res) => {
    res.json(cards);
  })
  
  routerCards.post('/guardar', (req, res) => {
    cards.push(req.body)
    res.json(req.body)
  })
