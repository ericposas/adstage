function init(){
  // create and append stage to document
  var stage = new Stage();
  //create bg
  var bg = new Square({id:'bg'}); //,image:'test.png',width:300});
  bg.x = bg.y = 1;
  stage.add(bg);
  /* various ways to access and style properties */
  //bg.width = 300;
  //bg.image.style.width = '300px';
  bg.addImage('test.png');
  bg.image.width = 300;
  bg.image.style.position = 'absolute';
  bg.image.style.left = '60px';
  
  stage.logImages();
  
  // create outline border via Square object
  var border = new Square({width:300, height:250});
  stage.add(border);
  border.outline = true;
  //create square
  var clickBox = new Square({width:302, height:252, color:'red'});
  //clickBox.opacity = 0;
  stage.add(clickBox);
  clickBox.on('click',function(){
    alert('clickTag: ' + clickTag); //open(clickTag, '_blank');
  });
  clickBox.color = 'blue';
  clickBox.alpha = 0;
  
  // test setting the context of 'this' into the 'prototype' of an object 
  var imgarr = new imagesarray();
  Stage.prototype.logImages.apply(imgarr);
  
  function imagesarray(){
    this._images = ['hello', 'cheese', 'block of', 'hair'];
  }
  
  //console.log(Stage.prototype);
  
}