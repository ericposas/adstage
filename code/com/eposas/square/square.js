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

// universal CSS property setter 
Square.prototype.setProp = function(prop,val){
  this.div.style[prop] = val;
}

// how to create a proper getters-setters 
Object.defineProperty(Square.prototype, 'opacity', {
  get: function(){
    return this.div.style.opacity;
  },
  set: function(val){
    this.div.style.opacity = val;
  }
});

Object.defineProperty(Square.prototype, 'alpha', {
  get: function(){
    return this.div.style.opacity;
  },
  set: function(val){
    this.div.style.opacity = val;
  }
});

Object.defineProperty(Square.prototype, 'outline', {
  set: function(val){
    this.div.style.border = val + 'px solid black';
  }
});

Object.defineProperty(Square.prototype, 'x', {
  set: function(val){
    this.div.style.left = val + 'px';
  }
});

Object.defineProperty(Square.prototype, 'y', {
  set: function(val){
    this.div.style.top = val + 'px';
  }
});

Object.defineProperty(Square.prototype, 'color', {
  set: function(val){
    this.div.style.backgroundColor = val;
  }
});

Object.defineProperty(Square.prototype, 'style', {
  get: function(){
    return this.div.style;
  }
});

