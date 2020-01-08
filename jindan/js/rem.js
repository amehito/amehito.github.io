/**
 * Created by caodongjie on 2017/8/9.
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})
(document, window);
/*$(function() {
    var r = document.body.offsetWidth / window.screen.availWidth;
    $(document.body).css("-webkit-transform","scale(" + r + ")");
});
$(window).resize(function() {
    var r = document.body.offsetWidth / window.screen.availWidth;
    $(document.body).css("-webkit-transform","scale(" + r + ")");
});*/
