 	$(".litimgUl li").mouseenter(function(){
 		var index = $(this).index();
 		var src = $(this).children().children().attr("src")
 		console.log(src);
 		$(".litimgUl li").eq(index).children().addClass("on").parent().siblings().children().removeClass("on");
 		$(".bigImg").children().attr("src",src);
 		$(".cenImg").attr("src",src);
 		$(".lookImg").attr("href",src);
 	})
 	
 	$(".showImgBox").hover(function(){
 		$(".showImgBox").mousemove(function(e){
	 		var e = e || event;
	 		$(".bigImg").css("display","block")
	 		$(".shadow").css("display","block")
	 		var x = e.pageX - $(".shadow").outerWidth()/2 - $(".cenImg").offset().left;
	 		var y = e.pageY - $(".shadow").outerHeight()/2 - $(".cenImg").offset().top;
	 		var maxL = $(".cenImg").outerWidth()-$(".shadow").outerWidth();
	 		var maxT = $(".cenImg").outerHeight()-$(".shadow").outerHeight();
	 		x = Math.min( maxL , Math.max(0,x) ) ;
	 		y = Math.min( maxT , Math.max(0,y) ) ;
	 		$(".shadow").css({
	 			left : x,
	 			top : y
	 		})
	 		console.log(x,y)
	 		//  大图left /.shadow.left = 大图宽度 / 小图宽度 = 大图可视区宽度 /shadow的宽度
	 		$(".bigImg").children().css({
	 			left: - x * 800/400,
	 			top :- y * 800/400
	 		})
	 	})
 	},function (){
 		$(".shadow").css("display","none")
 		$(".bigImg").css("display","none")

 	})
	

	$(".left").hover(function(){
		$(this).addClass("hov")
	 	$(".left").click(function(){
	 		if( $(".litimgUl").position().left == 0 ){
	 			return;
	 		}
			var left = $(".litimgUl").position().left + 80;
			// console.log(left)
	 		$(".litimgUl").animate({"left":left},100)
	 	})
	},function(){
		$(this).removeClass("hov")
	})
	$(".right").hover(function(){
		$(this).addClass("hov")
	 	$(".right").click(function(){
	 		if( $(".litimgUl").position().left == -160 ){
	 			return;
	 		}
			var left = $(".litimgUl").position().left - 80;
			// console.log(left)
	 		$(".litimgUl").animate({"left":left},100)
	 	})
	},function(){
		$(this).removeClass("hov")
	})
