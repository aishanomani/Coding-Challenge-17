// Task 1: Create a Customer Class
console.log('****New Customer Creation and Total Spent After Purchases****');
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
    }
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
    getTotalSpent() {
      return this.purchaseHistory.reduce((sum, amount) => sum + amount, 0);
    }
  }

// Test Case for Task 1
const customer1 = new Customer('Miguel Diaz', 'migueldiaz@gmail.com');
customer1.addPurchase(150);
customer1.addPurchase(250);
customer1.addPurchase(50);
console.log('New Customer:', customer1.name);
console.log('Total Spent:', customer1.getTotalSpent());

