(function($) {
    "use strict";
	
	var shift = $(window).width() > 640 ? 350 : 150;

	/*----------  MOBILE DETECT  ----------*/
    var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};
	/*----------  //MOBILE DETECT  ----------*/
	
	/*----------  PRELOADER  ----------*/
	setTimeout(function(){
		$('#preloader').animate({'opacity' : '0'},300,function(){
			$('#preloader').hide();
			if(!isMobile.any()){
				if(0 < $(window).scrollTop()){				
					scrolling();
				}
			}else{
				$('.animate').removeClass('animate');
			}			
		});
		$('.page-wrapper').animate({'opacity' : '1'},500);
	},800);
	/*----------  //PRELOADER  ----------*/

	$('#mobileMenu').on('click', function(){
		if(!$('#mainNavi').hasClass('show')){
			$('#mainNavi').addClass('show');
			$('#mainNavi a').css('display','block').animate({'opacity':1}, 500);
		}else{
			$('#mainNavi').removeClass('show');
			$('#mainNavi a').animate({'opacity':0}, 500, function(){
				$('#mainNavi a').hide();
			});
		}
		return false
	});

	/*----------  BIG SLIDER  ----------*/
	setTimeout(function(){
		$('.home .flexslider').height($(window).height()).flexslider({
			slideshowSpeed: 6000,
			after : function(slider){
				var next = $('.flex-active-slide', slider).find('.slider-text-wrapper');
				var className = '';
				if(next.hasClass('left')){
					className = 'bounceInLeft';
				}else if(next.hasClass('top')){
					className = 'flipInX';
				}else if(next.hasClass('zoom')){
					className = 'bounceIn';
				}
				next.addClass(className + ' animated');
				next.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					next.removeClass(className + ' animated');
				});
			}
		});

		$('.flex-next').addClass('glyph arrow_carrot-right').text('');
		$('.flex-prev').addClass('glyph arrow_carrot-left').text('');

		$('.home li > img').each(function(){
			$(this).css('background-image', 'url(' + $(this).attr('src') + ')')
				   .attr('src', '../images/1x1.png')
				   .height($(window).height());
		});
	},0)
	/*----------  //BIG SLIDER  ----------*/

	/*----------  SMALL SLIDER  ----------*/
	$('.about .flexslider').flexslider({slideshowSpeed: 6000});
	/*----------  //SMALL SLIDER  ----------*/

	/*----------  CALC WIDTH FOR WORK IN GALLERY  ----------*/
	if($(window).width() <= 480){
		$('#portfolioSlider .slide').each(function(){
			$(this).width(parseInt($(window).width()));
		});
	}else if($(window).width() <= 768){
		$('#portfolioSlider .slide').each(function(){
			$(this).width(parseInt($(window).width()/2));
		});
	}else if($(window).width() <= 1000){
		$('#portfolioSlider .slide').each(function(){
			$(this).width(parseInt($(window).width()/3));
		});
	}else if($(window).width() > 1000){
		$('#portfolioSlider .slide').each(function(){
			$(this).width(parseInt($(window).width()/4));
		});		
	}
	/*----------  //CALC WIDTH FOR WORK IN GALLERY  ----------*/


	$('.images-bg').each(function(){
		$(this).css({
			'background-image': 'url(' +$('img', this).hide().attr('src') +')'
		});
	});

	/*----------  FEEDBACK SLIDER  ----------*/
    $('.feedback .flexslider').flexslider({
        animation: "slide"
    });
    /*----------  //FEEDBACK SLIDER  ----------*/

    function scrolling(){
		var scroll = $(window).scrollTop() + $(window).height();

		if(scroll >= $(window).height()*2){
			$('header').addClass('bg');
		}else{
			$('header').removeClass('bg');
		}

		/*----------  ANIMATION FOR HEADER  ----------*/
		if($(window).height() == scroll || parseInt($('#home').offset().top) < scroll){
			$('#mainNavi a').removeClass('active');
		}
		/*----------  //ANIMATION FOR HEADER  ----------*/

		/*----------  ANIMATION FOR SKILLS  ----------*/
		if(parseInt($('.skills').offset().top)+shift < scroll){
			if($('.skills').hasClass('animate')){
				$('.skills').removeClass('animate');
			}
		}
		/*----------  //ANIMATION FOR SKILLS  ----------*/

		/*----------  ANIMATION FOR ABOUT  ----------*/
		if(parseInt($('#about').offset().top)+shift < scroll){
			if($('#about').hasClass('animate')){
				$('#about').removeClass('animate');
			}
			
			$('#mainNavi a').removeClass('active');
			$("a[href='#about']:eq(0)").addClass('active');
		}
		/*----------  //ANIMATION FOR ABOUT  ----------*/

		/*----------  ANIMATION FOR TEAM  ----------*/
		if(parseInt($('#team').offset().top)+shift < scroll){
			if($('#team').hasClass('animate')){
				$('#team').removeClass('animate');
			}
			
			$('#mainNavi a').removeClass('active');
			$("a[href='#team']:eq(0)").addClass('active');
		}
		/*----------  //ANIMATION FOR TEAM  ----------*/

		/*----------  ANIMATION FOR ACHIEVMENT  ----------*/
		if(parseInt($('.achievement').offset().top)+shift < scroll){
			if($('.achievement').hasClass('animate')){
				$('.achievement').removeClass('animate');

				/*-----------------------------------------------------------------------------------*/
				/* use the jQuery countTo plagin for animate numbers
				/*-----------------------------------------------------------------------------------*/
				$('.calc').each(function(){
					$(this).countTo({
				        from: 0,
				        to: $(this).attr('data-value'),
				        speed: 3000
				    });
			    });
			}
		}
		/*----------  //ANIMATION FOR ACHIEVMENT  ----------*/		

		/*----------  ANIMATION FOR SERVICE  ----------*/
		if(parseInt($('#services').offset().top)+shift < scroll){
			if($('#services').hasClass('animate')){
				$('#services').removeClass('animate');

				$('.services-line .line span').each(function(){
					$(this).attr('style', $(this).attr('data-style'));
				});

				/*-----------------------------------------------------------------------------------*/
				/* use the jQuery countTo plagin for animate numbers
				/*-----------------------------------------------------------------------------------*/
				$('.services-line div:first-child span').each(function(){
					$(this).countTo({
				        from: 0,
				        to: $(this).attr('data-value'),
				        speed: 1000
				    });
			    });
			}
			
			$('#mainNavi a').removeClass('active');
			$("a[href='#services']:eq(0)").addClass('active');
		}
		/*----------  //ANIMATION FOR SERVICE  ----------*/

		/*----------  ANIMATION FOR IDEA  ----------*/
		if(parseInt($('.idea').offset().top)+shift < scroll){
			if($('.idea').hasClass('animate')){
				$('.idea').removeClass('animate');
			}
		}
		/*----------  //ANIMATION FOR IDEA  ----------*/

		/*----------  ANIMATION FOR PORTFOLIO  ----------*/
		if(parseInt($('#portfolio').offset().top)+shift < scroll){
			if($('#portfolio').hasClass('animate')){
				$('#portfolio').removeClass('animate');
			}
			
			$('#mainNavi a').removeClass('active');
			$("a[href='#portfolio']:eq(0)").addClass('active');
		}
		/*----------  //ANIMATION FOR PORTFOLIO  ----------*/

		/*----------  ANIMATION FOR CLIENTS  ----------*/
		if(parseInt($('.clients').offset().top)+shift < scroll){
			if($('.clients').hasClass('animate')){
				$('.clients').removeClass('animate');
			}
		}
		/*----------  //ANIMATION FOR CLIENTS  ----------*/

		/*----------  ANIMATION FOR FEEDBACK  ----------*/
		if(parseInt($('.feedback').offset().top)+shift < scroll){
			if($('.feedback').hasClass('animate')){
				$('.feedback').removeClass('animate');
			}
		}
		/*----------  //ANIMATION FOR FEEDBACK  ----------*/

		/*----------  ANIMATION FOR PRICING  ----------*/
		if(parseInt($('#price').offset().top)+shift < scroll){
			if($('#price').hasClass('animate')){
				$('#price').removeClass('animate');
			}
			
			$('#mainNavi a').removeClass('active');
			$("a[href='#price']:eq(0)").addClass('active');
		}
		/*----------  //ANIMATION FOR PRICING  ----------*/

		/*----------  ANIMATION FOR BUY NOW  ----------*/
		if(parseInt($('.buy-now').offset().top)+shift < scroll){
			if($('.buy-now').hasClass('animate')){
				$('.buy-now').removeClass('animate');
			}
		}
		/*----------  //ANIMATION FOR BUY NOW  ----------*/

		/*----------  ANIMATION FOR PRICING  ----------*/
		if(parseInt($('#contacts').offset().top)+shift < scroll){
			if($('#contacts').hasClass('animate')){
				$('#contacts').removeClass('animate');
			}
			
			$('#mainNavi a').removeClass('active');
			$("a[href='#contacts']:eq(0)").addClass('active');
		}
		/*----------  //ANIMATION FOR PRICING  ----------*/
	}

	/*----------  FUNCTION FOR WINDOW SCROLL  ----------*/
	$(window).on('scroll', function(){
		if(!isMobile.any()){
			scrolling();
		}
	});
	/*----------  //FUNCTION FOR WINDOW SCROLL  ----------*/

	/*----------  FUNCTION FOR PORTFOLIO SLIDER  ----------*/
	setTimeout(function(){
		var $container = $('#portfolioSlider');

	    $container.isotope({
	      itemSelector : '.slide',
	      getSortData : {
	        category : function( $elem ) {
	          return $elem.attr('data-category');
	        }
	      }
	    });
	    var $optionSets = $('.portfolio-navi'),
	      $optionLinks = $optionSets.find('a');

		$optionLinks.click(function(){
			var $this = $(this);
			// don't proceed if already selected
			if ( $this.hasClass('active') ) {
				return false;
			}
			var $optionSet = $this.parents('.portfolio-navi');
			$optionSet.find('.active').removeClass('active');
			$this.addClass('active');

			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var options = {},
			key = $optionSet.attr('data-option-key'),
			value = $this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[ key ] = value;
			$container.isotope( options );

			return false;
		});
	}, 500)
	
	/*----------  //FUNCTION FOR PORTFOLIO SLIDER  ----------*/

	/*----------  NAVIGATION ON PAGE  ----------*/
	$('#mainNavi a, .slide-page').on('click', function(){
		var id = $(this).attr('href');
		if(id == '#home'){
			$('html,body')
				.stop()
				.scrollTo(0, 500);

			return false
		}
		$('html,body')
				.stop()
				.scrollTo($(id).offset().top-90, 500);
		if(!$(this).hasClass('button')){
			$('#mainNavi a').removeClass('active');
			$(this).addClass('active');
		}
		return false
	});

	$('#moveTop').on('click', function(){
		$('html,body')
				.stop()
				.scrollTo(0, 1000);

		return false
	});
	/*----------  //NAVIGATION ON PAGE  ----------*/

	/*----------  PORTFOLIO GALLERY  ----------*/
	$("a[data-rel^='prettyPhoto']").prettyPhoto();
	/*----------  //PORTFOLIO GALLERY  ----------*/

	/*----------  FUNCTION FOR SWITCH THEME COLOR  ----------*/
	if($('.picker-btn').length){
		$('.picker-btn').on('click', function(){
			if(parseInt($('.color-picker').css('right')) == 0){
				$('.color-picker').stop().animate({'right': -160}, 500);
			}else{
				$('.color-picker').stop().animate({'right': 0}, 500);
			}
		});
		$('.color-picker .pwrapper div.color').on('click', function(){
			$('body').removeClass('lightgreen blue green lightred red yellow turquoise pink purple');
			$('body').addClass($(this).attr('data-color'));
		});
		$('.color-picker .pwrapper div.bg').on('click', function(){
			$('body').removeClass('white black');
			$('body').addClass($(this).attr('data-color'));
			if($(this).attr('data-color') == 'black'){
                $('.clients img').each(function(){
                    var src = $(this).attr('src');
                    $(this).attr('src', src.replace(/clients\//,'clients/black-'))
                })
            }else{
                $('.clients img').each(function(){
                    var src = $(this).attr('src');
                    $(this).attr('src', src.replace(/clients\/black-/,'clients/'))
                })
            }
		});
	}
	/*----------  //FUNCTION FOR SWITCH THEME COLOR  ----------*/

	/*----------  VIDEO  ----------*/
	setTimeout(function(){
		if($(".player").length){
			$(".player").mb_YTPlayer();
			$('.home li img').css('opacity',0);
			$('.flex-direction-nav').height($(window).height());
		}	
	}, 500);
	/*----------  //VIDEO  ----------*/


	/*----------  PARALLAX  ----------*/
	function parallaxInit() {
		$('.parallax').parallax("100%", 0);
		$('.parallax1').parallax("100%", 1);
		$('.parallax2').parallax("100%", 1);
	}	
	parallaxInit();	
	/*----------  //PARALLAX  ----------*/

	/*----------  SMALL SLIDER  ----------*/
	$('.services-block-text').width($('.services-block-text-wrapper').width());
	$('.services-block').on('click', function(){
		var index = $(this).index();
		$('.services-block').removeClass('active');
		$(this).addClass('active');
		$('.services-block-text-content').css('left', $('.services-block-text-wrapper').width()*index*-1);

		return false;
	});

	$('.next-services-block').on('click', function(){
		var next = $('.services-block.active').next().length ? $('.services-block.active').next() : $('.services-block:eq(0)');
		var index = next.length ? next.index() : 0;

		$('.services-block').removeClass('active');
		next.addClass('active');
		$('.services-block-text-content').css('left', $('.services-block-text-wrapper').width()*index*-1);

		return false
	});

	$('.prev-services-block').on('click', function(){
		var prev = $('.services-block.active').prev().length ? $('.services-block.active').prev() : $('.services-block:eq(3)');
		var index = prev.length ? prev.index() : 3;

		$('.services-block').removeClass('active');
		prev.addClass('active');
		$('.services-block-text-content').css('left', $('.services-block-text-wrapper').width()*index*-1);

		return false
	});
	/*----------  //SMALL SLIDER  ----------*/

	/*----------  SUBMIT FUNCTION  ----------*/
    $('#submit').on('click', function(){
		var thiz = this;
		var flag = true;

		if(/\D/.test($('#contacts input[name="phone"]').val()) || !$('#contacts input[name="phone"]').val().length){
            $('#contacts input[name="phone"]').val('').attr('placeholder','please enter phone number').addClass('error');
            flag = false;
        }
        if(!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test($('#contacts input[name="email"]').val())){
            $('#contacts input[name="email"]').val('').attr('placeholder','please enter correct e-mail').addClass('error');;
            flag = false;
        }


        if(flag){
            $(thiz).parents('form').submit(); 
            $(thiz).addClass('success').html('success'); 
            $('#contacts input').removeClass('error');      	
        }else{
        	$(thiz).addClass('error').html('error'); 
        }

        setTimeout(function(){
        	$(thiz).removeClass('error success').html('send message'); 
        }, 3000)
        
        return false;
    });

	$("#ajax-contact-form").submit(function() {
		var str = $(this).serialize();		
		var href = location.href.replace(/light\/|pattern\/|parallax\/|video\/|slider\/|index\.html/g,'');
		$.ajax({
			type: "POST",
			url: href + "contact_form/contact_process.php",
			data: str,
			success: function(msg) {
				// Message Sent - Show the 'Thank You' message and hide the form
				if(msg == 'OK') {
					$(this).addClass('success').find('span:eq(1)').html('success'); 
				} else {
					$(this).addClass('error').find('span:eq(1)').html('error'); 
				}
			}
		});
		return false;
	});
	/*----------  //SUBMIT FUNCTION  ----------*/

})(jQuery); 