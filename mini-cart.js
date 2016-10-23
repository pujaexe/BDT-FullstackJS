Product = function() {
	this.sku 		= this.sku || "SKU";
	this.name 		= this.name || "Nama";
	this.price 		= this.price || 0;
	this.categories = this.categories || "Kategori";
};

Book = function() {
	this.isbn 	= this.isbn || "ISBN";
	this.author	= this.author || "Author";
};
Book.prototype = new Product();

Fashion = function() {
	this.color 	= this.color || "White";
	this.size	= this.size || "L";
	this.getPromoPrice = function () {
		date = new Date();
		now  = date.getDay();
		promo= this.price;

		now === 6 ? promo = this.price * 0.2 : promo = this.price;
		console.log(promo);
	};
}
Fashion.prototype = new Product();

OrderLineItem = function () {
	this.product 	= this.product || [];
	this.totalItem 	= this.totalItem || 0;
};

ProductManager = function () {
	this.products 		= [];
	this.addProduct		= function (p) {
		this.products.push(p);
	};
	this.getAllProducts = function () {
		console.log(this.products);
		return this.products;
	};
	this.getProduct 	= function (sku) {
		console.log(this.products.filter(x => x.sku === sku.toString()));
		return this.products.filter(x => x.sku === sku.toString());
	};
	this.removeProduct 	= function (sku) {
		var i = this.products.filter(x => x.sku === sku.toString());
		if (i != -1) {
			this.products.splice(i, 1);
		}
		console.log(i);
	};
	this.updateProduct 	= function () {
		return;
	};
};

Cart = {
	items: [],
	addItem: function (order) {
		this.items.push(order);
	},
	removeItem: function (order) {
		this.items.splice(order);
	},
	getTotalPrice: function () {
		var total = 0;
		this.items.forEach((item) => {
			total += item.product.price*item.totalItem;
		});
		console.log("Total price: $", total);
		return total;
	},
	checkOut: function (cash) {
		var total = 0;
		this.items.forEach((item) => {
			total += item.product.price*item.totalItem;
		});
		console.log("Your cash  : $", cash);
		console.log("Your return: $", cash - total);
	}
};

BookManager 				= function () {};
BookManager.prototype 	 	= new ProductManager();
FashionManager 			 	= function () {};
FashionManager.prototype 	= new ProductManager();

/* Transaction */
book1 = new Book();
book1.sku = "4123421";
book1.name = "Hello JavaScript!!";
book1.price = 200000;
book1.categories = "Books";
book1.isbn = "IDN-1212121212";
book1.author = "TanyaDev";

book2 = new Book();
book2.sku = "92019201";
book2.name = "Hello JSON!!";
book2.price = 100000;
book2.categories = "Books";
book2.isbn = "IDN-13131313131";
book2.author = "TanyaDev";

fashion2 = new Fashion();
fashion2.sku = "4123421";
fashion2.name = "Hello JavaScript!!";
fashion2.price = 200000;
fashion2.categories = "Books";
fashion2.color = "White";
fashion2.size = "M";

bookMgr = new BookManager();
bookMgr.addProduct(book1);
bookMgr.addProduct(book2);
// console.log("Get all product.. (first check)")
// bookMgr.getAllProducts();
// console.log("Get product with SKU = 4123421");
// bookMgr.getProduct(4123421);
// console.log("Remove product with SKU = 4123421");
// bookMgr.removeProduct(4123421);
// console.log("Get all product.. (checking out)")
// bookMgr.getAllProducts();
// console.log("Remove product with SKU = 92019201");
// bookMgr.removeProduct(92019201);
// console.log("Get all product.. (checking out)")
// bookMgr.getAllProducts();

fashionMgr = new FashionManager();
fashionMgr.getAllProducts();
fashionMgr.addProduct(fashion2);

order1 = new OrderLineItem();
order1.product = book1;
order1.totalItem = 2;

order2 = new OrderLineItem();
order2.product = fashion2;
order2.totalItem = 1;
fashion2.getPromoPrice();


console.log("My cart...");
MyCart = Cart;
MyCart.addItem(order1);
MyCart.addItem(order2);
console.log(MyCart.items);
MyCart.getTotalPrice();
MyCart.checkOut(10000000);
fashion2.getPromoPrice();

/* old getPromoPrice */
// Fashion.prototype.getPromoPrice = function() {
// 	/* create 20% price discount if the day is Saturday */
// 	var d = new Date();
// 	var weekday = new Array(7);
// 	weekday[0] = "Sunday";
// 	weekday[1] = "Monday";
// 	weekday[2] = "Tuesday";
// 	weekday[3] = "Wednesday";
// 	weekday[4] = "Thursday";
// 	weekday[5] = "Friday";
// 	weekday[6] = "Saturday";

// 	var n = weekday[d.getDay()];
// 	var p = this.price;
// 	return n === 'Monday' ? p = this.price * 0.2 : p =  this.price;

// 	console.log(p);
// };