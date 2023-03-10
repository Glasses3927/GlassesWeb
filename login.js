//ログインページ

function passfocus() {
    moving01.classList.add('focus');
    moving02.classList.add('focus');
};

function passblur() {
    moving01.classList.remove('focus');
    moving02.classList.remove('focus');
};

const sha256 = async (text) => {    //SHA-256によるハッシュ化
    const uint8  = new TextEncoder().encode(text)
    const digest = await crypto.subtle.digest('SHA-256', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
}

function check(hash,password) {
    if(hash == "71ee6072884e40f5b8bbcda08c3a2827f3fa4d466078c9ece026f827e3399d17"){
        //CryptoJS.AES.encrypt(origin, password).toString();
        //AESによる暗号化/復号
        const encrypted="U2FsdGVkX1/E0eM3OIPhcFnG6DgIYSR0jL3gRjXbPw5Z1EiiRaXd8lYWahkjhJt2";
        const decrypted = CryptoJS.AES.decrypt(encrypted, password).toString(CryptoJS.enc.Utf8);
        document.location = decrypted;
    } else {
        alert("パスワードが間違っています．");
    }
}

function login() {
    var password = document.getElementById("pass").value;
    sha256(password).then(hash256 => check(hash256,password));
}