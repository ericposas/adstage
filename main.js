/*global Stage, Square, adstage, TweenLite, Power1, alert, window, TimelineLite, U*/
/*global BG, Outline, Bubble*/
/*global Back, Power1*/

function init(){
  //new main.js file edited -- 04.10.2017
  var stage = new Stage(300,600,'Test Ad'); // our 'stage' instance
  var bg = new BG(); //bg class instance
  var logo = new Square({id:'logo',image:'logo.png'});
  var outline = new Outline(); // ad 'outline' overlay -- click area
  stage.add(bg);
  var imgs = stage.generateSquares(['road','van','cta','legal'], true);
  var text = stage.generateSquares(6, true); // generates 6 Squares with image elements '1.png' through '2.png'
  stage.add(logo);
  stage.add(outline);
  
  // create a 'Legal Bubble' class 
  var bubble = new Bubble();
  //stage.add(bubble);
  
  // road
  imgs[0].visible = true;
  
  // van
  imgs[1].attachedImage.width = 400;
  imgs[1].visible = true;
  imgs[1].x = -140;
  imgs[1].y = 330;
  
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
        imgs[2].from(0.75, {scale:0, transformOrigin:U.torg(300,528), ease:Back.easeOut, onComplete:function(){
          stage.add(bubble); //dynamically add bubble when needed 
          stage.end();
        }});
      }
      imgs[3].from(1, {alpha:0, onComplete:ctaPop});
    });
    
  };
}

