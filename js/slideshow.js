/* Based from code on: 
https://www.sitepoint.com/community/t/problem-with-multiple-slideshows-on-the-same-page/36896/2


            function displayNextSlide(slider){
        var currentImage = slider.find(".currentImage"),
            nextSlide = (currentImage.next().length === 0)? slider.children(':first') : currentImage.next();
        
        currentImage.delay(1500).hide("slide", {direction:"left"}, 500, function(){
          $(this).removeClass("currentImage");
          nextSlide.show("slide", {direction:"right"}, 500, function(){
            $(this).addClass("currentImage");
            displayNextSlide(slider);
          });
        });
      }

      function initSlider(slider){
        var images = slider.find('img');
        images.first().fadeIn(function(){
          $(this).addClass("currentImage");
          displayNextSlide(slider)
        });
      }

      $(".slider").each(function(){
        initSlider($(this));
      })

	  */

$(".Slideshow").each(function(){
	
	start($(this));
	
})


function start(Slideshow){
	//we get all images
	var images = Slideshow.find('img');

	//we show the first imageCount
	images.first().fadeIn(function(){
		$(this).addClass("currentImage");
		displayNextSlide(Slideshow)
	});
}


function displayNextSlide(Slideshow){
	
	
	
	
	var currentSlide = Slideshow.find(".currentImage");
	var nextSlide = (currentSlide.next().length===0)? Slideshow.children(':first'): currentSlide.next();

	
	currentSlide.delay(1500).fadeOut(500, function(){
		$(this).removeClass("currentImage");

		nextSlide.fadeIn(function(){
		$(this).addClass("currentImage");
		displayNextSlide(Slideshow)
		});
	});
	

}






