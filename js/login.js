//ログインページ

function passfocus() {
    moving01.classList.add('focus');
    moving02.classList.add('focus');
};

function passblur() {
    moving01.classList.remove('focus');
    moving02.classList.remove('focus');
};

function login() {
    document.location = "../real?hoge=hoge";
}