function Stage(){
  //constructor
  var stg = document.createElement('div');
  stg.id = 'stage';
  document.body.appendChild(stg);
  //set global 'adstage' object and globally accessible variables
  if(!window.adstage){
    window.adstage = {
      stage: stg,
      count: 0, //count is the number of objects created or added to the stage
      images: 0,
      loadedimages: 0,
      ad: {
        showImages: function(){
          for(var i=0;i<adstage.images.length;i++){
            
          }
        }
      }
    }
  }
}

Stage.prototype.add = function(obj){
  if(obj.div){
    adstage.stage.appendChild(obj.div);
  }
}

