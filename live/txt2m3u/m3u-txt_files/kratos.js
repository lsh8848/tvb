(function() {

	'use strict';

	var shareMenu = function() {
		$(".Share").click(function() {
			$(".share-wrap").fadeToggle("slow");
		});

		$('.qrcode').each(function(index, el) {
			var url = $(this).data('url');
			if ($.fn.qrcode) {
				$(this).qrcode({
					text: url,
					width: 150,
					height: 150,
				});
			}
		});
	}

	var topStart = function() {
		$('#top-Start').click(function() {
			$('html,body').animate({
				scrollTop: $('#kratos-blog').offset().top
			}, 1000);
		});
	};

	var isiPad = function() {
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function() {
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};

	var mainMenu = function() {
		$('#kratos-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});
	};

	var parallax = function() {
		$(window).stellar();
	};

	var offcanvas = function() {
		var $clone = $('#kratos-menu-wrap').clone();
		$clone.attr({
			'id': 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class': '',
			'id': ''
		});
		$('#kratos-page').prepend($clone);
		$('.js-kratos-nav-toggle').on('click', function() {
			if ($('body').hasClass('kratos-offcanvas')) {
				$('body').removeClass('kratos-offcanvas');
			} else {
				$('body').addClass('kratos-offcanvas');
			}
		});
		$('#offcanvas-menu').css('height', $(window).height());
		$(window).resize(function() {
			var w = $(window);
			$('#offcanvas-menu').css('height', w.height());
			if (w.width() > 769) {
				if ($('body').hasClass('kratos-offcanvas')) {
					$('body').removeClass('kratos-offcanvas');
				}
			}
		});
	}

	var sidebaraffix = function() {
		if ($("#main").height() > $("#sidebar").height()) {
			var footerHeight = 0;
			if ($('#page-footer').length > 0) {
				footerHeight = $('#page-footer').outerHeight(true);
			}
			$('#sidebar').affix({
				offset: {
					top: $('#sidebar').offset().top - 30,
					bottom: $('#footer').outerHeight(true) + footerHeight + 6
				}
			});
		}
	}

	var mobileMenuOutsideClick = function() {
		$(document).click(function(e) {
			var container = $("#offcanvas-menu, .js-kratos-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('kratos-offcanvas')) {
					$('body').removeClass('kratos-offcanvas');
				}
			}
		});
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint(function(direction) {
			if (direction === 'down' && !$(this.element).hasClass('animated')) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function() {
					$('body .animate-box.item-animate').each(function(k) {
						var el = $(this);
						setTimeout(function() {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});
				}, 100);
			}
		}, {
			offset: '85%'
		});
	};

	var showThumb = function(){
		(function ($) {
			$.extend({
				tipsBox: function (options) {
					options = $.extend({
						obj: null,
						str: "+1",
						startSize: "10px",
						endSize: "25px",
						interval: 800,
						color: "red",
						callback: function () { }
					}, options);
					$("body").append("<span class='num'>" + options.str + "</span>");
					var box = $(".num");
					var left = options.obj.offset().left + options.obj.width() / 2;
					var top = options.obj.offset().top - options.obj.height();
					box.css({
						"position": "absolute",
						"left": left - 12 + "px",
						"top": top + 9 + "px",
						"z-index": 9999,
						"font-size": options.startSize,
						"line-height": options.endSize,
						"color": options.color
					});
					box.animate({
						"font-size": options.endSize,
						"opacity": "0",
						"top": top - parseInt(options.endSize) + "px"
					}, options.interval, function () {
						box.remove();
						options.callback();
					});
				}
			});
		})(jQuery);

	}
/**
	var showlove = function() {
			$.fn.postLike = function() {
				if ($(this).hasClass('done')) 
                {
					layer.msg('您已经支持过了', function() {});
					return false;
				} 
                else if ($(this).hasClass('donedislike'))
                {
					layer.msg('您已经踩过了', function() {});
					return false;
				} 
                else
                {
					$(this).addClass('done');
					layer.msg('感谢您的支持');
					var id = $(this).data("id"),
						action = $(this).data('action'),
						rateHolder = $(this).children('.count');
					var ajax_data = {
						action: "love",
						um_id: id,
						um_action: action
					};
					$.post("/wp-admin/admin-ajax.php", ajax_data, function(data) {
						$(rateHolder).html(data);
					});
					return false;
				}
			};
			$(document).on("click", ".Love", function() {
				$(this).postLike();
			});
		}
 
	var showdislike = function() {
			$.fn.postDislike = function() 
            {
				if ($(this).hasClass('donedislike'))
                {
					layer.msg('您已经踩过了', function() {});
					return false;
				} 
                else if ($(this).hasClass('done')) 
                {
					layer.msg('您已经支持过了', function() {});
					return false;
				} 
                else
                {
					$(this).addClass('donedislike');
					layer.msg('感谢教育，下次肯定改！');
					var id = $(this).data("id"),
						action = $(this).data('action'),
						rateHolder = $(this).children('.count');
					var ajax_data = {
						action: "dislike",
						um_id: id,
						um_action: action
					};
					$.post("/wp-admin/admin-ajax.php", ajax_data, function(data) {
						$(rateHolder).html(data);
					});
					return false;
				}
			};
			$(document).on("click", ".Love", function() {
				$(this).postDislike();
			});
		}
**/
	var gotop = function() {
		var offset = 300,
			offset_opacity = 1200,
			scroll_top_duration = 700,
			$back_to_top = $('.cd-top'),
			$cd_gb = $('.cd-gb'),
			$cd_weixin = $('.cd-weixin');
		$(window).scroll(function(){
			( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
			if( $(this).scrollTop() > offset_opacity ) { 
				$back_to_top.addClass('cd-fade-out');
				$cd_gb.addClass('cd-fade-out');
				$cd_weixin.addClass('cd-fade-out');
			}
		});
		$back_to_top.on('click', function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0 ,
			 	}, scroll_top_duration
			);
		});
	}
	
	var weixinpic = function() {
		$("#weixin-img").mouseout(function(){
	        $("#weixin-pic")[0].style.display = 'none';
	    })
		$("#weixin-img").mouseover(function(){
	        $("#weixin-pic")[0].style.display = 'block';
	    })
	}
/**
	var showPhotos = function() {
		layer.photos({
		  photos: '.kratos-post-content'
		  ,anim: 0
		}); 
	}
**/
	var copyright = function() {
		console.log("项目托管：https://guihet.com/");
	}
    
	$(function() {
		topStart();
		mainMenu();
		shareMenu();
		parallax();
		offcanvas();
		showThumb();
		//showlove();//赞
        //showdislike();//踩
		gotop();
		weixinpic();
		mobileMenuOutsideClick();
		contentWayPoint();
		//showPhotos();
		copyright();
	});
    ////////////////////////*********评论分页AJAX，不能用********
  /*****
$(document).on("click", ".commentnav a",
    function() {
        var baseUrl = $(this).attr("href"),
        commentsHolder = $(".commentshow"),
        id = $(this).parent().data("fuck"),
        page = 1,
        concelLink = $("#cancel-comment-reply-link");
        /comment-page-/i.test(baseUrl) ? page = baseUrl.split(/comment-page-/i)[1].split(/(\/|#|&).*jQuery/)[0] : /cpage=/i.test(baseUrl) && (page = baseUrl.split(/cpage=/)[1].split(/(\/|#|&).*jQuery/)[0]);
        concelLink.click();
        var ajax_data = {
            action: "ajax_comment_page_nav",
            um_post: id,
            um_page: page
        };
        //add loading
        jQuery.post(ajax.ajax_url, ajax_data,
        function(data) {
            commentsHolder.html(data);
            //remove loading
            $("body, html").animate({
                scrollTop: commentsHolder.offset().top - 50
            },
            1e3)
        });
        return false;
    });
***/
}());