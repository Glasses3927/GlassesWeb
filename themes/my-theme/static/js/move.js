



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





/*shareボタン用*/




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





/*

function mys01f() {
	const mys01 = document.getElementById("mys01");
	hide01.classList.remove("none-content");
	mys01.classList.add("none-content");
	counter++ ;
	mys05f();
}






var lipsum1 = document.getElementById("lipsum1");
var footer = document.getElementById("footer");
var header = document.getElementById("header");
var intro = document.getElementById("intro");
var intro1 = document.getElementById("intro1");
var intro21 = document.getElementById("intro21");
var intro22 = document.getElementById("intro22");
var intro23 = document.getElementById("intro23");
var intro3 = document.getElementById("intro3");
var intro4 = document.getElementById("intro4");
var intro5 = document.getElementById("intro5");
var intro6 = document.getElementById("intro6");
var intro7 = document.getElementById("intro7");
var intro8 = document.getElementById("intro8");
var SNSlink = document.getElementById("SNSlink");
var solved = document.getElementById("solved");
var mys = document.getElementById("mys");
var mys01 = document.getElementById("mys01");
var mys05 = document.getElementById("mys05");
var hide01 = document.getElementById("hide01");
var hide02 = document.getElementById("hide02");
var hide03 = document.getElementById("hide03");
var hide04 = document.getElementById("hide04");
var hide05 = document.getElementById("hide05");
var finished = document.getElementById("finished");





function passandname() {
	var nickname = document.getElementById("username");
	var keyword = document.getElementById("pass");
	var Nickname = nickname.value;
	var Keyword = keyword.value;
	if(Keyword == "respects Glasses") {
		document.getElementById("intro22").innerText = Nickname;
		showintro();
	} else {
		alert("Password is wrong.");
	}
}

var counter = 0;

function showintro() {
	lipsum1.classList.add("none-content");
	footer.classList.add("none-content");
	header.classList.add("none-content");
	intro.classList.remove("none-content");
	setTimeout(function(){intro1.classList.remove("none-content")}, 1000);
	setTimeout(function(){intro1.classList.add("none-content")}, 2500);
	setTimeout(function(){intro21.classList.remove("none-content")}, 2500);
	setTimeout(function(){intro22.classList.remove("none-content")}, 2500);
	setTimeout(function(){intro23.classList.remove("none-content")}, 2500);
	setTimeout(function(){intro21.classList.add("none-content")}, 6500);
	setTimeout(function(){intro22.classList.add("none-content")}, 6500);
	setTimeout(function(){intro23.classList.add("none-content")}, 6500);
	setTimeout(function(){intro3.classList.remove("none-content")}, 6500);
	setTimeout(function(){intro3.classList.add("none-content")}, 9000);
	setTimeout(function(){intro4.classList.remove("none-content")}, 10000);
	setTimeout(function(){intro4.classList.add("none-content")}, 13000);
	setTimeout(function(){intro5.classList.remove("none-content")}, 14000);
	setTimeout(function(){intro5.classList.add("none-content")}, 17000);
	setTimeout(function(){intro6.classList.remove("none-content")}, 18000);
	setTimeout(function(){intro6.classList.add("none-content")}, 19500);
	setTimeout(function(){intro7.classList.remove("none-content")}, 19500);
	setTimeout(function(){intro7.classList.add("none-content")}, 21000);
	setTimeout(function(){intro8.classList.remove("none-content")}, 21000);
	setTimeout(function(){intro8.classList.add("none-content")}, 23000);
	setTimeout(function(){intro.classList.add("none-content")}, 25000);
	setTimeout(function(){mys.classList.remove("none-content")}, 25000);
	setTimeout(function(){SNSlink.classList.remove("none-content")}, 25000);
	setTimeout(function(){footer.classList.remove("none-content")}, 25000);
	setTimeout(function(){solved.classList.remove("none-content")}, 25000);
	setTimeout(function(){mys01.classList.remove("none-content")}, 25000);
	setTimeout(function(){counterVal = 0}, 25000);
	setTimeout(function(){solving = 1}, 25000);
}

var once = 0;

$(window).on("orientationchange", function() {
	hide02.classList.remove("none-content");
	if(once == 0){
		counter++ ;
		once++ ;
	}
	mys05f();
});







var arrayitem = new Array(4);
new Sortable(SNSlink, {
	ghostClass: 'ghost',
	animation: 1000,
	onUpdate: function(evt) {
		var el = document.getElementById("SNSlink");
		var items = el.querySelectorAll("div");
		for(var i = 0; i < items.length; i++) {
			arrayitem[i] = items[i].id;
		}
		if(JSON.stringify(arrayitem) == JSON.stringify(['array1', 'array2', 'array3', 'array4'])) {
			hide03.classList.remove("none-content");
			SNSlink.classList.add("none-content");
			counter++ ;
			mys05f();
		} else {
			alert("The order is different.");
		}
	}
});






var counterVal = 0;
var solving = 0;
function incrementClick() {
	if(solving == 1) {
		if(counterVal < 100) {
			counterVal++;
			var obj = document.getElementById("mys");
			mys.style.opacity -= 0.01;
		} else if(counterVal == 100) {
			alert("You like clicking, don't you?");
			hide04.classList.remove("none-content");
			counter++ ;
			counterVal++;
			mys05f();
		}
	}
}


function mys05f() {
	if(counter == 4){
		mys05.classList.remove("none-content");
		mys.classList.add("none-content");
	}
}





function last() {
	hide05.classList.remove("none-content");
	mys05.classList.add("none-content");
	finished.classList.remove("none-content");
}


*/