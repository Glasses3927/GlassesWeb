//ナビゲーションウィンドウ用

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#container").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
    $("#container").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});



//Topページブラー

function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ 
		var elemPos = $(this).offset().top+100;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');
		}else{
		$(this).removeClass('blur');
		}
		});
}

$(window).scroll(function () {
	BlurTextAnimeControl();
});

$(window).on('load', function () {
	BlurTextAnimeControl();
});



//shareボタン用

function share() {
	let sharetitle = document.getElementById("share-title").innerText
	let shareurl = document.getElementById("share-url").innerText
	let sharetext = document.getElementById("share-text").innerText
	
	if (navigator.share) {
	  navigator.share({
		title: sharetitle,
		text: sharetext,
		url: shareurl.replace("%23","#"),
	  })
	} else {
	  alert('Web Share API is not supported!!\nこのブラウザはWeb Share API非対応です。');
	}
}
document.getElementById('share').addEventListener('click', share);