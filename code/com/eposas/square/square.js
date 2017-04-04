function Square(params){
  //constructor
  var sq = document.createElement('div');
  this.params = params;
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
    //set image
    if(params.image && typeof params.image === 'string'){
      var _self = this;
      var img;
      if(params.width){ img = new Image(params.width); }else{ img = new Image(); }
      img.src = params.image;
      this.attachedImage = img;
      this.attachedImage.style.opacity = 0;
      sq.appendChild(img);
      adstage.images++; console.log('images added: ' + adstage.images);
      img.onload = function(){
        adstage.loadedimages++; console.log('images loaded: ' + adstage.loadedimages);
        _self.attachedImage.style.opacity = 1;
        if(adstage.images === adstage.loadedimages){
          //adstage.ad.showImages();
          //adstage.ad.animate();
          adstage.ad.loaded = true;
        }
      }
    }
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
    return this.div.style.width;
  },
  set: function(val){
    var _self = this;
    if(!_self.params.width){
      _self.div.style.width = parseInt(val) + 'px';
    }
  }
});

Object.defineProperty(Square.prototype, 'height', {
  set: function(val){
    var _self = this;
    if(!_self.params.height){
      _self.div.style.height = parseInt(val) + 'px';
    }
  }
});

Object.defineProperty(Square.prototype, 'image', {
  get: function(){
    var _self = this;
    if(_self.attachedImage){
      return _self.attachedImage;
    }
  },
  set: function(img){
    var _self = this;
    var imgElem = new Image(parseInt(this.style.width));
    if(!_self.params.image && img && typeof img === 'string'){
      imgElem.src = img;
      _self.attachedImage = imgElem;
      _self.attachedImage.style.opacity = 0;
      _self.div.appendChild(imgElem);
      adstage.images++; console.log('images added: ' + adstage.images);
      imgElem.onload = function(){
        adstage.loadedimages++; console.log('images loaded: ' + adstage.loadedimages);
        _self.attachedImage.style.opacity = 1;
        if(adstage.images === adstage.loadedimages){
          //adstage.ad.showImages();
          //adstage.ad.animate();
          adstage.ad.loaded = true;
          
        }
      }
    }else{
      console.error('Image param already set on "' + _self.id + '".');
    }
  }
});


