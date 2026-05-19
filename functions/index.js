function BankAccount(name, balance = 0) {
  this.name = name;
  this.balance = balance;
  this.accountNumber = Date.now();
}

function CurrentAccount(name, balance) {
  this.name = name;
  this.balance = balance;
  this.accountNumber = Date.now();
  this.limit = 10000;
}

BankAccount.prototype.deposite = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const bankAccount = new BankAccount("ram", 5);

bankAccount.deposite(10);

console.log(bankAccount);
