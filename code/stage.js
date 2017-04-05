function Stage(id){
  //constructor
  var stg = document.createElement('div');
  stg.id = id ? id : 'stage';
  document.body.appendChild(stg);
  this.div = stg;
  this._images = [];
  this._loadedimages = [];
  this._objcount = 0;
  this._adloaded = false;
  //set global 'adstage' object and globally accessible variables
  if(!window.adstage){
    window.adstage = 'initialized';
  }
}

Stage.prototype.add = function(obj){
  if(obj.div){
    obj.stage = this;
    this._objcount++;
    obj.div.id = obj.div.id ? obj.div.id : 'sq' + this._objcount;
    this.div.appendChild(obj.div);
  }
}

Stage.prototype.showImages = function(){
  for(var i = 0; i < this._images.length; i++){
    this._images[i].style.opacity = 1;
  }
}

Stage.prototype.logImages = function(){
  if(!this._images){
    this._images = [];
  }
  for(var i = 0; i < this._images.length; i++){
    var log;
    if(typeof this._images[i] !== 'string'){
      var regex = /images\/(.*)\./;
      log = 'image: "' + (this._images[i].getAttribute('src')).match(regex)[1] + '"';
    }else{
      log = this._images[i];
    }
    console.log(log);
  }
}