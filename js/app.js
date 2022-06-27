/*
  FILE app.js
  date 2022-06-27
*/
"use strict";
// Global Variables?
var locationCountries;
var hours =["6am","7am", "8am","9am","10am", "11am","12pm","1pm" ,"2pm","3pm" ,"4pm" ,"5pm" ,"6pm","7pm"];


//location names Seattle Tokyo	Dubai  Paris	 Lima
//Within your javascript file, create separate JS object literals for each shop location.


function initialize(){
    console.log('in initialize()');
    


  locationCountries=[];

let seattleCookie={
name:"Seattle",
minCust:'23',
maxCust:"65",
averCooks:"6.3",
hourlySales:[],
TotDailyCooks:0,
calHourlySales(){
    for (let i=0; i< hours.length; i++){
      console.log("seattle"+i);
        this.hourlySales.push(getRandomCustomer(this.minCust, this.maxCust))
    }
  },

};
location.push(seattleCookie);

displayAvg();

let tokyoCookie ={
    name:"Tokyo",
    minCust:'3',
    maxCust:"24",
    averCooks:"1.2",
    hourlySales:[],
    TotDailCooks:0,
    calcHourlySales(){
        for (let i=0; i< hours.length; i++){
          console.log("tokyo"+i);
            this.hourlySales.push(getRandomCustomer(this.minCust, this.maxCust))
        }
      },

};


let dubaiCookie ={
  name:"Dubai",
  minCust:'11',
  maxCust:'38',
  averCooks:"3.7",
  hourlySales:[],
  TotDailCooks:0,
  calcHourlySales(){
      for (let i=0; i< hours.length; i++){
          this.hourlySales.push(getRandomCustomer(this.minCust, this.maxCust))
      }
    },



};

let parisCookie={

  name:"Paris",
  minCust:'20',
  maxCust:"38",
  averCooks:"2.3",
  hourlySales:[],
  TotDailCooks:0,
  calcHourlySales(){
      for (let i=0; i< hours.length; i++){
          this.hourlySales.push(getRandomCustomer(this.minCust, this.maxCust))
      }
    },

};


let limaCookie={
  name:"Lima",
  minCust:'2',
  maxCust:"16",
  averCooks:"6.3",
  hourlySales:[],
  TotDailCooks:0,
  calcHourlySales(){
      for (let i=0; i< hours.length; i++){
          this.hourlySales.push(getRandomCustomer(this.minCust, this.maxCust))
      }
    },




};

/**
 *getting a random amount of customers
 *
 * @param {number } min - the minimum number of hourly customers
 * @param {number} max - the maximum number of hourly customers
 * @returns {number} - the average number of customers/hour
 */
function getRandomCustomer(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
  }
}


// add li to display lists












