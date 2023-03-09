//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される

var access = $.cookie('access')
if(!access){
	flag = true;
	$.cookie('access', false);
}else{
	flag = false	
}


//モーダル表示

$(".modal-open").modaal({
start_open:flag, // ページロード時に表示するか
overlay_close:true,//モーダル背景クリック時に閉じるか
before_open:function(){// モーダルが開く前に行う動作
	$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
},
after_close:function(){// モーダルが閉じた後に行う動作
	$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
}
});



//ポートフォリオサイト

function deletedetail() {
	document.getElementById("sample-image").classList.remove("none");
	document.getElementById("detail-image").classList.add("none");
	document.getElementById("detail-caption").innerHTML = 'YYYY-MM-DD撮影．<br>左の画像一覧から画像をクリックすると，ここに詳細が表示されます．'
}

function showimage(link) {
	document.getElementById("sample-image").classList.add("none");
	document.getElementById("detail-image").classList.remove("none");
	document.getElementById("detail-image").innerHTML = '<img src="' + link + '">';
}

resizeWindow();

window.addEventListener('resize', resizeWindow);
function resizeWindow() {
	var iw = window.innerWidth;
	if (iw < 600) {
		document.getElementById("portfolio-detail-wrap").classList.add("none");
	} else {
		document.getElementById("portfolio-detail-wrap").classList.remove("none");
	}
};