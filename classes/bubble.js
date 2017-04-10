/*global Stage, Square, adstage, clickTag, log*/

function Bubble(){
  var legalhover = new Square({id:'legalhover',width:130,height:20,color:'green',x:60,y:200});
  legalhover.opacity = 0;
  var bubble = new Square({id:'bubble',image:'bubble.png',hide:true});
  this.add = function(){
    adstage.stage.add(bubble);
    adstage.stage.add(legalhover);
    legalhover.on('mouseover', function(){
      log(adstage.stage._state);
      if(adstage.stage._state === 'ended'){
        bubble.visible = true;
      }
    });
    legalhover.on('mouseout', function(){
      bubble.visible = false;
    });
    legalhover.on('click', function(){
      window.open(clickTag, '_blank');
    });
  };
}
