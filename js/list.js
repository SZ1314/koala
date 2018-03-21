//全部商品导航
$(".all-nav").hover(function(){
	$(".hov").css("display","block")
	$(".hov li").hover(function(){
		$(".all").css("display","block")
		$(this).addClass("li-hover")
	},function(){
		$(".all").css("display","none")
		$(this).removeClass("li-hover")

	})

},function(){
	$(".hov").css("display","none")
})

