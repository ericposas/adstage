/*global log, console, Square, adstage*/

//Square Factory class
function Factory(stage,arrOfSquares){
  var props=arrOfSquares,_stage=stage,i,squares=[];
  var docdim={w:adstage.stage.dimensions.w,h:adstage.stage.dimensions.h};
  if(window.adstage){
    for(i=0;i<props.length;i+=1){
      //var id = props[i].id || 'sq' + _stage._objcount;
      var w = props[i].width || docdim.w;
      var h = props[i].height || docdim.h;
      var img = props[i].image || 'blank.png';
      //var s = new Square({width:w,height:h,image:img});
      var s = new Square({width:w,height:h});
      if(img !== 'blank.png'){
        s.addImage(img);
      }
      _stage.add(s);
      s.setID(props[i].id || 'sq' + _stage._objcount);
      squares.push(s);
    }
  }
}
