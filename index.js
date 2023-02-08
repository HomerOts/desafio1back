
let products = [];

class ProductManager {
  constructor(title,description,price,thumbnail,code,stock,id,path){
    this.title = title ;
    this.description = description;
    this.price = price ;
    this.thumbnail = thumbnail ;
    this.code = code ;
    this.stock = stock ;
    this.id = ProductManager.incrementId();
    this.path = './products.json';
  }
 
 static incrementId() {
  if (!this.latestId) this.latestId = 1;
  else this.latestId++ 
 return this.latestId
 }
 
addProduct() {
      products.push(product1,product2,product3);
    }
  
  getProducts() { 
    let products = fs.readFileSync(this.path)
    products = JSON.parse(products)
    if(products){
      return products
    } else {
      console.log("Not products yet")
    }
    }


/* COMENTO ESTE METODO PORQUE NO LOGRO LLEGAR AL RESULTADO
    getProductById(id) {
      if (this.products.some(products => products.id === id)) {
        let producto_buscado = this.products.find(products => products.id === id)
        console.log(producto_buscado);
      } 
    
    }  */

    getProductById(id) {
      let buscarProductos = products.find(products => products.id === id);
      if (!buscarProductos) {
        console.log ("El producto no existe")
      } else{
        console.log(buscarProductos);
      }
       
    }
    

    updateProduct() {
    

    }

    deleteProduct() {

    }

  }

const product1 = new ProductManager ('Citroen c4 Lounge','Citroen c4 Lounge usado', 3000000, 'Sin imagen','c4Lounge',1,'./products.json');
const product2 = new ProductManager ('Citroen Nuevo c3','Nuevo c3 First edition', 2500000, 'Sin imagen','newc3',3,'./products.json');
const product3 = new ProductManager ('Citroen Jumper','Camioneta Citroen Jumper', 5000000, 'Sin imagen','jumper',2,'./products.json');


product1.addProduct();
console.log(products);

//getProductById(3);
//updateProduct();
//getProducts(); No logro llamar a esta funcion sin error, ni lograr q los productos pasen al json

export default new ProductManager("./products.json");



import express, { json, response } from "express"

const app = express();
 
const productos = products;

app.get('/getProducts', (req, res) => {
    res.send(productos) 
})

app.use(express.urlencoded({extended:true}));


app.get('/',(req,res) => {
let limit = req.query.limit;
if (!limit||(limit!==0)) return res.send({products})
let productosFiltrados = products.filter(products=> products.limit === limit);
res.send({products:productosFiltrados})
})

//Config del servidor
const PORT = 8080
const server = app.listen(PORT,() => {
    console.log('servidor ejecutandose en el puerto: ', PORT)
})

server.on('error', error => console.log('Error en el servidor: ', error));