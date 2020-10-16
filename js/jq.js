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
	
	/* 여기 부터 jun_modal-popup 시작 */
	/* Code by tadjun@naver.com */
	/* img의 이미지가 작은 경우 img를 a태그로 감싸고 보여주고 싶은 이미지의 주소를 a태그의 href에 연결 하세요. */
	$('.modal-popup').each(function () {
		var $modalPop = $(this),
		//	$thisPop = $('.this-popup a'), /* a태그를 사용할때는 이 부분을 풀고 사용 하세요. */
			$thisPop = $('.this-popup img'), /* a태그를 사용할때는 이 부분을 주석 처리 하세요. */
			$imgPop = $modalPop.children('.img-popup'),
			$closePop = $modalPop.children('.close-popup');

		$thisPop.on('click', function (a) {
		  a.preventDefault(); /* a태그가 새창을 열지 못하게 합니다. */
			var imgWidth = $(this).get(0).naturalWidth, // image original width
				imgHeight = $(this).get(0).naturalHeight; // image original height

			$(this).clone().appendTo($imgPop); /* a태그를 사용할때는 이 부분을 주석 처리 하세요. */
		//	$imgPop.append('<img src="' + $(this).attr('href') + '">'); /* a태그를 사용할때는 이 부분을 풀고 사용 하세요. */

			if (imgWidth >= imgHeight) {
				$imgPop.children('img').addClass('w');
			} else {
				$imgPop.children('img').addClass('h');
			}
			$modalPop.addClass('on');
		});

		$modalPop.on('click', function () {
			$imgPop.empty();
			$modalPop.removeClass('on');
		});

		// 창크기 변화 감지 (팝업 사이즈 세팅에 사용됨.)
		$(window).resize(function () {
			popupSize();
		});

		function popupSize() {
			var wrWidth = $(window).width(),
				wrHeight = $(window).height(),
				wWidth = wrWidth * 0.9,
				wHeight = wrHeight * 0.9;
			if (wrWidth > wrHeight) {
				$imgPop.css({
					width: wHeight + 'px',
					height: wHeight + 'px'
				});
			} else {
				$imgPop.css({
					width: wWidth + 'px',
					height: wWidth + 'px'
				});
			}
		};
		$modalPop.on('scroll touchmove mousewheel', function (event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
		popupSize(); // 제일 처음 모달 팝업창 사이즈 셋팅
	});
	/* 여기가 jun_modal-popup 종료 */
	
});

	
