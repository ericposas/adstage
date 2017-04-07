/*global Square, adstage*/

function BG(){
  var bg = new Square();
  //stage.add(bg);
  bg.width = adstage.stage.dimensions.w;
  bg.height = adstage.stage.dimensions.h;
  bg.color = '#43b02a';
  bg.x = 1;
  bg.y = 1;
  return bg;
}

