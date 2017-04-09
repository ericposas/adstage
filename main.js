/*global Stage, Square, adstage, TweenLite, Power1, alert, window, TimelineLite, U*/
/*global BG, Outline, t1*/

function init(){
  //new main.js file edited -- 04.09.2017
  var stage = new Stage(300,600,'Test Ad'); // our 'stage' instance
  var bg = new BG(); //bg class instance
  var logo = new Square({id:'logo',image:'logo.png'}); // logo graphic
  var outline = new Outline(); // ad 'outline' overlay -- click area
  stage.add(bg);
  stage.generateSquares(6, true); // generates 6 Squares with image elements '1.png' through '2.png'
  stage.add(logo);
  stage.add(outline);
  
  /* ANIMATION */
  // dynamically set animation function to be called from adstage once all images are loaded 
  adstage.stage.animate = function (){
    var tl;
    var f1 = U.arr(stage.square_divs, 1, 4);
    
    function two(d){
      U.d(d, function(){
        tl = stage.tl_to(f1, 0.5, {x:30});
      });
    }
    
    tl = stage.tl_from(f1); //, 0.5, {x:-30}, null, two, 2);
    U.d(3, function(){
      tl = stage.tl_to(f1);
    });
    
    (function one(){
      //tl.to(f1[0], 1, {x:20, alpha:0, ease:Power1.easeIn}, '-=.2');
      
    }());
    
  };
}

