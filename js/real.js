const sha256 = async (text) => {    //SHA-256によるハッシュ化
    const uint8  = new TextEncoder().encode(text)
    const digest = await crypto.subtle.digest('SHA-256', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
}

var param = location.search;
sha256(param).then(hash => {
    if(hash == '4d6ef576cb7bcab08f69612cf92b27f73817e6063ed147ea1d370ee68ac47ff3'){
        document.location = "../real/";
    } else {
        var url = document.referrer;
        param = '?' + url.split('?')[1]
        sha256(param).then(hash => {
            if(hash != '4d6ef576cb7bcab08f69612cf92b27f73817e6063ed147ea1d370ee68ac47ff3'){
                document.location = "../login/";
            }
        });
    }    
});



//ローディング後フェードアウト
$("#splash").delay(1500).fadeOut(500);