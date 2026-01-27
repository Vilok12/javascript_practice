 const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
a=structuredClone(order)
a.customer.address.city='secunderabad'
a.items[0].price=50000
console.log(order)
console.log(a)