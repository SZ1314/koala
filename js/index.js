//全部商品导航
$('.hov').hover(function(){
	$(".hov").css("display","block")
	$(".hov li").hover(function(){
		$(".all").css("display","block")
		$(this).addClass("li-hover")
	},function(){
		$(".all").css("display","none")
		$(this).removeClass("li-hover")

	})

},function(){
	$(".hov").css("display","block")
})


//滚动条事件
window.onscroll = function(){
	var sTop = document.documentElement.scrollTop || document.body.scrollTop;
	if( sTop > 30 ){
		$("#logeCo").addClass("log");
		$("nav").addClass("nav");
		$("#search").css("display","none")
		$(".logeCoWrap").css("height","50px")
		$(".ccoo").css({"paddingTop":"6px","marginLeft":"170px","float":"none"})
		$(".loge").addClass("lg");
		$(".shop").css("marginTop","8px");
	}else{
		$("#logeCo").removeClass("log");
		$("nav").removeClass("nav");
		$("#search").css("display","block")
		$(".logeCoWrap").css("height","100px")
		$(".ccoo").css({"paddingTop":"30px","marginLeft":"0","float":"left"})
		$(".loge").removeClass("lg");
		$(".shop").css("marginTop","30px");

	}

		if( sTop > 560 ){
			$(".rightBarNew").addClass("rightscr");
			$("aside").css({"position":"fixed","top": "66px"});
		}else if( sTop < $(".srcolltop").offset().top-160){
			$("aside").css({"position":"absolute","top": "-230px"});
			$(".rightBarNew").removeClass("rightscr");
		}
}

$(".srcolltop").click(function(){
	document.documentElement.scrollTop = document.body.scrollTop = 0;
	console.log($(".srcolltop").offset().top)
})

var timer =setInterval(autoplay,5000)	
var index = 0
function autoplay(){
	index++;
	if( index == $("#banner ol li").size() ){
		index = 0;
	}
	// console.log(index)
	$("#banner ol li").eq(index)
					  .addClass("on")
					  .siblings()
					  .removeClass("on");
	$("#banner ul li").eq(index)
					  .fadeIn(1000)
					  .siblings()
					  .fadeOut(1000)
}

$("#banner").mouseenter(function(){

	//左右箭头显示
	$(this).children("div").animate({"opacity" : 0.6},300);

	// 停止计时机器
	clearInterval(timer);

	$("#banner ol li").mouseover(function(){
		index = $(this).index();
		$(this).addClass("on")
			   .siblings()
			   .removeClass("on");
		$("#banner ul li").eq($(this).index())
			   .fadeIn(1000)
			   .siblings()
			   .fadeOut(1000);
	})

	//鼠标滑过左右箭头切换图片
	$(".lr a:eq(1)").mouseenter(function(){
		$(this).css("backgroundPosition","-625px -153px")
		$(".lr a:eq(1)").click(function(){
		index--;
		if( index == -1 ){
			index = 7;
		}
		console.log(index)
		$("#banner ol li").eq(index)
						  .addClass("on")
						  .siblings()
						  .removeClass("on");
		$("#banner ul li").eq(index)
						  .fadeIn(1000)
						  .siblings()
						  .fadeOut(1000)
		})
	})
	$(".lr a:eq(0)").mouseenter(function(){
		$(this).css("backgroundPosition","-670px -153px")
		$(".lr a:eq(0)").click(autoplay)
	})
	$(".lr a:eq(1)").mouseleave(function(){
		$(this).css("backgroundPosition","-625px -68px")
	})
	$(".lr a:eq(0)").mouseleave(function(){
		$(this).css("backgroundPosition","-670px -67px")
	})

	//点击左右尽头切换图片
	
});


$("#banner").mouseleave(function(){
	$(this).children("div").animate({"opacity" : 0},300);
	timer = setInterval(autoplay,5000)
	
})



//倒计时
var start = new Date();//当前时间
	//如果时分秒默认  默认是早上08:00:00
	var end = new Date("2018-3-14 12:00:00");//结束时间
	var t = diff ( start ,end );
	
	//时间显示
	function showTime(){
		//剩余的小时
		var h = parseInt(t/3600);
		//剩余的分钟 = 剩余的秒数  / 60: 
		var m = parseInt( (t - h*3600)/60 );
		//剩余的秒数
		var s = parseInt(t - h*3600 - m * 60);
		$(".time .timer i:eq(0)").html(parseInt(h/10)) ;
		$(".time .timer i:eq(1)").html(h%10);
		$(".time .timer i:eq(2)").html(parseInt(m/10)) ;
		$(".time .timer i:eq(3)").html(m%10) ;
		$(".time .timer i:eq(4)").html(parseInt(s/10)) ;
		$(".time .timer i:eq(5)").html(s%10) ;
	}
	showTime();
	
	var timer = setInterval(function(){
		t--;
		if( t < 0 ){
			$(".timer").children().remove()
			$(".timer").html("商品已过期");
			clearInterval(timer);
		}else{
			showTime();
		}
	},1000)



//轮播，淡入浅出（404）
var num = 0;
var wid = 59;
setInterval(slideshow,3000)
function slideshow(){
	num++;
	wid += 61 
	if( num == 3 ){
		num = 0;
		wid = 59;
	}
	$(".brandLeft ul li").eq(num)
						 .fadeIn(1000)
						 .siblings()
						 .fadeOut(1000);
	$(".brandLeft ol li:last").css("width",wid)
}


$(function(){
	$(".brandLeft").hover(function(){
		$(".brandLeft .coord").animate({"opacity":0.2},500)
	},function(){		
		$(".brandLeft .coord").animate({"opacity":0},500)
	})

})


//brand
$(function(){
	$(".brandRight li").hover(function(){
		$(this).children(1).animate({"opacity":1},100)
		$(".follow").mouseenter(function(){
			$(this).css({"backgroundColor":"#fff","color":"#333"})
		})
		$(".follow").mouseleave(function(){
			$(this).css({"backgroundColor":"transparent","color":"#fff"})
		})
	},function(){
		$(".hide").animate({"opacity":0},100)
	})
	
})

//floorCon
var three = 0;
var timeThree = setInterval(slideshowThree,4000)
function slideshowThree(){
	three++;
	if( three == 3 ){
		three = 0
	}
	$(".partthree ul li").eq(three)
						 .fadeIn(1000)
						 .siblings()
						 .fadeOut(1000)
	$(".partthree ol li").eq(three)
						 .addClass("on")
						 .siblings()
						 .removeClass("on")
}

$(function(){
	$(".partthree").hover(function(){
		clearInterval(timeThree);
		three = $(this).index();
		$(".partthree ol li").mouseenter(function(){
			$(".partthree ul li").eq($(this).index())
								 .fadeIn(1000)
								 .siblings()
								 .fadeOut(1000)
			$(".partthree ol li").eq($(this).index())
								 .addClass("on")
								 .siblings()
								 .removeClass("on")
		});
	},function(){
		var timeThree = setInterval(slideshowThree,4000)
	})
})