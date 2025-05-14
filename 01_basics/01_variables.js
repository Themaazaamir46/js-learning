const accountId = 12345
let accountEmail = "maaz@google.com"
var accountPassword = "Maaz@123"
accountCity = "Hyderabad"

// accountId = 99990 // not allowed
// it will throw an error when you execute -> console.log(accountId);

accountEmail = "aamir.mz@google.com"
accountPassword = "mzmzmz"
accountCity = "Begumpet"

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
Do not use var ; It doesn't know block scope and functional scope
*/

// Consider there is another variable accountBalance whose value is still unknown
let accountBalance;

console.table([accountId, accountEmail, accountPassword, accountCity, accountBalance]);
// It will print as Undefined