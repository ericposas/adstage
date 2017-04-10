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
  imgs.road.visible = true;
  var f1_assets = stage.generateSquares(3, true, 'array');
  var frame1 = U.getProp(f1_assets, 'div');
  var f2_assets = stage.generateSquares([4,5,6], true, 'array');
  var frame2 = U.getProp(f2_assets, 'div');
  stage.add(logo);
  stage.add(outline);
  
  var bubble = new Bubble();
  var ctahov = new CTAhover(imgs.cta);
  // var tmp = stage.template(['tmp0000','tmp0001','tmp0002','tmp0003'], '.jpg');
  
  imgs.van.attachedImage.width = 400;
  imgs.van.visible = true;
  imgs.van.x = -140;
  imgs.van.y = 330;
  
  // show template image
  //tmp.goto(3);
  //tmp.opacity = 0.25;
  
  /* ANIMATION */
  adstage.stage.animate = function (){
    var tl = stage.tl_from(frame1);
    imgs.van.from(8, {x:-500});
    
    U.d(3, function(){
        tl = stage.tl_to(frame1);
    });
    
    U.d(4, function(){
      tl = stage.tl_from(frame2);
    });
    
    U.d(5, function(){
      function ctaPop(){
        imgs.cta.from(0.75, {scale:0, transformOrigin:U.torg(300,528), ease:Back.easeOut, onComplete:function(){
          stage.add(bubble);
          stage.add(ctahov);
          stage.end();
        }});
      }
      imgs.legal.from(1, {alpha:0, onComplete:ctaPop});
    });
    
  };
}

