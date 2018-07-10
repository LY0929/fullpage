$(function(){
	var isNo=false;
	$('#content').fullpage({
		navigation: true,
		afterSlideLoad:function(anchorLink,index,slideIndex,direction){
	 		if(slideIndex==1){
	 			$('#content .onePage2 span').show(1500).css({ 'display':'table-cell','vertical-align':'middle'});
	 			$('#content .onePage2 .onePage1_1').animate({
					'right':'0px'
				},1500)
			};
			if(slideIndex==0){
				$('#content .onePage1 span').show(1500);
				$('#content .onePage1 .onePage1_1').animate({
					'left':'0px'
				},1500)
			};
		},
		onSlideLeave:function(anchorLink,index,slideIndex,direction){
			if(slideIndex==1){
	 			$('#content .onePage2 span').hide(1500);
	 			$('#content .onePage2 .onePage1_1').animate({
					'right':'-600px'
				},1000)
			};
			if(slideIndex==0){
				$('#content .onePage1 span').hide(1500);
				$('#content .onePage1 .onePage1_1').animate({
					'left':'-500px'
				},1000)
			};
		},
		afterLoad:function(anchorLink,index){
			if(index==1){
				$('#content .onePage1 span').show(1500);
				$('#content .onePage2 span').show(1500).css({ 'display':'table-cell','vertical-align':'middle'});
				$('#content .onePage1 .onePage1_1').animate({
					'left':'0px'
				},1500);
			};
			if(index==2){
				$('#content .twoPage .twoPage_left1_img').each(function(){
					$(this).transition({
	   					rotateY: 0,
	   					y:0
					},1500)
				});
				$('.twoPage_right').transition({
					x:0
				},1000);
				$('.two_line').transition({
					y:0
				},1000);
				$('.twoPage .twoPage_left .twoPage_left1_img').eq(1).delay(500).animate({
					'margin':'0px 20px'
				})
			};
			if(index==3){
					$('.threePage_right').transition({y:0},1000)	
					$('.three_content_1').eq(0).show().transition({x:0},1000).siblings().hide();
					$('.three_nav li').off('click');
					$('.three_nav li').on('click',function(){
						$('.threePage_right').each(function(){
							$(this).transition({y:-1500},0);
							console.log('sss')	
						})
					$(this).css({'background':'#000'});
					$(this).siblings().css({'background':'#222'})
					$(this).find('div').css({'border': '1px solid white'});
					$(this).siblings().find('div').css({'border':'1px solid transparent'});
					$('.three_content_1').eq($(this).index()).show().transition({x:0},1000).siblings().hide();
					$('.three_content_1').eq($(this).index()).siblings().transition({x:1500});
					$('.threePage_right').each(function(){
						$(this).transition({y:0},1000)	
						})
					});
					$('.three_nav li').each(function(index){
						$(this).transition({
							x:0
						},(index+1)*800)
					}).animate({'margin-bottom':'2px'},1000)		
			};
			if(index==4){
				$('.fourthPage .fourthPage_text').eq(0).transition({y:0},1000);
				$('.fourthPage .fourthPage_text').eq(1).delay(1000).transition({x:0},1000);
				$('.fourthPage .fourthPage_text').eq(2).delay(2000).transition({y:0},1000);
				$('.fourthPage').find('.fourthPage_right').fadeIn(1500);
				$('.fourthPage').find('.two span').animate({'font-size':'34px'},1500);
				$('.fourthPage').find('.two p').animate({'font-size':'14px'},1500);
			};
			if(index==5){
				$('.fifthPage > p').eq(0).show(1000)

				$('.fifthPage > p').eq(1).delay(1000).show(1000);
				$('.fifth_img').slideDown(2000);
			}
			if(index==6){
				$('.sixPage .text_title').find('h4').animate({'font-size':'34px'},2000);
				$('.sixPage .text_title').find('p').animate({'font-size':'14px'},2000);
				$('.sixPage .text_title').fadeIn(2000);
				$('.sixPage .sixPage_img .sixPage_text').each(function(index){
					 $('.sixPage .sixPage_img .sixPage_text').eq($(this).index()).transition({x:0},(index+1)*500)
				});
				$('.sixPage .sixPage_img .sixPage_text').eq(1).delay(600).animate({
					'margin':'0px 40px'
				},700);
				$('.sixPage_text').each(function(index){
					$('.sixPage_text img').eq(index).mouseenter(function(){
						$('.mouse').eq(index).slideDown(500)
					})
				});
				$('.mouse').each(function(index){
					$(this).mouseleave(function(){
						$(this).slideUp(500)
					})
				});
				$('.sixPage_text').each(function(){
					$(this).mouseleave(function(){
						$(this).find('.mouse').slideUp(500);
					})
				});
				$('.sixPage > p').transition({
					y:0
				},1500);
			}
		},
		onLeave:function(index,anchorLink){
			if(index==1){
				$('#content .onePage1 span').hide(1500);
				$('#content .onePage2 span').hide(1500);
				$('#content .onePage1 .onePage1_1').animate({
					'left':'-500px'
				},1000);
			};
			if(index==2){
				$('#content .twoPage .twoPage_left1_img').transition({
					perspective: '500px',
	   				rotateY: -180,
	   				x:-700
				},1000);
				$('#content .twoPage .twoPage_left1_img').transition({x:0},0)
				$('#content .twoPage .twoPage_left1_img').transition({
					y:800
				})
				$('.twoPage_right').transition({
					x:300
				},500);
				$('.two_line').transition({
					y:456
				},500);
				$('.twoPage .twoPage_left .twoPage_left1_img').eq(1).delay(500).animate({
					'margin':'0px'
				})
			};
			if(index==3){
				$('.three_content_1').transition({
					x:1500
				});
				$('.three_nav li div').css({'border':'1px solid transparent'});
				$('.three_nav li div').eq(0).css({'border':'1px solid white'});
				$('.three_nav li').css({'background':'#222'})
				$('.three_nav li').eq(0).css({'background':'#000'});
				$('.three_nav li').each(function(index){
					$(this).transition({
						x:-1500
					},500)
				})
				$('.threePage_right').each(function(){
					$(this).transition({y:-1500},500)	
				})
			}	
			if(index==4){
				$('.fourthPage .fourthPage_text').eq(0).transition({y:-500});
				$('.fourthPage .fourthPage_text').eq(1).transition({x:1000});
				$('.fourthPage .fourthPage_text').eq(2).transition({y:500});
				$('.fourthPage').find('.fourthPage_right').fadeOut(1000);
				$('.fourthPage').find('.two span').animate({'font-size':'7px'},1500);
				$('.fourthPage').find('.two p').animate({'font-size':'2px'},1500);
			};
			if(index==5){
				$('.fifthPage > p').eq(0).hide(1000);
				$('.fifthPage > p').eq(1).delay(1000).hide(1000);
				$('.fifth_img').slideUp(500);
			}
			if(index==6){
				$('.sixPage .text_title').fadeOut(1000);
				$('.sixPage .text_title').find('h4').animate({'font-size':'10px'});
				$('.sixPage .text_title').find('p').animate({'font-size':'7px'});

				$('.sixPage .sixPage_img .sixPage_text').eq(1).delay(2000).animate({
					'margin':'0px'
				},0);
				$('.sixPage .sixPage_img .sixPage_text').transition({
					x:2000
				},0);
				$('.sixPage > p').transition({
					y:-1500
				},100);
			}
		}	
	});
	setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 4000);
	$('#content .onePage1 span').show(1500);
	$('#content .onePage1 .onePage1_1').animate({
		'left':'0px'},1500);
	$('#content .twoPage .twoPage_left1_img').transition({
		y:1000
	});
	$('#content .twoPage .twoPage_left1_img').transition({
		perspective: '500px',
   		rotateY: -180
	})
	$('.twoPage_right').transition({
		x:300
	})
	$('.two_line').transition({
		y:456
	})
	
	$('.three_content_1').transition({x:1500});
	$('.fourthPage .fourthPage_text').eq(0).transition({y:-500});
	$('.fourthPage .fourthPage_text').eq(1).transition({x:1000});
	$('.fourthPage .fourthPage_text').eq(2).transition({y:500});
	$('.fourthPage').find('.fourthPage_right').fadeOut(1000);

	$('.fifthPage > p').eq(0).hide();
	$('.fifthPage > p').eq(1).hide(1000);
	$('.fifth_img').slideUp();


	$('.sixPage .sixPage_img').each(function(){
		$(this).find('img').click(function(){
			window.open('pubuliu.html',"_blank")
		})
	});
	$('.sixPage .sixPage_img').each(function(){
		$(this).find('.mouse').click(function(){
			window.open('pubuliu.html',"_blank")
		})
	});
	$('.sixPage .sixPage_img .sixPage_text').transition({
		x:2000
	});
	$('.mouse').slideUp();
	$('.three_nav li').eq(0).css({'background':'#000'});
	$('.three_nav li').each(function(index){
		$(this).transition({
			x:-1500
		},500)
	})
	$('.threePage_right').transition({
		y:-1500
	})
	$('.sixPage > p').transition({
		y:-1500
	})
});