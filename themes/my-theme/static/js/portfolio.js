
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

(function ($) {
    $.ajax({  // jQueryのajaxでjsonデータを取得
        type: 'GET',
        url: 'https://graph.facebook.com/v13.0/17841459095674512?fields=name,media{caption,like_count,media_url,permalink,timestamp,username,thumbnail_ur,thumbnail_url,comments_count,media_type}&access_token=EAANaF1uKnkkBAJLpsu4Ii8KlQaQfxbXhNjWNYZBHCZCcgLwK2t8xIRzDkkjZA6n2ZA0ZBWA9T9oUcZAMf8sNDNizoUlKohAU9QSc8y7F08SS1b8bAa5GJrt9kogEa7nGw3iXgPOqK1KPffLSlVQrgT64ENzOpzvPOw54g7Rfqs4UQiGeJfVLFE',
        dataType: 'json',　
        success: function (json) {
            var insta = json.media.data;
            for (var i = 0; i < 6; i++) {
            	let url = insta[i].media_url; // 投稿メディアのURLを取得
        		let href = insta[i].permalink; // 投稿URLを取得
            	let caption = insta[i].caption; //　投稿のキャプションを取得
            	if(url.indexOf('.mp4') <= 0){ // .mp4以外
            		$('.portfolio-list').append(`
<img src="${url}" alt="${caption}" onclick="gotoinsta('${href}')">
            		`);
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