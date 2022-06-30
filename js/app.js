/*
  FILE app.js
  date 2022-06-27
*/
'use strict';
console.log('app is connected');

function hourlyStoreTotalFooter(){
  let cookieTotal =0;
  let tFoot = document.getElementById('tableFooter');}
let tr= document.createElement('tr');
tFoot.appendChild(tr);

let tdTitle=document.createElement('td');
tdTitle.textContent= 'Totals';
tr.appendChild(tdTitle);


for(let i =0; i < cookiesTotalHour.length; i++) {
  let cookiesForThisHour = cookiesTotalHour[i];
  cookieTotal += cookiesForThisHour;
  let cookieHourlyTotals=  document.createdElement('td');
  cookieHourlyTotals.textContent = cookiesForThisHour;
  tr.appendChild(cookieHourlyData);
}

let cookieTotals = document.createElement('td');
cookieTotals.textContent = cookieTotal;
tr.appendChild(cookieTotals);




//step 1
let storeHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let cookiesTotalHour =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


//step 2
function Store(storeLocation , minimumCust, maximumCust, avgCookPerCust){
  this.name = storeLocation;
  this.minCust = minimumCust;
  this.maxCust = maximumCust;
  this.avgCookPerCust = avgCookPerCust;
  this.cookiesSold =[];
  this.numOfCookiesPerHour();
  Store.storeSites.push(this);
}

Store.storeSites=[];

Store.prototype.numOfCookiesPerHour = function(){
  for(let i=0; i < storeHours.length; i++){
    this.cookiesSold[i]= Math.ceil(this.getRandomCustomersPerHour()* this.avgCookPerCust);
  }
};


Store.prototype.getRandomCustomersPerHour= function(){
  return Math.ceil(Math.random()* (this.maxCust- this.minCust)*this.minCust);
};


// finding the 'container' in sales.html
Store.prototype.render = function(){

  let cookieTotal= 0;

  // let parentElement = document.getElementById('container');
  // console.log(parentElement);
  let tbody = document.getElementById ('dataOfStore');
  let tr =document.createElement('tr');
  tbody.appendChild (tr);
  // adding table data using store locations
  let tdStoreLocation = document.createElement('td');
  tdStoreLocation.textContent = this.storeLocation;
  tr.appendChild(tdStoreLocation);


  // store hours
  for(let i = 0; i < storeHours.length; i++){
    let cookiesForThisHour = this.cookiesSold[i];
    cookiesTotalHour[i] += cookiesForThisHour;
    cookieTotal += cookiesForThisHour;

    let cookieHourlyData = document.createElement('td');
    cookieHourlyData.textContent = cookiesForThisHour;
    tr.appendChild(cookieHourlyData);
  }
  let cookieTotals = document.createElement('td');
  cookieTotals.textContent = cookieTotal;
  tr. appendChild(cookieTotals);
};



Store.renderAll= function(){
  for(let i = 0; i < Store.storeSites.length; i++){
    Store.storeSites[i].render();
  }

  hourlyStoreTotalFooter();
};


//Step 3

let seattle = new Store('Seattle', 23, 65, 6.3);

let tokyo = new Store('Tokyo',3,24,1.2 );

let dubai = new Store('Dubai',11,38,3.7);

let paris = new Store('Paris',20,38,2.3);

let lima = new Store('Lima',2,16,4.6);




let allStores = [seattle,tokyo,dubai,paris,lima];
console.log('Our Stores', allStores);

Store.renderAll();












