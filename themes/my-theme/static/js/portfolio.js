
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

//CryptoJS.AES.encrypt(here, "pass").toString();
const url_enc = 'U2FsdGVkX18XC0H8h6nbwLfOfd5yxUlnVx5yxjdagWxQ3y+mmJxYA/r3hlwdmcEajBPbOoZjjcMrdrlxnRowSaA8k3p2xOCp1kmpmLZi24MKtzk63/8Of2CKYpwQS2qId+ZdMZ0jKDIRr+pshIXaIafJyJSfXozGC+hHRjUN01oK1DRaYSsSxQOE4asMgQnfgjyNoAHsEEPbUU6nRWRRCIQxlGL6jebEsgvFTmSfHbjZ5CfsWizxGelgyRHH7vWw8mDXs3XwBLfhbr6LDnRpJx21zUTBSEJH4xSFSow8fr2ZIBzMaDsd2MoY88lX3N+KCTYf7W2OVS1nU/yVz/6BlbFfrE3M7Gl7h6dJeNylP4M3iHzt62a+qaheoPWo2YFD';
const url_dec = CryptoJS.AES.decrypt(url_enc, "pass").toString(CryptoJS.enc.Utf8);

function loop(insta){
	let url = insta.media_url; // 投稿メディアのURLを取得
	let href = insta.permalink; // 投稿URLを取得
	let caption = insta.caption; //　投稿のキャプションを取得
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
