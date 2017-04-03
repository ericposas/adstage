function init(){
  //create and append stage to document
  var stage = new Stage();
  //create square
  var clickBox = new Square({width:300, height:250, outline:1});
  //square.setProp('opacity', 0);
  stage.add(clickBox);
  clickBox.on('click',function(){
    open('https://www.google.com/', '_blank');
  });
}