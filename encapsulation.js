// Encapsulation: Bundling data and methods that operate on that data within a class,
// and restricting direct access to some of an object's components.
class BackAccount {
  // Private field: denoted by '#', cannot be accessed directly from outside the class
  #customerName;
  accountNumber;
  balance;

  constructor(customerName, accountNumber, balance) {
    // Initialize private field
    this.#customerName = customerName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  // Getter: Controlled access to read the private field
  get customerName() {
    return this.#customerName;
  }
  // Setter: Controlled access to update the private field
  set customerName(name) {
    this.#customerName = name;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}
// Inheritance: SavingAccount inherits properties and methods from BackAccount
class SavingAccount extends BackAccount {
  transctionLimit = 10000;

  constructor(customerName, balance = 0) {
    super(customerName, Date.now(), balance);
  }
  takeBusinessLoan(amount) {
    console.log("taking business loan");
  }
}

const b1 = new SavingAccount('hasnain', 5000)

// Using the setter to change the private name
b1.customerName = 'babe';
console.log(b1.customerName)
