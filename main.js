/*global Stage, Square, adstage, TweenLite, Power1, alert, window, TimelineLite, U*/
/*global BG, Outline, Bubble*/
/*global Back, Power1*/

function init(){
  //new main.js file edited -- 04.09.2017
  var stage = new Stage(300,600,'Test Ad'); // our 'stage' instance
  var bg = new BG(); //bg class instance
  var road = new Square({id:'road',image:'road.png',x:1,y:1});
  var van = new Square({id:'van',image:'van.png'});
  var logo = new Square({id:'logo',image:'logo.png'}); // logo graphic
  var cta = new Square({id:'cta',image:'cta.png',hide:true});
  var legal = new Square({id:'legal',image:'legal.png',hide:true});
  var outline = new Outline(); // ad 'outline' overlay -- click area
  stage.addMult([bg,road,van,cta,legal]);
  stage.generateSquares(6, true); // generates 6 Squares with image elements '1.png' through '2.png'
  stage.add(logo);
  stage.add(outline);
  
  // create a 'Legal Bubble' class 
  var bubble = new Bubble();
  //stage.add(bubble);
  
  van.attachedImage.width = 400;
  van.x = -140;
  van.y = 330;
  
  
  /* ANIMATION */
  // dynamically set animation function to be called from adstage once all images are loaded 
  adstage.stage.animate = function (){
    var tl;
    var f1 = U.arr(stage.square_divs, 5, 8);
    var f2 = U.arr(stage.square_divs, 8, 11);
    
    function two(d){
      U.d(d, function(){
        tl = stage.tl_to(f1, 0.5, {x:30});
      });
    }
    
    tl = stage.tl_from(f1); //, 0.5, {x:-30}, null, two, 2);
    U.d(3, function(){
      tl = stage.tl_to(f1);
    });
    
    U.d(4, function(){
      tl = stage.tl_from(f2);
    });
    
    U.d(5, function(){
      function ctaPop(){
        cta.from(0.75, {scale:0, transformOrigin:U.torg(300,528), ease:Back.easeOut, onComplete:function(){
          stage.add(bubble);
          stage.end();
        }});
      }
      legal.from(1, {alpha:0, onComplete:ctaPop});
    });
    
  };
}

