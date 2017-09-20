/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
/*module.exports = function( ceiling ) {
  // do work here
  var num = 0;
  function checker (){
    for(var i=0; i<=ceiling; i++){
      if(num % i === 0 ){
        return false ;
      }
    }
  }if(checker === false){
    num++;
  }

};
*/

//6090ms
module.exports = function( ceiling ) {
  var num = 2;
  function checker(){
    for(var i=2; i<=ceiling; i++){
      if(num % i !== 0){
        return false;
      }
    }
  }
  while (checker() === false){
    num ++;
  }
  return num;
};

console.log(module.exports(10));




//ED's Solution (6230ms)
/*module.exports = function (ceiling){
  let result;
  while(!result);
    let allFactorsPass = true;

    for(let i=0; i<factors.length; i++){
      if(num % factors[i] !== 0){
        allFactorsPass = false;
        break;
      }
    }

  if(allFactorsPass){
    result = num;
  }else{
    num++;
  }
};*/


module.exports = function (ceiling){
  let result;
  while(!result);
    let allFactorsPass = true;

    for(let i=0; i<factors.length; i++){
      if(num % factors[i] !== 0){
        allFactorsPass = false;
        break;
      }
    }

  if(allFactorsPass){
    result = num;
  }else{
    num++;
  }
};