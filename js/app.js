/*
  FILE app.js
  date 2022-06-27
*/
'use strict';
console.log('app is connected');


let parentElement= document.getElementById('store-location-data');
let hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];






function Store(storeLocation , minCust, maxCust, averageCookies ){
  this.storeLocation = storeLocation;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookies= averageCookies;
  this.totalDailyCookies = 0;
  this.cookiesPerHour = [];
  // Store.storeSites.push(this);
}


function getRandomCustomersPerHour(minCust,maxCust){
  return Math.ceil(Math.random()* (maxCust- minCust)+minCust);
}



Store.prototype.cookiesBought = function(){
  for(let i=0; i < hours.length; i++){
    this.cookiesPerHour[i]= Math.ceil(getRandomCustomersPerHour(this.minCust, this.maxCust) * this.averageCookies);
  }
};



let tHead = document.createElement('tr');
parentElement.appendChild(tHead);
let tableHeadLocationName = document.createElement('th');
tableHeadLocationName.textContent='Places';
tHead.appendChild(tableHeadLocationName);
//getting hours

for(let i =0; i< hours.length; i++){
  let tableHeadHours = document.createElement('th');
  tableHeadHours.textContent = hours[i];
  tHead.appendChild(tableHeadHours);
}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo',3,24,1.2 );
let dubai = new Store('Dubai',11,38,3.7);
let paris = new Store('Paris',20,38,2.3);
let lima = new Store('Lima',2,16,4.6);




Store.prototype.renderStoreInfo = function(){
  this.cookiesBought();

  let storeNameRow = document.createElement('tr');
  parentElement.appendChild(storeNameRow);


  let storeHead=document.createElement('th');
  storeHead.textContent= this.storeLocation;
  storeNameRow.appendChild(storeHead);

  for(let i = 0; i < hours.length; i++){

    this.totalDailyCookies += this.cookiesPerHour[i];
    console.log(this.cookiesPerHour);
    let storeDataCell = document.createElement('td');
    storeDataCell.textContent= this.cookiesPerHour[i];
    storeNameRow.appendChild(storeDataCell);
  }
  let headingTotal = document.createElement('td');
  headingTotal.textContent = this.totalDailyCookies;
  storeNameRow.appendChild('headingTotal');
};//end main render()


// start footer render()

Store.prototype.renderFooter= function(){
  let tFoot = document.getElementById('tableFooter');
  let footerRow = document.createElement('tr');
  let totalTitle = document.createElement('th');
  totalTitle.textContent = 'Total';
  footerRow.appendChild(totalTitle);


  let grandTotal = 0;
  for(let i = 0; i < hours.length; i++){
    let hourlyTotal = 0;

    for(let j = 0; j < allStores.length; j++){
      hourlyTotal = hourlyTotal + allStores[j].cookiesPerHour[i];
    }
    grandTotal += hourlyTotal;
    let hourlyTotalTd = document.createElement('td');
    hourlyTotalTd.textContent = hourlyTotal;
    tFoot.appendChild(hourlyTotalTd);
  }

let grandTotalRow = documen


  let allStores = [seattle,tokyo,dubai,paris,lima];
  for(let i = 0; i<allStores.length; i++){
    allStores[i].renderStoreInfo();
  }


};
























// function allowSubmit(evt){
//   evt.preventDefault();
//   // retrieving form id's and connecting them to javascript counteparts.
//   let storeLocation = document.getElementById ('storeLocation').value;
//   let minimumCust = document.getElementById('minimumCust').value;
//   let maximumCust = document.getElementById('maximumCust').value;
//   let avgCookPerCust = document.getElementById ('avgCookPerCust').value;

//   let storePlace  = new Store(storeLocation , minimumCust, maximumCust, avgCookPerCust);
//   // adding new stores to table
//   storePlaces.push(storePlace);
//   Store.renderAll();
// }



/**
 *
 */
// function addLocation(event) {
//   event.preventDefault();
//   console.log('In addLocation()');
//   let good = true; // flags whether the form input is good
//   let storeLocation = document.getElementById('storeLocation').value.trim();
//   if (storeLocation === '') {
//     // Name is required!
//     good = false;
//     let span = document.getElementById('storeLocationError');
//     span.innerText = 'Location cannot be blank!';
//     let br = document.createElement('br');
//     span.appendChild(br);
//   }
//   let minimumCust = document.getElementById('minimumCust').value;
//   minimumCust = minimumCust.trim();
//   let maximumCust = document.getElementById('maximumCustomer');
//   let avgCookPerCust = document.getElementById('average cookies per customer');
//   if (good) {
//     let store = new Store(storeLocation , minimumCust, maximumCust, avgCookPerCust);
//     form.reset();
//     storePlaces.push(store);
//     render(store);

//   }
// }

/**
 *
 */











