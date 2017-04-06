/*global Stage, Square*/
/*global BG, Outline*/

function init(){
  //new main.js file started -- 04.06.2017
  var stage = new Stage();
  //add 'bg' -- a custom class defined by user
  var bg = new BG();
  stage.add(bg);
  //ad 'outline' 
  var outline = new Outline();
  stage.add(outline);
  //t1
  var t1 = new Square({id:'t1',image:'1.png'});
  stage.add(t1);
  //logo
  var logo = new Square({id:'logo',image:'logo.png'});
  stage.add(logo);
  
  
}
