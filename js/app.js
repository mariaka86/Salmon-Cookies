'use strict';
console.log('js connected');
let parentElement = document.getElementById('store-location-data');
let hours = [ ' 6am ', ' 7am ', ' 8am ', ' 9am ', '10am', '11am','  12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '  7pm ', ' 8pm '];
function Store(storeName,minCustomer,maxCustomer,averageCookies){
  this.storeName = storeName;
  this. minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCookies=averageCookies;
  this.totalDailyCookies = 0;
  this.cookiesPerHour=[];
}
//helper function
function avgcustomerHourly(minCustomer, maxCustomer) {
  return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
}
Store.prototype.setCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(avgcustomerHourly(this.minCustomer, this.maxCustomer) * this.averageCookies);
  }
};
let tHead = document.createElement('tr');
parentElement.appendChild(tHead);
let tableNameHead = document.createElement('th');
tableNameHead.textContent = ('Locations');
tHead.appendChild(tableNameHead);
//getting the hours
for(let i =0; i< hours.length; i++){
  let tableHeadHours= document.createElement('th');
  tableHeadHours.textContent= hours[i];
  tHead.appendChild(tableHeadHours);
}
Store.prototype.render = function(){
  this.setCookies();
  let storeNameRow = document.createElement('tr');
  parentElement.appendChild(storeNameRow);
  let storeNameHead=document.createElement('th');
  // adding the names/data of the store to table data
  storeNameHead.textContent= this.storeName;
  storeNameRow.appendChild(storeNameHead);
  for (let i = 0; i < hours.length; i++) {
    this.totalDailyCookies += this.cookiesPerHour[i];
    console.log(this.cookiesPerHour[i]);
    let storeCell = document.createElement('td');
    storeCell.textContent = this.cookiesPerHour[i];
    storeNameRow.appendChild(storeCell);
  }
  let totalStoreCookies= document.createElement('th');
  totalStoreCookies.textContent = this.totalDailyCookies;
  storeNameRow.appendChild(totalStoreCookies);
};
let totalHeading = document.createElement('th');
totalHeading.textContent=('Total');
tHead.appendChild(totalHeading);


Store.prototype.renderFooter = function(){



  let grandTotal = 0;
  for(let i = 0; i < hours.length; i++){
    let hourlyTotal = 0;
    //go through the cities
    console.log(allStores);
    for(let j = 0; j < allStores.length; j++){
      hourlyTotal = hourlyTotal + allStores[j].cookieTotal[i];
      console.log(':rocket: ~ file: app.js:87 ~ hourlyTotal:', hourlyTotal);
      //adding up the grand total
    }
    grandTotal += hourlyTotal;
    //get it out to the page appending it
    let hourlyTotalTd = document.createElement('td');
    hourlyTotalTd.textContent = hourlyTotal;
    footerRow.appendChild(hourlyTotalTd);
  }
  let grandTotalTd = document.createElement('td');
  grandTotalTd.textContent = grandTotal;
  footerRow.appendChild(grandTotalTd);
  tFoot.appendChild(footerRow);
};
let storeOne = new Store('Seattle', 23, 65, 6.3);
let storeTwo = new Store('Tokyo',3,24,1.2 );
let storeThree = new Store('Dubai',11,38,3.7);
let storeFour = new Store('Paris',20,38,2.3);
let storeFive = new Store('Lima',2,16,4.6);
let allStores = [storeOne, storeTwo, storeThree,storeFour,storeFive];
console.log(':rocket: ~ file: app.js:43 ~ allStores:', allStores);
for(let i = 0; i < allStores.length; i++){
  allStores[i].render();
}
