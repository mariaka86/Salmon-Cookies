/*
  FILE app.js
  date 2022-06-27
*/
'use strict';
function Store (name ,minCust,maxCust,averCooks,hourlySales,TotDailyCooks){
  this.name = storeName;
  this.minCust = minimum;
  this.maxCust = maximum;
  this.averCooks = averageCookies;
  this.hourlySales = hourlySales;
  this.TotDailyCooks =TotDailyCooks;
  
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

};
























// Global Variables?
let locationCountries;
let openHours =['6am','7am', '8am','9am','10am', '11am','12pm','1pm' ,'2pm','3pm' ,'4pm' ,'5pm' ,'6pm','7pm'];

 




//location names Seattle Tokyo	Dubai  Paris	 Lima



function initialize(){
  console.log('in initialize()');

  locationCountries=[];

  let seattleCookie={
    name:'Seattle',
    minCust:23,
    maxCust:65,
    averCooks:6.3,
    hourlySales:[],
    TotDailyCooks:0,
    getHourlySales:function(){
      for (let i=0; i< openHours.length; i++){
        console.log('hourlySales'+i);
        this.hourlySales.push(getRandomCustomer(this.minCust, this.maxCust));

      }
      console.log('get customers per hour');
    },

  };
  locationCountries.push(seattleCookie);

  displayAvg();

  let tokyoCookie ={
    name:'Tokyo',
    minCust:3,
    maxCust:24,
    averCooks:1.2,
    hourlySales:[],
    TotDailyCooks:0,
    getHourlySales(){
      for (let i=0; i< openHours.length; i++){
        console.log('tokyo'+i);
        this.hourlySales.push(getRandomCustomer(this.minCust, this.maxCust));
      }
    },

  };
  locationCountries.push(tokyoCookie);


  let dubaiCookie ={
    name:'Dubai',
    minCust:11,
    maxCust:38,
    averCooks:3.7,
    hourlySales:[],
    TotDailyCooks:0,
    getHourlySales(){
      for (let i=0; i< openHours.length; i++){
        this.hourlySales.push(getRandomCustomer(this.minCust, this.maxCust));
      }
    }
  };
  locationCountries.push(dubaiCookie);

  let parisCookie={

    name:'Paris',
    minCust:20,
    maxCust:38,
    averCooks:2.3,
    hourlySales:[],
    TotDailyCooks:0,
    getHourlySales(){
      for (let i=0; i< openHours.length; i++){
        this.hourlySales.push(getRandomCustomer(this.minCust, this.maxCust));
      }
    }

  };
  locationCountries.push(parisCookie);

  let limaCookie={
    name:'Lima',
    minCust:2,
    maxCust:16,
    averCooks:6.3,
    hourlySales:[],
    TotDailyCooks:0,
    getHourlySales(){
      for (let i=0; i< openHours.length; i++){
        this.hourlySales.push(getRandomCustomer(this.minCust, this.maxCust))
      }
    },

  };
  locationCountries.push(limaCookie);


  /**
 *getting a random amount of customers
 *
 * @param {number } min - the minimum number of hourly customers
 * @param {number} max - the maximum number of hourly customers
 * @returns {number} - the average number of customers/hour
 */
  function getRandomCustomer(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);

  }

  
  // add li to display lists


  function buildCookieLocations(place) {
  // Use the document object to create an article element
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    h2.innerText = place.name;
    article.appendChild(h2);
    // Add the place as a paragraph
    let p = document.createElement('p');
    p.innerText = `Open hours are ${place.hours}:`;
    article.appendChild(p);
    // list of hours
    let ul = document.createElement('ul');
    for (let i = 0; i < place.hours.length; i++) {
      let li = document.createElement('li');
      li.innerText = place.openHours[i];
      ul.appendChild(li);
    }
  }
}













