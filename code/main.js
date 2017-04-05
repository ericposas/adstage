function init(){
  var stage = new Stage();
  var bg = new Square({color:'lightblue',width:300,height:250});
  stage.add(bg);
  bg.x=bg.y=1;
  var border = new Square({outline:1,width:300,height:250});
  stage.add(border);
  border.on('click',clickOut01);
  
  function clickOut01(){
    open(clickTag,'_blank');
  }
  
}