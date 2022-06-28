/*
  FILE app.js
  date 2022-06-27
*/



'use strict';
console.log('app is connected');

// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.

function Store(storeLocation , minimumCust, maximumCust, avgCust){
  this.name = storeLocation;
  this.minCust = minimumCust;
  this.maxCust = maximumCust;
  this.avgCust = avgCust;
  this.averCooks = [];
  this.hourlySales = [];
  this.TotDailyCooks = 0;
}

Store.prototype.setCustPerHr = function(){
  this.CustPerHr = randomCustomer(23,65) + 'cookies.';
};
 
function randomCustomer(minCust, maxCust){
  return Math.floor (Math.random() * (maxCust - minCust +1) + minCust);

}

Store.prototype.openHours = function(){
  let randomIndexArray= Math.floor((Math.random() * this.hours.length));
  console.log('openHours:', randomIndexArray);
};


// finding the 'container' in sales.html
Store.prototype.render = function(){
  let parentElement = document.getElementById('container');
  console.log(parentElement);
  let article = document.createElement('article');
  parentElement.appendChild(article);
  // creating a h2, paragraph, ul and li element
  let eLh2 = document.createElement('h2');
  eLh2.textContent= this.storeName;
  parentElement.appendChild('eLh2');
  // adding unordered list onto article.
  let eLp = document.createElement('p');
  eLp.textContent= 'Welcome to our store in'+ this.storeName;
  article.appendChild(eLp);
  // <ul>
  //   <li></li>
  // </ul>
  // create ul
  let eLUl = document.createElement('ul');

  article.appendChild(eLUl);
  // adding listed items onto the unordered list using js

  for(let i = 0; i < this.openHours.length; i++){
    let eLLi = document.createElement('li');

    eLLi.textContent = this .openHours[i];
    eLUl.appendChild(eLLi);

  }
  //insert an image?







  //create a table
  let storeTable = document.getElementById('salesTable');
  let storeRow = document.createElement('tr');
  let cellName = document.createElement ('td');
  cellName.textContent = this.storeName;
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





let seattle = new Store('Seattle', 23, 65, 6.3);

// let tokyo = new Store();

// let dubai = new Store();

// let paris = new Store();

// let lima = new Store();


// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6



let allStores = [seattle];
console.log('Our Stores', allStores);












