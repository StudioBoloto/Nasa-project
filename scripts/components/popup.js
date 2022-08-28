var modal = document.getElementById('myPopup');
var btn_open = document.getElementById('btnOpen');
var btn_close = document.getElementById('btnClose');

btn_open.onclick = function () {
    modal.style.display = 'flex';
}

btn_close.onclick = function () {
    modal.style.display = 'none';
}