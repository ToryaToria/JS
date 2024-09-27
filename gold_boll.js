let firstFootballer = {
  name : "Кекс",
  goals : 3,
  passes :7,
};

let secondFootballer = {
  name : "Рудольф",
  goals  : 5,
  passes :2,
  };

let thirdFootballer = {
  name : "Рокки",
  goals : 15,
  passes : 2,
  };

let footballers = [firstFootballer, secondFootballer, thirdFootballer];

let getStatistics = function (players) {
   let coeff = 0;
    let perc = 0;
    let summ = 0;
    
      for (let i = 0; i< footballers.length; i++) {
summ = summ + footballers[i].goals;
}
    
    // console.log('summ = ' + summ);
    
  for (let i = 0; i< footballers.length; i++) {
   
    coeff = footballers[i].goals * 2 + footballers[i].passes;
    perc = Math.round(footballers[i].goals * 100 / summ);
    
    // console.log('coeff = ' + coeff);
    // console.log('perc = ' + perc);

    footballers[i].coefficient = coeff;
    footballers[i].percent = perc;

}
return footballers;
};

getStatistics();
console.log(footballers);
