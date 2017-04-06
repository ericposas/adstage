/*global Stage, Square, Factory, clickOut01, window, open, clickTag*/

function init(){
  function gotoClickTag(){
    open(clickTag,'_blank');
  }
  
  var stage = new Stage();
  var bg = new Square({color:'lightblue',width:300,height:250});
  stage.add(bg);
  bg.x=bg.y=1;
  var border = new Square({outline:1,width:300,height:250});
  stage.add(border);
  border.on('click',gotoClickTag);
  
  var _01 = {image:'test.png',id:'test'}, _02 = {image:''}, _03 = {image:''};
  var f = new Factory(stage, [_01,_02,_03]);
  
}
