function init(){
  // create and append stage to document
  var stage = new Stage();
  //create bg
  var bg = new Square({id:'bg',image:'img/test.png',width:300});
  bg.x = bg.y = 1;
  stage.add(bg);
  /* various ways to access and style properties */
  //bg.width = 300;
  //bg.image = 'img/test.png';
  //bg.image.style.width = '300px';
  //bg.image.width = 300;
  
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
  
  
}