
//日本地図svg表示

const map = "../portfolio/map-full.svg"
const container = document.querySelector( '#map' )

async function csvfunc() {
	const res = await fetch(map);
	const svg = await res.text();
	container.innerHTML = svg;
	const prefs = document.querySelectorAll( '.geolonia-svg-map .prefecture' );
}

csvfunc();


//Instagram表示

const url_enc = 'U2FsdGVkX18kAsXdzDTcoUkp8gsEd6DIGpYe8HHsQ8aMiGdWub5unJQ7J+EZB8QksLk91XTUerdm3/MuQmZ253JjPR7LUsqtD9EQFW4RISflnDGQ363DfrVOtbqSsuwUYNmLrip+3xlUnSAEkfW18plc+P+1ZyDyP+uB0LO/vUrL8OtZQzuR4ZjsAyANGkR0PbX7ETXQnBmQak4dAjl/XGyQXjzEB7FfwDvRHNK6IGC+ZUgRUMg8xCs0Ej/5pr3Ckgj3g/0vE1wU7EwPJC7hc+BuaIbeI153kNGaCfQFw3sjQuNv86+wzqfMCaWRoSWTvULme3r++VF2Mg23ty8mEFGq1A+yrpdsviSTJktGwQtLpLEKZN3GVNLjFRRbMYUu';
//'U2FsdGVkX18IBOVC/JxnyX7tvjZY5LT8EAtb6GMx9PhUj2Q+bGUy1hb5K/Xt04i5nAmHYmrE0j3pYzKIxHHv3rm2j98n/WMZwJCnxnQQI366QVLR1s2F2pAwVUZDrsjyxrpSYOx/TbptaefBxUiBEYbaP/QkdKsfJabbHilO4WvLhnkiTJPru6n8rOaCWvFIKetynbgt91NrECm39rq0GHJ3/bcvqRvKZ0Tvb3otRvxACIsHGIJkDb+SHCHjNbbrvR7ZD5tlV3PXUb7KoAMPoMZwnZ9KGvQa8GyGXoCiniPSo1iRSiZnwhCJChjbbZASm6Vsw4Ym79YOQhuRE37I5f9xGlmXC8dj/R7PabWCbRg=';
const url_dec = CryptoJS.AES.decrypt(url_enc, "pass").toString(CryptoJS.enc.Utf8);

function loop(insta){
	let url = insta.media_url; // 投稿メディアのURLを取得
	let href = insta.permalink; // 投稿URLを取得
	let caption = insta.caption; //　投稿のキャプションを取得
	if(url.indexOf('.mp4') <= 0){ // .mp4以外
		$('.portfolio-list').append(`
<img src="${url}" alt="${caption}" onclick="gotoinsta('${href}')" oncontextmenu="return false;" onselectstart="return false;" onmousedown="return false;">
		`);
	}
}

(function ($) {
    $.ajax({  // jQueryのajaxでjsonデータを取得
        type: 'GET',
        url: url_dec,
        dataType: 'json',　
        success: function (json) {
            var alldata = json.data;
            for (var i=0; i<alldata.length; i++) {
				if(alldata[i].children != null) {
					var childdata = alldata[i].children.data;
					for (var j=0; j<childdata.length; j++) {
						loop(childdata[j]);
					}
				} else {
					loop(alldata[i]);
				}
            }
        }
    });
})(jQuery);

function gotoinsta(gotourl){
	window.location.href = gotourl;
}


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