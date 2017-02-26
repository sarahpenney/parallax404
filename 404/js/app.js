(function($){

  var layers    = [],
      docWidth  = $(window).width(),
      docHeight = $(window).height()

  $(window).resize(function() {
      docWidth  = $(window).width()
      docHeight = $(window).height()
  })

  // Public Methods

  // Add an object to the list of things to parallax
  $.fn.plaxify = function (params){
    var layer    = {"xRange":0,"yRange":0,"invert":false},
        position = this.position()

    for(var param in params){
      if(layer[param]==0){
        layer[param] = params[param]
      }
    }
    layer.obj    = this
    layer.startX = position.left
    layer.startY = position.top

    if(layer.invert == false){
      layer.startX -= Math.floor(layer.xRange/2)
      layer.startY -= Math.floor(layer.yRange/2)
    } else {
      layer.startX += Math.floor(layer.xRange/2)
      layer.startY += Math.floor(layer.yRange/2)
    }
    layers.push(layer)
  }


  $.plax = {
    listLayers: function(){
      console.log(layers)
    },
    enable: function(){
      $(document).mousemove(function(e){
        var x      = e.pageX,
            y      = e.pageY,
            hRatio = Math.round((x/docWidth)*100)/100,
            vRatio = Math.round((y/docHeight)*100)/100
        $.each(layers, function(index,layer) {
          if(layer.invert != true){
            layer.obj.css('left',layer.startX + (layer.xRange*hRatio))
            layer.obj.css('top', layer.startY + (layer.yRange*vRatio))
          } else {
            layer.obj.css('left',layer.startX - (layer.xRange*hRatio))
            layer.obj.css('top', layer.startY - (layer.yRange*vRatio))
          }
        })
      })
    },
    disable: function(){
      clearTimeout(timer)
    }
  }

})(jQuery);





$('#l1').plaxify({"xRange":360,"yRange":360});
$('#l2').plaxify({"xRange":320,"yRange":320});
$('#l3').plaxify({"xRange":280,"yRange":280});
$('#l4').plaxify({"xRange":240,"yRange":240});
$('#l5').plaxify({"xRange":200,"yRange":200});
$('#l6').plaxify({"xRange":160,"yRange":160});
$('#l7').plaxify({"xRange":120,"yRange":120});
$('#l8').plaxify({"xRange":80,"yRange":80});
$('#l9').plaxify({"xRange":40,"yRange":40});
$('#l10').plaxify({"xRange":1,"yRange":1, "invert":true});
$('#l11').plaxify({"xRange":40,"yRange":40, "invert":true});
$('#l12').plaxify({"xRange":80,"yRange":80, "invert":true});
$('#l13').plaxify({"xRange":120,"yRange":120, "invert":true});
$('#l14').plaxify({"xRange":160,"yRange":160, "invert":true});
$('#l15').plaxify({"xRange":200,"yRange":200, "invert":true});
$('#l16').plaxify({"xRange":240,"yRange":240, "invert":true});
$('#l17').plaxify({"xRange":280,"yRange":280, "invert":true});



/*
$('#img2').plaxify({"xRange":20,"yRange":20,"invert":true});
$('#img3').plaxify({"xRange":10,"yRange":10,"invert":true});
*/
$.plax.enable();
