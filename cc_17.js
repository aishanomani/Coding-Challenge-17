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

// Task 2: Create a SalesRep Class
console.log('****Sales Reps Clients and Total Spent for a Specific Client****');
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
    addClient(customer) {
      this.clients.push(customer);
    }
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }

// Test Case for Task 2
const salesRep = new SalesRep('Kwon Jae-Sung');
salesRep.addClient(customer1);
console.log('Sales Rep Clients:', salesRep.clients.map(c => c.name));
console.log('Total Spent by Miguel Diaz:', salesRep.getClientTotal('Miguel Diaz'));

// Task 3: Create a VIPCustomer Class
console.log('****VIP Customers Total Spent with Bonus****');
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
    }
    getTotalSpent() {
      const baseTotal = super.getTotalSpent();
      return baseTotal * 1.1; // Adds 10% Loyalty Bonus
    }
  }

// Test Case for Task 3
const vipCustomer = new VIPCustomer('Zara Malik', 'zaramalik@gmail.com', 'Platinum');
vipCustomer.addPurchase(500);
vipCustomer.addPurchase(200);
vipCustomer.addPurchase(300);
console.log('VIP Customer:', vipCustomer.name, 'Level:', vipCustomer.vipLevel);
console.log('VIP Total Spent with Bonus:', vipCustomer.getTotalSpent());

// Task 4: Build a Client Report System
console.log('****Finalized Report****');
const customers = [customer1, vipCustomer];
salesRep.addClient(vipCustomer);
const totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0);
const highSpenders = customers.filter(c => c.getTotalSpent() > 500);
const customerSummary = customers.map(c => ({
  name: c.name,
  totalSpent: c.getTotalSpent()
}));

// Test Case for Task 4:
console.log('Total Revenue:', totalRevenue);
console.log('High-Spending Customers:', highSpenders.map(c => c.name));
console.log('Customer Summary:', customerSummary);
