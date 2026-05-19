//------------------------------------WITHOUT ENCAPSULATIO----------------------------------------

function BankAccount1(name, balance) {
  return {
    name,
    balance,
    deposite(amount) {
      this.balance += amount;
    },
    withdraw(amount) {
      this.balance -= amount;
    },
  };
}

const rakesh = BankAccount1("rakesh", 100);

console.log(rakesh.name);
rakesh.name = "dummy";
console.log(rakesh.name);

//----------------------------------WITH ENCAPSULATION-------------------------------------------

function BankAccount2(name, balance) {
  return {
    getBalance() {
      console.log(balance);
    },
    getName() {
      console.log(name);
    },
    deposite(amount) {
      balance += amount;
    },
    withdraw(amount) {
      balance -= amount;
    },
  };
}

const ramesh = BankAccount2("ramesh", 100);

ramesh.getName();
