var customerName = 'bob';

function upperCaseCustomerName() {
   return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
   // var bestCustomer = '';
   return bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
   return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Abdo';
function changeLeastFavoriteCustomer() {
   return leastFavoriteCustomer = 'CHANGE';
}