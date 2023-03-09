var param = location.search;

if(param == '?hoge=hoge'){
    document.location = "../real/";
} else {
    var url = document.referrer;
    param = '?' + url.split('?')[1]
    if(param != '?hoge=hoge'){
        document.location = "../login/";
    }
}


//ローディング後フェードアウト
$("#splash").delay(1500).fadeOut(500);