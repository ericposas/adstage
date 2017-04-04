function init(){
  // create and append stage to document
  var stage = new Stage();
  // create outline border via Square object
  var outline = new Square({width:300, height:250, outline:0});
  stage.add(outline);
  outline.outline = 1;
  //create square
  var clickBox = new Square({width:302, height:252, color:'red'});
  //clickBox.opacity = 0;
  stage.add(clickBox);
  clickBox.on('click',function(){
    open(clickTag, '_blank');
  });
  clickBox.color = 'blue';
  clickBox.alpha = 0;
  
}