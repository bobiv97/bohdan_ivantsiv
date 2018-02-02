			function up() {  
			  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
			if(top > 0) {  
			  window.scrollBy(0,((top+100)/-10));  
			  t = setTimeout('up()',20);  
			} else clearTimeout(t);  
			return false;  
			}

			$(document).ready(function() { 
			$("a.two").fancybox(); 
			});


		/*	$(document).ready(function() { 
				//плавний скрол по якорям
				$('a[href^="#"]').click(function() {
					elementClick = $(this).attr("href");
					destination = $(elementClick).offset().top;
					if ($.browser.safari) {
						$('body').animate( { scrollTop: destination }, 1000 );
					} else {
						$('html').animate( { scrollTop: destination }, 1000 );
					}
					return false;
				});
				}); 
				*/
			