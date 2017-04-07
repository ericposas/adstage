/*global Square, adstage, window, open, clickTag*/

function Outline(){
  function clickFn(){
    open(clickTag,'_blank');
  }
  var s = new Square();
  s.setID('outline');
  s.width = adstage.stage.dimensions.w;
  s.height = adstage.stage.dimensions.h;
  s.outline = 1;
  s.on('click',clickFn);
  return s;
}
