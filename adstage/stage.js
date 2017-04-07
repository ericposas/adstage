/*global console, adstage*/

function Stage(id){
  //constructor
  var self = this;
  var stg = document.createElement('div');
  stg.id = id || 'stage';
  document.body.appendChild(stg);
  this.div = stg;
  this._images = [];
  this._loadedimages = [];
  this._objcount = 0;
  this._adloaded = false;
  this.dimensions = {
    w: document.getElementById('dimensions').getAttribute('w'),
    h: document.getElementById('dimensions').getAttribute('h')
  };
  //set global 'adstage' object and globally accessible variables
  if(!window.adstage){
    window.adstage = {
      stage: self
    };
  }
}

Stage.prototype.add = function(obj){
  if(obj.div){
    //obj.stage = this;
    this._objcount+=1;
    obj.div.id = obj.div.id || 'sq' + this._objcount;
    this.div.appendChild(obj.div);
  }
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


