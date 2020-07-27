const currencyOne = document.querySelector("#currency-one");
const amountOne = document.querySelector(".amount-one");
const currencyTwo = document.querySelector("#currency-two");
const amountTwo = document.querySelector(".amount-two");
const swapBtn = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

const calculate = () => {
  fetch(
    `https://api.ratesapi.io/api/2010-01-12?symbols=${currencyOne.value},GBP `
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};
calculate();
