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

function CurrentAccount(name, balance) {
  const bankAccount = BankAccount(name, balance);
  return {
    ...bankAccount,
    applyPersonalLoad(amount) {
      console.log("granted", amount);
    },
  };
}

function SavingAccount(name, balance) {
  const bankAccount = BankAccount(name, balance);
  return {
    ...bankAccount,
    applyBusinessLoan(amount) {
      console.log("granted", amount);
    },
  };
}

//----------------------------------------------------------------------------------------

const raju = CurrentAccount("raju", 100);

raju.applyPersonalLoad(100);
