/*
  FILE app.js
  date 2022-06-27
*/
'use strict';
console.log('app is connected');
//debugger;

/**
 * 
 */
function hourlyStoreTotalFooter(){
  let cookieTotal =0;
  let tFoot = document.getElementById('tableFooter');
  let tr= document.createElement('tr');
  tFoot.appendChild(tr);

  let tdTitle=document.createElement('td');
  tdTitle.textContent= 'Totals';
  tr.appendChild(tdTitle);


  for(let i =0; i < cookiesTotalHour.length; i++) {
    let cookiesForThisHour = cookiesTotalHour[i];
    cookieTotal += cookiesForThisHour;
    let cookieHourlyTotals =  document.createElement('td');
    cookieHourlyTotals.textContent = cookiesForThisHour;
    tr.appendChild(cookieHourlyTotals);// find equivalent value
  }

  let cookieTotals = document.createElement('td');
  cookieTotals.textContent = cookieTotal;
  tr.appendChild(cookieTotals);
}



//step 1 not in a function
let storeHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let cookiesTotalHour =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
let storePlaces;// an array of locations

//step 2 Constructer Function
/**
 *
 * @param {string} storeLocation - this is the name of a city
 * @param {number} minimumCust
 * @param {number} maximumCust
 * @param {number} avgCookPerCust
 */
function Store(storeLocation , minimumCust, maximumCust, avgCookPerCust){
  this.storeLocation = storeLocation;
  this.minCust = minimumCust;
  this.maxCust = maximumCust;
  this.avgCookPerCust = avgCookPerCust;
  this.cookiesSold =[];
  this.numOfCookiesPerHour();
  Store.storeSites.push(this);
}

Store.storeSites=[];//not in a function

/**
 * 
 */
Store.prototype.numOfCookiesPerHour = function(){
  for(let i=0; i < storeHours.length; i++){
    this.cookiesSold[i]= Math.ceil(this.getRandomCustomersPerHour()* this.avgCookPerCust);
  }
};

/**
 * 
 * 
 */
Store.prototype.getRandomCustomersPerHour= function(){
  return Math.ceil(Math.random()* (this.maxCust- this.minCust)*this.minCust);
};// end constructor



/**
 * 
 */
function initialize() {
  console.log('In initialize()');
  //stores that can cause the old ones to be cleared out?
  storePlaces =[];

  render(storePlaces);
  // finding the survey form id in survey html, adding submit button which comes with event listener
  let form = document.getElementById('storeForm');
  form.addEventListener('submit', allowSubmit);
  let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo',3,24,1.2 );
let dubai = new Store('Dubai',11,38,3.7);
let paris = new Store('Paris',20,38,2.3);
let lima = new Store('Lima',2,16,4.6);
let allStores = [seattle,tokyo,dubai,paris,lima];
console.log('Our Stores', allStores);
Store.renderAll();

}


// stop submit button from submitting
/**
 * 
 * @param {*} evt 
 */
function allowSubmit(evt){
  evt.preventDefault();
  // retrieving form id's and connecting them to javascript counteparts.
  let storeLocation = document.getElementById ('storeLocation').value;
  let minimumCust = document.getElementById('minimumCust').value;
  let maximumCust = document.getElementById('maximumCust').value;
  let avgCookPerCust = document.getElementById ('avgCookPerCust').value;

  let storePlaces  = new Store(storeLocation , minimumCust, maximumCust, avgCookPerCust);
  // adding new stores to table
  storePlaces.push(storePlaces);
}





// render survey function

/**
 * 
 * @param {*} storePlaces 
 */
function render(storePlaces){
  let locationTable = document.getElementById('locationTable');
  // clears out old and reloads new records
  locationTable. innerHTML =' ';
  // draws records into empty string

  // loop through storeplaces
  for (let i = 0; i< storePlaces.length; i++) {
    let storePlaces = storePlaces[i];
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = storePlaces.storeLocation;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = storePlaces.minimumCust;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = storePlaces.maximumCust.join(', ');
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = storePlaces.avgCookPerCust;
    tr.appendChild(td);
  }
}
//end




// Render Function

/**
 * 
 */
Store.prototype.render = function(){
  let cookieTotal= 0;
  let tbody = document.getElementById ('dataOfStore');
  let tr =document.createElement('tr');
  tbody.appendChild (tr);

  // adding table data using store locations
  let tdStoreLocation = document.createElement('td');
  tdStoreLocation.textContent = this.storeLocation;
  console.log(this.storeLocation);
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
};//end render()

// Add Button Function

/**
 * 
 */
function addLocation() {
  console.log('In addLocation()');
  let good = true; // flags whether the form input is good
  let storeLocation = document.getElementById('storeLocation').value.trim();
  if (storeLocation === '') {
    // Name is required!
    good = false;
    let span = document.getElementById('storeLocationError');
    span.innerText = 'Location cannot be blank!';
    let br = document.createElement('br');
    span.appendChild(br);
  }
  let minimumCust = document.getElementById('minimum Cust').value();
  minimumCust = minimumCust.trim();
  let maximumCust = document.getElementById('maximum Customer').checked;
  let avgCookPerCust = document.getElementById('average cookies per customer').checked;
  if (good) {
    let storePlaces= new Store(storeLocation , minimumCust, maximumCust, avgCookPerCust);
    storePlaces.push(storePlaces);
    render(storePlaces);

  }
}

/**
 * 
 */
Store.renderAll= function(){
  for(let i = 0; i < Store.storeSites.length; i++){
    Store.storeSites[i].render();
  }

  hourlyStoreTotalFooter();
};
