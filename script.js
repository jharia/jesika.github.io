// scroll to section on page 
jQuery(document).ready(function($) {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 

jQuery(document).ready(function($) {
	jQuery.noConflict();
	$('.detail1').hide(); 
	$('.project_text').hide();
	$('.project_title').hide();
	$('.project_big_title').hide();
	$('.project_link').hide();
	$('#my-entire-story').show(); 

	// Show different parts 
	$('.thumbnail').click(function() {
		$('.detail1').hide(); 
		$('.project_text').hide();
		$('.project_title').hide();
		$('.project_big_title').hide();
		$('.project_link').hide();

		if ($(this).attr('id')==='mystory') {
			$('#my-entire-story').show(); 
		} else if ($(this).attr('id') === 'findme') {
			$('#all-contacts').show(); 
		} else if ($(this).attr('id') === 'projects') {
			$('.project_text').show(); 
			$('.project_title').show();
			$('.project_link').show();
			$('.project_big_title').show();
			$('#all-projects').show(); 
		}
		
		$('html,body').animate({
	          scrollTop: $(this).offset().top
	        }, 1000);
	}); 

	// Opaque effect 
	$('.thumbnail').mouseenter(function() {
		$(this).css({ opacity: 0.8});
	}); 
	$('.thumbnail').mouseleave(function() {
		$(this).css({ opacity: 1});
	}); 

}); 


});
