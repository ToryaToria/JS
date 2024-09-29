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
  
 let pl = [firstFootballer, secondFootballer, thirdFootballer];

let getStatistics = function (players) {
  let coeff = 0;
    let perc = 0;
    let summ = 0;
    
  for (let i = 0; i< players.length; i++) {
summ = summ + players[i].goals;
}
    
    console.log('summ = ' + summ);
    
  for (let i = 0; i< players.length; i++) {
   
    coeff = players[i].goals * 2 + players[i].passes;
    perc = Math.round(players[i].goals * 100 / summ);
    
    console.log('coeff = ' + coeff);
    console.log('perc = ' + perc);

    players[i].coefficient = coeff;
    players[i].percent = perc;

}
return players;
};
