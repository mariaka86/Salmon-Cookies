/*
  FILE app.js
  date 2022-06-27
*/
'use strict';
console.log('app is connected');

// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.
//step 1
let storeHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let storeSites =[];




//step 2
function Store(storeLocation , minimumCust, maximumCust, avgCookPerCust){
  this.name = storeLocation;
  this.minCust = minimumCust;
  this.maxCust = maximumCust;
  this.avgCookPerCust = avgCookPerCust;
  this.averageCookiesPerHour = [];
  this.cookiesSold =[];
  this.TotDailyCooks = 0;
  Store.storeHours.push(this);
}


Store.prototype.getHourlySales = function(){
  return Math.ceil(Math.randomCustomer() * (this.maxCust - this.minCust) + this.minCust);
  
};

function randomCustomer(minCust, maxCust){
  return Math.floor (Math.random() * (maxCust - minCust +1) + minCust);

}

// Store.prototype.getAverCooks= function(){
//   let averCooks= Math.floor((Math.random() * this.hours.length));
//   console.log('openHours:', averCooks);
// };









// ShamanCookieStores.prototype.numOfCustPerHour = function() {
//   return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// };
// ShamanCookieStores.prototype.numOfCookiesPerHour = function() {
//   for(var i=0; i< hours.length; i++){
//     this.cookiesSold[i]= Math.floor(this.numOfCustPerHour() * this.averageSales);
//   }
// };




















// finding the 'container' in sales.html
Store.prototype.render = function(){
  let parentElement = document.getElementById('container');
  console.log(parentElement);
  let article = document.createElement('article');
  parentElement.appendChild(article);
  // creating a h2, paragraph, ul and li element
  let h2El = document.createElement('h2');
  h2El.textContent= this.storeLocation;
  parentElement.appendChild('eLh2');
  // adding unordered list onto article.
  let elP = document.createElement('p');
  elP.textContent= 'Welcome to our store in'+ this.storeLocation;
  article.appendChild(elP);
  // <ul>
  //   <li></li>
  // </ul>
  // create ul
  let elUl = document.createElement('ul');

  article.appendChild(elUl);
  // adding listed items onto the unordered list using js

  for(let i = 0; i < this.openHours.length; i++){
    let eLLi = document.createElement('li');

    eLLi.textContent = this .openHours[i];
    elUl.appendChild(eLLi);

  }
  //insert an image?







  //create a table
  let storeTable = document.getElementById('salesTable');
  let storeRow = document.createElement('tr');
  let cellName = document.createElement ('td');
  cellName.textContent = this.storeLocation;
  storeRow.appendChild(cellName);

  let maxiCusto = document.createElement('td');
  maxiCusto.textContent = 'This is the maximum amount of customers';
  storeRow.appendChild(maxiCusto);

  let miniCusto= document.createElement('td');
  miniCusto.textContent = 'This is the minimum amount of customer';
  storeRow.appendChild(miniCusto);

  let avgCooki = document.createElement('td');
  avgCooki.textContent ='Average cookie per sale';
  storeRow.appendChild(avgCooki);
  storeTable.appendChild(storeRow);
};



//Step 3
Store.storeSites= [];

let seattle = new Store('Seattle', 23, 65, 6.3);

let tokyo = new Store('Tokyo',3,24,1.2 );

let dubai = new Store('Dubai',11,38,3.7);

let paris = new Store('Paris',20,38,2.3);

let lima = new Store('Lima',2,16,4.6);




let allStores = [seattle,tokyo,dubai,paris,lima];
console.log('Our Stores', allStores);












