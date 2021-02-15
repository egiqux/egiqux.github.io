!function (n) {
    // Generate QR code
    var url = window.location.href;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    url = encodeURIComponent(url)
    var desc = encodeURIComponent("It is a website about love.");
    var title = encodeURIComponent("Shall I compare thee to a summer's day?");
    var topic = encodeURIComponent("#Sonnet 18##Romance#")
    var picurl = encodeURIComponent("https://www.sameen.cn/assets/images/share.png");
    var ShareTip = function () { }
    // Share via QQ
    ShareTip.prototype.share2qq = function (url, title, desc, picurl) {
        var shareurl = 'https://connect.qq.com/widget/shareqq/index.html?url=' + url + '&desc=' + desc + '&title=' + title + '&pics=' + picurl + '&style=201&width=32&height=32';
        window.open(shareurl, "_blank", "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes");
    }
    // Share via Weibo
    ShareTip.prototype.share2weibo = function (url, title, picurl) {
        var shareurl = 'https://service.weibo.com/share/share.php?url=' + url + '&title=' + title + topic + '&pic=' + picurl;
        window.open(shareurl, "_blank", "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes");
    }
    $(".a-qrcode").on("click", function () {
        if ($("#via").length > 0) {
            $("#scanqrcode").after("<p id='vias'>To scan this code, you can use a QR scanner app on your phone, or some camera apps.</p>");
            $("#via").remove();
        }
    })
    $(".a-weixin").on("click", function () {
        if ($("#vias").length > 0) {
            $("#scanqrcode").append("<span id='via'><br />via WeChat</span>");
            $("#vias").remove();
        }
    })
    $(".a-qq").on("click", function () {
        var share = new ShareTip();
        share.share2qq(url, title, desc, picurl);
    })
    $(".a-weibo").on("click", function () {
        var share = new ShareTip();
        share.share2weibo(url, title, picurl);
    })
}(jQuery);