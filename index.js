
class ProductManager {
  constructor(title,description,price,thumbnail,code,stock,id){
    this.title = title ;
    this.description = description;
    this.price = price ;
    this.thumbnail = thumbnail ;
    this.code = code ;
    this.stock = stock ;
    this.id = id;
 }
 
addProduct() {
    products.push(product1,product2);
  }
  getProducts() {
    console.log(products);
    }
}


const product1 = new ProductManager ('Papas fritas','Papas fritas Lays corte tradicional', 200, 'Sin imagen','lays1',10);
const product2 = new ProductManager ('Papas fritas Jamón Serrano','Papas fritas Lays sabor Jamón Serrano', 250, 'Sin imagen','lays2',25);

let products = [];


product1.addProduct();
product2.addProduct();
product2.getProducts();






