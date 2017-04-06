/*global Square*/

function BG(stage){
  var bg = new Square();
  //stage.add(bg);
  bg.width = stage.dimensions.w;
  bg.height = stage.dimensions.h;
  bg.color = '#43b02a';
  bg.x = 1;
  bg.y = 1;
  return bg;
}

