function Square(params){
  //constructor
  var sq = document.createElement('div');
  this.div = sq;
  //square class
  sq.classList.add('sq');
  if(params){
    //set default dimensions
    if(params.width){ sq.style.width = params.width + 'px'; }
    if(params.height){ sq.style.height = params.height + 'px'; }
    //set default color
    if(params.color){sq.style.backgroundColor=params.color;}
    //set border if 'outline'
    if(params.outline == true || params.outline == 'yes' || params.outline == 'black'){sq.style.border='1px solid black';}
  }
  
  adstage.count++;
  
  if(window.adstage){
    //sq.id = (params.id ? params.id : 'sq' + parseInt(window.adstage.count));
    if(params && params.id){sq.id = params.id;}else{sq.id = 'sq' + adstage.count;}
    this.id = sq.id;
  }else{
    console.error('No "Stage" object initialized.');
  }
  
  
  
}

// optional parameters to pass in to Square object 
// {bgColor, width, height, id}

Square.prototype.on = function(evtType,cb){
  this.div.style.cursor = 'pointer';
  this.div.addEventListener(evtType,cb);
}

Square.prototype.setProp = function(prop,val){
  this.div.style[prop] = val;
}

