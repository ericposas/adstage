/*global Stage, Square, adstage, TweenLite, Power1, alert, window, TimelineLite, U, log*/
/*global BG, Outline, Bubble, CTAhover*/
/*global Back, Power1*/

function init(){
  //new main.js file edited -- 04.10.2017
  var stage = new Stage(300,600,'Test Ad'); // our 'stage' instance
  var bg = new BG(); //bg class instance
  var logo = new Square({id:'logo',image:'logo.png'});
  var outline = new Outline(); // ad 'outline' overlay -- click area
  stage.add(bg);
  var imgs = stage.generateSquares(['road','van','cta','legal'], true, 'object');
  var text = stage.generateSquares(6, true, 'array'); // generates '1.png' - '6.png' Square elems
  stage.add(logo);
  stage.add(outline);
  // create a 'Legal Bubble' class 
  var bubble = new Bubble();
  //stage.add(bubble);
  var ctahov = new CTAhover(imgs.cta);
  // template image object 
  var tmp = stage.template(['tmp0000','tmp0001','tmp0002','tmp0003'], '.jpg');
  
  
  // road
  imgs.road.visible = true;
  
  // van -- setting the return type to 'object' via the Stage.generateSquares() method allows access to the Square instances as properties of an object -- super cool 
  imgs.van.attachedImage.width = 400;
  imgs.van.visible = true;
  imgs.van.x = -140;
  imgs.van.y = 330;
  
  // show template image
  tmp.goto(3);
  tmp.opacity = 0.25;
  
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
        imgs.cta.from(0.75, {scale:0, transformOrigin:U.torg(300,528), ease:Back.easeOut, onComplete:function(){
          stage.add(bubble); //dynamically add bubble ctahover when needed 
          stage.add(ctahov);
          stage.end();
        }});
      }
      imgs.legal.from(1, {alpha:0, onComplete:ctaPop});
    });
    
  };
}

