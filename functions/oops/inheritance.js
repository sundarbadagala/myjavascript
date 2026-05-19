function BankAccount(name, balance = 0) {
  this.name = name;
  this.balance = balance;
  this.accountNumber = Date.now();
}

BankAccount.prototype.deposite = function (amount) {
  this.balance += amount;
};

function SavingAccount(name, balance) {
  BankAccount.call(this, name, balance);
  this.limit = 500;
}

SavingAccount.prototype = Object.create(BankAccount.prototype);

function CurrentAccount(name, balance) {
  BankAccount.call(this, name, balance);
  this.limit = 1000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);

const rakesh = new SavingAccount("rakesh", 1000);

rakesh.deposite(100);

console.log(rakesh);
