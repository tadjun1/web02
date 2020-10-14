$(function(){
	var $box = $('.m-con > div')
	
//gnb 메뉴 열고 닫기
	$(document).on('click','.btn-menu',function(){
		$(document).find('.gnb').addClass('on');
	});
	
	$(document).on('click','.btn-close',function(){
		$(document).find('.gnb').removeClass('on');
	});

//gnb메뉴에서 각 상품 바로가기
	$(document).on('click','.gnb-menu > a',function(){
			var idxGnb = $(this).index();

		$box.removeClass('on');
		$box.eq(idxGnb).siblings().addClass('on');
		$box.eq(idxGnb).children('a').hide(0,function(e){
			var $topImg = $('.top-img img'),
					$item = $('.in-bottom > div'),
					$itemName = $('.top-buy h3');
			
//			e.preventDefault();
			$('.d-con').hide(0);
			$('.d-con').fadeIn(500);
						
			$topImg.removeClass('on');
			$item.removeClass('on');
			$itemName.removeClass('on');
			
			$topImg.eq(idxGnb).addClass('on');
			$item.eq(idxGnb).addClass('on');
			$itemName.eq(idxGnb).addClass('on');
		});
	});
		
	//main
	$box.on('click', function(){
		var idx = $(this).index();
		
		$(this).siblings().addClass('on');
		$(this).children('a').fadeOut(1000,function(){
			var $topImg = $('.top-img img'),
					$item = $('.in-bottom > div'),
					$itemName = $('.top-buy h3');
			
			$('.d-con').fadeIn(1000);
			$topImg.eq(idx).addClass('on');
			$item.eq(idx).addClass('on');
			$itemName.eq(idx).addClass('on');
		});
	});
	
	
});

	
