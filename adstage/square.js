/*global window, console, adstage, TweenLite, TimelineLite*/

// Square object constructor - takes a params object {}
function Square(params){
  function checkParams(self){
    if(self.params){
      if(self.params.width){
        self.div.style.width = self.params.width + 'px';
      }else{
        self.div.style.width = adstage.stage.dimensions.w + 'px';
      }
      if(self.params.height){
        self.div.style.height = self.params.height + 'px';
      }else{
        self.div.style.height = adstage.stage.dimensions.h + 'px';
      }
      if(self.params.color){self.div.style.backgroundColor=self.params.color;}
      if(self.params.outline == true || self.params.outline == 'yes' || self.params.outline == 'black'){self.div.style.border='1px solid black';}
      if(self.params.image && typeof self.params.image === 'string'){
        self.addImage(self.params.image);
      }
      self.div.style.left = self.params.x + 'px' || '0px';
      self.div.style.top = self.params.y + 'px' || '0px';
      self.hide = self.params.hide || false;
      self.div.style.visibility = (self.hide === true ? 'hidden' : 'visible');
    }
  }
  this.stage = adstage.stage;
  var stage = this.stage;
  var sq = document.createElement('div');
  var _self = this;
  this.type = 'square';
  this.params = params || 'undefined';
  this.div = sq;
  sq.classList.add('sq');
  if(window.adstage){
    checkParams(this);
    if(this.params && this.params.id){this.div.id = this.params.id;} //else{sq.id = 'sq' + stage._objcount;}
    this.id = this.div.id;
  }else{
    console.error('No "Stage" object initialized.');
  }
}

// get the id value of the Square's div 
Square.prototype.getID = function(){
  if(this.type && this.type === 'square'){
    return this.div.id;
  }
};

// set a Square instance's id after creating a Square instance 
Square.prototype.setID = function(id){
  if(this.type && this.type === 'square'){
    this.div.id = id;
  }
};

// adds an image to the div of a Square object
Square.prototype.addImage = function(src){
  var _self = this, img, stage = _self.stage;
  if(!_self.attachedImage){
    img = new Image(_self.params.width || adstage.stage.dimensions.w);
    img.src = src ? 'images/' + src : console.error('Please supply an image src.');
    this.attachedImage = img;
    this.attachedImage.style.opacity = 0;
    this.div.appendChild(img);
    stage._images.push(img);
    console.log('images added: ' + stage._images.length);
    img.onload = function(){
      stage._loadedimages.push(img);
      console.log('images loaded: ' + stage._loadedimages.length);
      if(stage._loadedimages.length === stage._images.length){
        stage._adloaded = true;
        stage.start();
      }
    };
  }else{
    console.error('Image already set on "' + _self.id + '".');
  }
};

// adds an event listener on a Square object 
Square.prototype.on = function(evtType,cb){
  this.div.style.cursor = 'pointer';
  this.div.addEventListener(evtType,cb);
};

// TweenLite.to 
Square.prototype.to = function(duration,props,option){
  props.force3D=false;
  if(option && option === 'img'){
    TweenLite.to(this.attachedImage, duration, props);
  }else{
    TweenLite.to(this.div, duration, props);
  }
};

// TweenLite.from  
Square.prototype.from = function(duration,props,option){
  if(this.div.style.visibility === 'hidden'){
    this.hide = false;
    this.div.style.visibility = 'visible';
  }
  props.force3D=false;
  if(option && option === 'img'){
    TweenLite.from(this.attachedImage, duration, props);
  }else{
    TweenLite.from(this.div, duration, props);
  }
};

// universal CSS property setter 
Square.prototype.setProp = function(prop,val){
  this.div.style[prop] = val;
};

// universal CSS property getter 
Square.prototype.setProp = function(prop){
  return this.div.style[prop];
};

// // sets opacity or alpha of the div
Object.defineProperty(Square.prototype, 'opacity', {
  get: function(){
    return this.div.style.opacity;
  },
  set: function(val){
    this.div.style.opacity = val;
  }
});

// sets opacity or alpha of the div
Object.defineProperty(Square.prototype, 'alpha', {
  get: function(){
    return this.div.style.opacity;
  },
  set: function(val){
    this.div.style.opacity = val;
  }
});

// define an outline value (true, 'black', 'yes', or a number value for line thickness)
Object.defineProperty(Square.prototype, 'outline', {
  set: function(val){
    var _this = this;
    if((val == true || val == 'black' || val == 'yes') && val !== parseInt(val, 10)){
      _this.div.style.border = '1px solid black';
    }else{
      _this.div.style.border = val + 'px solid black';
    }
  }
});

// sets the inner div's 'x' or top property
Object.defineProperty(Square.prototype, 'x', {
  set: function(val){
    this.div.style.left = val + 'px';
  }
});

// sets the inner div's 'y' or top property
Object.defineProperty(Square.prototype, 'y', {
  set: function(val){
    this.div.style.top = val + 'px';
  }
});

// setter / getter for div color
Object.defineProperty(Square.prototype, 'color', {
  get: function(){
    return this.div.style.backgroundColor;
  },
  set: function(val){
    this.div.style.backgroundColor = val;
  }
});

// returns style properties of the div
Object.defineProperty(Square.prototype, 'style', {
  get: function(){
    return this.div.style;
  }
});

// set height of the inner div on a Square object 
Object.defineProperty(Square.prototype, 'width', {
  get: function(){
    var w = this.div.style.width || 0;
    return this.div.style.width;
  },
  set: function(val){
    var _self = this;
    if(typeof _self.params !== 'undefined' && !_self.params.width){
      _self.div.style.width = parseInt(val,0) + 'px';
    }
  }
});

// set height of the inner div on a Square object 
Object.defineProperty(Square.prototype, 'height', {
  set: function(val){
    var _self = this;
    if(typeof _self.params !== 'undefined' && !_self.params.height){
      _self.div.style.height = parseInt(val,0) + 'px';
    }
  }
});

// returns the attached image on a Square-object div
Object.defineProperty(Square.prototype, 'image', {
  get: function(){
    var _self = this;
    if(_self.attachedImage){
      return _self.attachedImage;
    }
  }
});

// return TweenLite-compatible name string 
Object.defineProperty(Square.prototype, 'tw', {
  get: function(){
    return '#' + this.div.id;
  }
});

// set 'buttonMode' similar to Flash -- sets the cursor hand on a Square object instance
Object.defineProperty(Square.prototype, 'buttonMode', {
  set: function(val){
    var self = this;
    if(val === true){
      self.div.style.cursor = 'pointer';
    }
  }
});

// set visibility of Square inner div
Object.defineProperty(Square.prototype, 'visible', {
  set: function(val){
    var self = this;
    if(val === true){
      self.div.style.visibility = 'visible';
    }else if(val === false){
      self.div.style.visibility = 'hidden';
    }
  }
});





