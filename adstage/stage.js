/*global console, adstage, log, TimelineLite, TweenLite, AdState, Square, Power1, U*/

// Stage object - set the initial width, height, and ID
function Stage(w,h,id){
  var dim = document.getElementById('dimensions');
  var title = document.getElementsByTagName('title')[0];
  var self = this;
  var stg = document.createElement('div');
  stg.id = id || 'stage';
  stg.id = stg.id.replace(/\s+/g, '');
  document.body.appendChild(stg);
  stg.classList.add('stage');
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
    this.div.style.position = 'absolute';
    this.div.style.width = w + 2 + 'px';
    this.div.style.height = h + 2 + 'px';
  }else{
    console.error('Please pass width/height values to Stage to set the ad size');
  }
  dim.setAttribute('content', 'width='+w+',height='+h);
  title.innerHTML = id;
  if(!window.adstage){
    window.adstage = {
      stage: self
    };
  }
}

// TimelineLite 'from'
Stage.prototype.tl_from = function(arr, dur, params, stagger){
  var t = new TimelineLite(), i, d = dur||0.5;
  function setVis(arr,i){ TweenLite.set(arr[i], {visibility:'visible'}); }
  var p = params || {};
  for(i=0;i<arr.length;i+=1){
    t.from(arr[i], d, {x:p.x||-20, y:p.y||0, alpha:p.alpha||0, onStart:setVis, onStartParams:[arr,i]}, stagger||'-=0.25');
  }
  return t;
};

// TimelineLite 'to'
Stage.prototype.tl_to = function(arr, dur, params, stagger, cb, cbparams){
  var t = new TimelineLite(), i, d = dur||0.5;
  function setVis(arr,i){ TweenLite.set(arr[i], {visibility:'visible'}); }
  var p = params || {};
  for(i=0;i<arr.length;i+=1){
    t.to(arr[i], d, {x:p.x||20, y:p.y||0, alpha:p.alpha||0, onStart:setVis, onStartParams:[arr,i], ease:Power1.easeIn}, stagger||'-=0.25');
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
    this._objcount+=1;
    obj.div.id = obj.div.id || 'sq' + this._objcount;
    this.div.appendChild(obj.div);
    this.squares.push(obj);
    this.square_divs.push(obj.div);
    if(obj.attachedImage){
      this.square_imgs.push(obj.attachedImage);
    }
  }else if(obj.add){
    obj.add();
  }
  return this;
};

// template object -- a collection of related images, able to be sorted through via a 'goto' method
Stage.prototype.template = function(arr, filetype){
  var template = Stage.prototype.generateSquares.call(this, arr, true, 'array', filetype);
  template.goto = function(n){
    if(n < 0){
      template[0].visible = true;
    }else if(n > template.length){
      template[template.length - 1].visible = true;
    }else{
      template[n - 1].visible = true;
    }
  };
  Object.defineProperty(template, 'opacity', {
    set: function(v){
      var i;
      for(i=0;i<template.length;i+=1){
        template[i].opacity = v;
      }
    }
  });
  return template;
};

// takes in an integer or array, and creates the specified number of squares in sequence -- usually for text blocks 
Stage.prototype.generateSquares = function(integer, hide, returntype, filetype, a){
  var i, list;
  if(returntype === 'object'){
    list = {};
  }else if (returntype === 'array'){
    list = [];
  }
  if(typeof integer === 'number'){
    for(i=0;i<integer;i+=1){
      var n = i + 1;
      var s = new Square({id:'t'+n,image:n+(filetype||'.png'),x:1,y:1,hide:hide});
      this.add(s);
      list.push(s);
    }
  }else if(typeof integer === 'object'){
    for(i=0;i<integer.length;i+=1){
      var sq = new Square({id:integer[i],image:integer[i]+(filetype||'.png'),x:1,y:1,hide:hide});
      this.add(sq);
      if(returntype === 'array'){
        list.push(sq);
      }else if(returntype === 'object'){
        list[integer[i]] = sq;
      }
    }
  }
  if(a == true && filetype !== 'object'){
    return U.getProp(list, 'div');
  }else{
    return list;
  }
};

// initiates showing images and animating elements
Stage.prototype.start = function(){
  this._state = 'started';
  this.showImages();
  this.animate();
};

// end state of ad
Stage.prototype.end = function(){
  this._state = 'ended';
  return this._state;
};

// dynamically set via main.js and called when all images are loaded
Stage.prototype.animate = function(){};

Stage.prototype.showImages = function(){
  var i;
  for(i=0;i<this._images.length;i+=1){
    this._images[i].style.opacity = 1;
  }
};

// logs the this._images property of the object that is called
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
