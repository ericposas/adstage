/*global console, adstage, log*/

function Stage(w,h,id){
  // constructor
  // document vars 
  var dim = document.getElementById('dimensions');
  var title = document.getElementsByTagName('title')[0];
  // this
  var self = this;
  var stg = document.createElement('div');
  stg.id = id || 'stage';
  stg.id = stg.id.replace(/\s+/g, '');
  document.body.appendChild(stg);
  this.div = stg;
  this._images = [];
  this._loadedimages = [];
  this._objcount = 0;
  this._adloaded = false;
  this.squares = [];
  this.square_divs = []
  this.square_imgs = [];
  if(w && h){
    this.dimensions={w:w,h:h};
  }else{
    console.error('Please pass width/height values to Stage to set the ad size');
  }
  //set document ad.size vars
  dim.setAttribute('content', 'width='+w+',height='+h);
  //set ad title
  title.innerHTML = id;
  //set global 'adstage' object and globally accessible variables
  if(!window.adstage){
    window.adstage = {
      stage: self
    };
  }
}

Stage.prototype.addMult = function(arr){
  if(typeof arr === 'object'){
    var i;
    for(i=0;i<arr.length;i+=1){
      if(arr[i].type && arr[i].type === 'square'){
        this.add(arr[i]);
      }
    }
  }
};

Stage.prototype.add = function(obj){
  if(obj.div){
    //obj.stage = this;
    this._objcount+=1;
    obj.div.id = obj.div.id || 'sq' + this._objcount;
    this.div.appendChild(obj.div);
    // store Square objects, so they can be accessible via the Stage instance 
    this.squares.push(obj); // stores each Square instance
    this.square_divs.push(obj.div); // stores each 'div' of the stored Square instance
    if(obj.attachedImage){
      this.square_imgs.push(obj.attachedImage); // stores the inner 'img' element within the Square 'div' element
    }
  }
  return this;
};

Stage.prototype.animate = function(){
  //set this dynamically from init(); function 
};

Stage.prototype.showImages = function(){
  var i;
  for(i=0;i<this._images.length;i+=1){
    this._images[i].style.opacity = 1;
  }
};

Stage.prototype.logImages = function(){
  if(!this._images){
    this._images = [];
  }
  var i;
  for(i=0; i < this._images.length; i+=1){
    var log;
    if(typeof this._images[i] !== 'string'){
      var regex = /images\/(.*)\./;
      log = 'image: "' + (this._images[i].getAttribute('src')).match(regex)[1] + '"';
    }else{
      log = this._images[i];
    }
    console.log(log);
  }
};
