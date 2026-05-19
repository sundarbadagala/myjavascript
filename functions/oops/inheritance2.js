function BankAccount(name, balance = 0) {
  return {
    name,
    balance,
    accountNumber: Math.round(Math.random() * 10000),
    deposite(amount) {
      this.balance += amount;
    },
    withdraw(amount){
      if(this.balance > amount){
        this.balance -= amount
        console.log('success')
        console.log('remaining balance', this.balance)
      }
    }
  };
}

function CurrentAccount(name, balance) {
  const bankAccount = BankAccount(name, balance);
  return {
    ...bankAccount,
    type: "current",
    limit: 1000,
    withdraw(amount){
      console.log('hiii')
    }
  };
}

function SavingAccount(name, balance) {
  const bankAccount = BankAccount(name, balance);
  return {
    ...bankAccount,
    type: "savings",
    limit: 500,
  };
}

//---------------------------------------------------

const rakesh = CurrentAccount("rakesh", 1000);
const chandu = SavingAccount("chandu", 5000);

rakesh.withdraw(10);
