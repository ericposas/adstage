/*global window, console, adstage*/

function Square(params){
  // constructor
  function checkParams(self){
    if(self.params){
      //set default dimensions
      if(self.params.width){ self.div.style.width = self.params.width + 'px'; }
      if(self.params.height){ self.div.style.height = self.params.height + 'px'; }
      //set default color
      if(self.params.color){self.div.style.backgroundColor=self.params.color;}
      //set border if 'outline'
      if(self.params.outline == true || self.params.outline == 'yes' || self.params.outline == 'black'){self.div.style.border='1px solid black';}
      //set image
      if(self.params.image && typeof self.params.image === 'string'){
        self.addImage(self.params.image);
      }
    }
  }
  // optional parameters to pass in to Square object 
  // {bgColor, width, height, id}
  this.stage = adstage.stage;
  var stage = this.stage;
  var sq = document.createElement('div');
  var _self = this;
  this.type = 'square';
  this.params = params || 'undefined';
  this.div = sq;
  //square class
  sq.classList.add('sq');
  //check stage object 
  if(window.adstage){
    checkParams(this);
    //stage._objcount++;
    if(this.params && this.params.id){this.div.id = this.params.id;} //else{sq.id = 'sq' + stage._objcount;}
    this.id = this.div.id;
  }else{
    console.error('No "Stage" object initialized.');
  }
  //._objcount+=1;
  //this.stage = adstage.stage;
}

Square.prototype.getID = function(){
  if(this.type && this.type === 'square'){
    return this.div.id;
  }
};

Square.prototype.setID = function(id){
  if(this.type && this.type === 'square'){
    this.div.id = id;
  }
};


Square.prototype.addImage = function(src){
  var _self = this, img, stage = _self.stage;
  if(!_self.attachedImage){
    //if(_self.params.width){
    img = new Image(_self.params.width || adstage.stage.dimensions.w);
    //}else{
    //  img = new Image();
    //}
    img.src = src ? 'images/' + src : console.error('Please supply an image src.'); // maybe set 'images' folder in a config file 
    this.attachedImage = img;
    this.attachedImage.style.opacity = 0;
    this.div.appendChild(img);
    stage._images.push(img);
    console.log('images added: ' + stage._images.length);
    img.onload = function(){
      stage._loadedimages.push(img);
      console.log('images loaded: ' + stage._loadedimages.length);
      // _self.attachedImage.style.opacity = 1;
      // waits until images are loaded until displaying them 
      if(stage._loadedimages.length === stage._images.length){
        stage._adloaded = true;
        stage.showImages();
        //stage.showimages();
        // stage.animate();
        
      }
    };
  }else{
    console.error('Image already set on "' + _self.id + '".');
  }
};

Square.prototype.on = function(evtType,cb){
  this.div.style.cursor = 'pointer';
  this.div.addEventListener(evtType,cb);
};
//adds TweenLite.to animation functionality to Square 
Square.prototype.to = function(square,duration,props){
  
};

// universal CSS property setter 
Square.prototype.setProp = function(prop,val){
  this.div.style[prop] = val;
};

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
    var _this = this;
    if((val == true || val == 'black' || val == 'yes') && val !== parseInt(val, 10)){
      _this.div.style.border = '1px solid black';
    }else{
      _this.div.style.border = val + 'px solid black';
    }
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
  get: function(){
    return this.div.style.backgroundColor;
  },
  set: function(val){
    this.div.style.backgroundColor = val;
  }
});

Object.defineProperty(Square.prototype, 'style', {
  get: function(){
    return this.div.style;
  }
});

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

Object.defineProperty(Square.prototype, 'height', {
  set: function(val){
    var _self = this;
    if(typeof _self.params !== 'undefined' && !_self.params.height){
      _self.div.style.height = parseInt(val,0) + 'px';
    }
  }
});

Object.defineProperty(Square.prototype, 'image', {
  get: function(){
    var _self = this;
    if(_self.attachedImage){
      return _self.attachedImage;
    }
  }
});






