/*global console, adstage, log, TimelineLite, TweenLite, Square, Power1*/

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
  this.square_divs = [];
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

// TimelineLite 'from'
Stage.prototype.tl_from = function(arr, dur, params, stagger, cb, cbparams){
  var t = new TimelineLite(), i;
  function setVis(arr,i){ TweenLite.set(arr[i], {visibility:'visible'}); }
  var p = params || {};
  for(i=0;i<arr.length;i+=1){
    t.from(arr[i], dur || 0.5, {x:p.x||-20, y:p.y||0, alpha:p.alpha||0, onStart:setVis, onStartParams:[arr,i], onComplete:(i == arr.length - 2 && cb ? cb : null), onCompleteParams:[(i == arr.length - 2 && cbparams ? cbparams : null)]}, stagger||'-=0.25');
  }
  return t;
};

// TimelineLite 'to'
Stage.prototype.tl_to = function(arr, dur, params, stagger, cb, cbparams){
  var t = new TimelineLite(), i;
  function setVis(arr,i){ TweenLite.set(arr[i], {visibility:'visible'}); }
  var p = params || {};
  for(i=0;i<arr.length;i+=1){
    t.to(arr[i], dur || 0.5, {x:p.x||20, y:p.y||0, alpha:p.alpha||0, onStart:setVis, onStartParams:[arr,i], onComplete:(i == arr.length - 2 && cb ? cb : null), ease:Power1.easeIn, onCompleteParams:[(i == arr.length - 2 && cbparams ? cbparams : null)]}, stagger||'-=0.25');
  }
  return t;
};

// adds multiple, predefined Square objects to the Stage instance, specified via an Array 
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

// add a Square object to the Stage instance 
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

// takes in an integer, and creates the specified number of squares in sequence -- usually for text blocks 
Stage.prototype.generateSquares = function(integer, hide){
  var i, list = [];
  for(i=0;i<integer;i+=1){
    var n = i + 1;
    var s = new Square({id:'t'+n,image:n+'.png',x:1,y:1,hide:hide});
    this.add(s);
    list.push(s);
  }
  return list;
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
