/*global TweenLite*/

var U = {};

// removes the specified number of elements from an array 
U.pop = function(arr, num){
  var i =0;
  while(i < num){
    arr.pop();
    i+=1;
  }
};

// returns new array, with elements within specified range
U.arr = function(arr, min, max){
  var a = [];
  for(min;min<max;min+=1){
    a.push(arr[min]);
  }
  return a;
};

// shorthand TweenLite.delayedCall() 
U.d = function(d, cb){
  TweenLite.delayedCall(d, cb);
};

// calculate transformOrigin -- halves the inputted number
U.torg = function(x,y){
  return (x/2) + 'px ' + (y/2) + 'px';
};

// returns any property value of a single Square instance or iterates through an array/collection of Squares returning the specified prop of each 
U.getProp = function(square, prop){
  if(typeof square === 'object'){
    var i,list=[];
    for(i=0;i<square.length;i+=1){
      if(square[i].type === 'square'){
        list.push(square[i][prop]);
      }
    }
    return list;
  }else if(square.type === 'square'){
    return square[prop];
  }
};

