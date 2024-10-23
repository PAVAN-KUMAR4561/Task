//


async function fetchOrders() {
    try {
        const response = await fetch("https://dummyjson.com/c/d749-5b95-40c2-892e");
        const data = await response.json();
        const orders = data.orders; 
        console.log(data);

        
        const orderValues = orders.map(order => {                                      // Calculate total order value for each order
            const totalValue = order.items.reduce((sum, item) => {
                return sum + (item.quantity * item.price);
            }, 0);
            return { orderId: order.id, totalValue };
        });

        console.log("Total Order Values:", orderValues);

       
        const productSales = {};                                             //mtotal sales for each product

        orders.forEach(order => {
            order.items.forEach(item => {
                if (!productSales[item.name]) {
                    productSales[item.name] = 0;
                }
                productSales[item.name] += item.quantity;
            });
        });

        console.log("Total Sales per Product:", productSales);

       
        const customerSpending = {};                                  // top 2 customers by total spending

        orders.forEach(order => {
            const customerId = order.customerId; 
            const totalValue = order.items.reduce((sum, item) => {
                return sum + (item.quantity * item.price);
            }, 0);

            if (!customerSpending[customerId]) {
                customerSpending[customerId] = 0;
            }
            customerSpending[customerId] += totalValue;
        });

        const topCustomers = Object.entries(customerSpending)
            .sort(([, a], [, b]) => b - a)                                              // Sort by total spending
            .slice(0, 2)                                                                // Give  top 2 customers
            .map(([customerId, totalSpent]) => ({ customerId, totalSpent }));

        console.log("Top 2 Customers by Spending:", topCustomers);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchOrders();
