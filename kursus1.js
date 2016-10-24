product  = function() {
    this.sku = this.sku || "sku123";
    this.name = this.name 
    this.price = this.price ||0
    this.categories = this.categories    
}
var books = function(){
    this.isbn=this.isbn || "isbn"
    this.author = this.author
}
var fashion = function(){
    this.color = this.color
    this.size = this.size
    this.getPromoPrice = function(){
        tanggal = new Date();
        hari = date.getDay();
        promo = this.price;

        if (now===6){
            promo = this.price*20/100

        }else{
            promo = this.price
        }
    }
}
books.prototype = new  product;
fashion.prototype = new  product;


OrderLineItem = function (prod,qty) {
   this.product    = this.product;
   this.totalItem  = this.totalItem;
}

ProductManagerBase = {
    products:[],
    addItem:function(prod){
        this.products.push(prod);
    },
    getAllProducts : function(products){
        console.log(this.products);
    },
    getProducts:function(sku){
        this.products.find((item)=>{
            if(item.sku==sku){
                console.log(this.products);
            }
        });

    },
    removeProducts:function(sku){
       var indexne = this.products.indexOf(sku)
       this.products.splice(indexne,1);
    },
    updateProducts:function(sku){
       return;
    }
}

Cart = {
    items:[],
    addItem:function(prod){
        this.items.push(prod);
    },
    removeItem:function(sku){
        var posisi = this.items.indexOf(sku)
        this.items.splice(posisi,1);
    },
    getTotalPrice:function(){
        var i;
        var totalnya =0;
        for (i = 0; i < this.items.length; i++) {
            var totalnya = totalnya+parseInt(this.items[i].price);
            console.log(totalnya);
        }
    },
    checkOut:function(bayar){
        var i;
        var totalBayar =0;
        for (i = 0; i < this.items.length; i++) {
            var totalBayar = totalBayar+parseInt(this.items[i].price);
        }

        totalBayar=totalBayar-bayar;

        console.log("kembalian anda : ", totalBayar);
    }

}

book1 = new books();
book1.sku="135"
book1.isbn = "123";
book1.price = "10000";
book1.author = "puja.exe";

book2 = new books();
book2.sku="468"
book2.isbn = "456";
book2.price = "10000";
book2.author = "puja.anu";


MyCart = Cart ;
MyCart.addItem(book1);
MyCart.addItem(book2);

produkmanager = ProductManagerBase;
produkmanager.addItem(book1);

console.log("produk manager : ")
console.log(produkmanager.products);

console.log("tes get all produk manager : ")
produkmanager.getAllProducts();

console.log("tes get produk : ")
produkmanager.getProducts("135");

console.log("tes removeProduct di fungsi produk : ")
produkmanager.removeProducts("135");
produkmanager.getAllProducts();

console.log("data setelah di masukan ke chart");
console.log(MyCart.items);

console.log("data2 setelah di hapus ke chart");
MyCart.removeItem("468");
console.log(MyCart.items);

console.log("Total Harga");
MyCart.getTotalPrice();

MyCart.checkOut(10000);