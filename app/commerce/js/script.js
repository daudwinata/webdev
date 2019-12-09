new Vue({
    el: "#app",
    data: {
        title: "E-commerce",
        view_cart: "View Cart",
        products: [
            {
                id: 1,
                name: "MacBook Pro (15 inch)",
                description: "This laptop has a super crisp Retina display. Yes, we know that it\'s overpriced...",
                price: 2999,
                inStock: 50,
                images: "./images/imac.jpg"
            },
            {
                id: 2,
                name: "Samsung Galaxy Note 8",
                description: "Unlike the overpriced MacBook Pro, we\'re selling this one a bit cheap, as we heard it might explode...",
                price: 799,
                inStock: 755,
                images: "./images/note-9.jpg"
            },
            {
                id: 3,
                name: "HP Officejet 5740 e-All-in-One-printer",
                description: "This one might not last for so long, but hey, printers never work anyways",
                price: 149,
                inStock: 5,
                images: "./images/printer.jpg"
            },
            {
                id: 4,
                name: "iPhone 7 cover",
                description: "Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?",
                price: 49,
                inStock: 42,
                images: "./images/cover.jpg"
            },
            {
                id: 5,
                name: "iPad Pro (9.7 inch)",
                description: "We heard it\'s supposed to be pretty good. At least that\'s what people say.",
                price: 599,
                inStock: 0,
                images: "./images/ipad-pro.jpg"
            },
            {
                id: 6,
                name: "OnePlus 3 cover",
                description: "'Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!",
                price: 19,
                inStock: 81,
                images: "./images/one-plus.jpg"
            }
        ],
        cartNumber: 0,
        add_to_cart_text: "Add to cart",
        remove_from_cart_text: "Remove from cart",
        cart: {
            items: []
        },
        isShowingCart: false,

    },

    methods: {
        add_to_cart: function (product) {
            var cartItem = this.getCartItem(product);

            if (cartItem != null) {
                cartItem.quantity++;
            } else {
                // this.cartNumber += 1;
                this.cart.items.push({
                    productName: product,
                    quantity: 1
                });
            }

            product.inStock--;
        },
        remove_from_cart: function (test) {
            this.cartNumber -= 1;

            // this.cart.items.pop({
            //     productName: productParanthesis,
            //     quantity: 1
            // });
            // test.inStock++;
        },
        getCartItem: function (product) {
            for (var i = 0; i < this.cart.items.length; i++) {
                if (this.cart.items[i].productName.id === product.id) {
                    return this.cart.items[i];
                }
            }

            return null;
        },
        increaseQuantity: function (cartItem) {
            cartItem.productName.inStock--;
            cartItem.quantity++;
        },
        decreaseQuantity: function (cartItem) {
            cartItem.quantity--;
            cartItem.productName.inStock++;

            if (cartItem.quantity == 0) {
                this.removeItemFromCart(cartItem);
            }
        },

        removeItemFromCart: function (cartItem) {
            var index = this.cart.items.indexOf(cartItem);
            if (index !== -1) {
                this.cart.items.splice(index, 1);
            }
        },

        checkout: function () {
            if (confirm("Are you sure that you want to purchase these products?")) {
                this.cart.items.forEach(function (item) {
                    item.productName.inStock += item.quantity;
                });

                this.cart.items = [];
            }
        }
    },

    computed: {
        cartTotal: function () {
            var total = 0;

            this.cart.items.forEach(function (item) {
                total += item.quantity * item.productName.price;
            });

            return total;
        },
        taxAmount: function () {
            return ((this.cartTotal * 10) / 100);
        }
    },

    filters: {
        currency: function (value) {
            var formatter = Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0
            });

            return formatter.format(value);
        }
    }
});