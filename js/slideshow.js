var images = $('#testSlideshow').children('img');
var	imageCount = images.length;
var currentIndex = 0;

/**
This starts the slideshow with a set interval of 2000
**/
var slideShow = setInterval(cycleImages, 2000);
  

/**
This function hides all images and fetches the next item in the list
**/
function cycleImages(){
	images.hide();

	item = $('#testSlideshow').children('img').eq(currentIndex);
	
	
	item.show();
	
	currentIndex++;
	if (currentIndex==3){
		currentIndex=0;
	}
}



  
  
//function cycleItems(){
//	var item = $('#testSlideshow').children('img').eq(currentIndex);
//	images.hide();
//	item.css('display','inline-block');
 //}

 //var autoSlide = setInterval(function{currentIndex+=1; cycleItems()}, 3000);
  

  
  /*
function cycleItems() {
  var item = $('.Slideshow div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});
*/