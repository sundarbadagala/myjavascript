function BankAccount(name, balance) {
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

function SavingAccount(name, balance) {
  const bankAccount = BankAccount(name, balance);
  return {
    ...bankAccount,
    limit: 100,
    withdraw(amount) {
      amount < limit ? console.log("success") : console.log("fail");
    },
  };
}

function CurrentAccount(name, balance) {
  const bankAccount = BankAccount(name, balance);
  return {
    ...bankAccount,
    limit: 50,
    withdraw(amount) {
      amount < limit ? console.log("success") : console.log("fail");
    },
  };
}
