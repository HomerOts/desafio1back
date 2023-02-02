
let products = [];

class ProductManager {
  constructor(title,description,price,thumbnail,code,stock,id){
    this.title = title ;
    this.description = description;
    this.price = price ;
    this.thumbnail = thumbnail ;
    this.code = code ;
    this.stock = stock ;
    this.id = ProductManager.incrementId();
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
    console.log(products);
    }

    getProductById(id) {
      if(this.ProductManager.some(ProductManager => ProductManager.id === id)) {
        let producto_buscado = this.ProductManager.filter( ProductManager => ProductManager.id === id)
        console.log(producto_buscado);
      } else {
        console.log("El producto no existe");
      }
    }

  }

const product1 = new ProductManager ('Citroen c4 Lounge','Citroen c4 Lounge usado', 3000000, 'Sin imagen','c4Lounge',1,);
const product2 = new ProductManager ('Citroen Nuevo c3','Nuevo c3 First edition', 2500000, 'Sin imagen','newc3',3,);
const product3 = new ProductManager ('Citroen Jumper','Camioneta Citroen Jumper', 5000000, 'Sin imagen','jumper',2,);



product1.addProduct();
product2.addProduct();
product3.addProduct();
console.log(products);
product1.getProductById(1)






