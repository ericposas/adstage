/*global Square, adstage, clickTag, U, Back*/

// CTA hover div class

function CTAhover(gfc){
  var hov = new Square({id:'ctahover',width:150,height:40,color:'green',x:75,y:239});
  var g = gfc;
  hov.opacity=0;
  this.add = function(){
    adstage.stage.add(hov);
    hov.on('click', function(){
      window.open(clickTag,'_blank');
    });
    hov.on('mouseover', function(){
      g.to(0.35, {scale:1.1, transformOrigin:U.torg(300,516), ease:Back.easeOut});
    });
    hov.on('mouseout', function(){
      g.to(0.35, {scale:1, transformOrigin:U.torg(300,516)});
    });
  };
}
