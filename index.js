let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.transactions = [];
  }

  get balance(){
  	let balance = 0;
  	this.transactions.forEach((transact)=> {
  		balance += transact.value;
  	})
  	return balance;
  }

  addTransaction(transaction){
  	this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
  	this.time = new Date();
  	if (this.isAllowed()){
	  	this.time = new Date();
	  	this.account.addTransaction(this)
	  	return true;
  	} else{
  		return false;	
  	}
    
    
  }

 


}

class Withdrawal extends Transaction{

  // constructor(amount, account) {
  //   this.amount = amount;
  //   this.account = account;
  // }
   isAllowed(){
  	if (this.account.balance > this.amount){
  		return true;
  	} else{
  		console.log('Not enough funds!')
  		return false;
  	}
  }

  get value() {
  	
  		return -this.amount;
  }

}

class Deposit extends Transaction{
	
	// constructor(amount, account) {
 //    this.amount = amount;
 //    this.account = account;
 //  }
  isAllowed(){
  	return true;
  }

  get value() {
    return this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('snow-surfer');
console.log('Starting Balance:', myAccount.balance);

const t3 = new Deposit(120.00, myAccount);
t3.commit();



const t1 = new Withdrawal(50.25, myAccount);
t1.commit();


const t2 = new Withdrawal(100.00, myAccount);
t2.commit();




console.log('Balance:', myAccount.balance);
