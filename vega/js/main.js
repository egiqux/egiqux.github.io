$(function () {
    let command_count = 0;
    let init = false;
    setTimeout(function () {
        $("#in").focus();
        init = true;
    }, 11000);
    $(document).on("click", function () {
        if (init) {
            $("#in").focus();
        }
    });
    $(document).keypress(function (event) {
        let keynum = (event.keyCode ? event.keyCode : event.which);
        if (keynum == '13') {
            let input = "";
            let s = "";
            if ($("#in")) {
                input = $("#in").val();
                if (input)
                    for (let i = 0; i < input.length; i++) {
                        s += "*";
                    }
            }
            if (input !== "" && input !== undefined) {
                if (input === "roy" || input === "Roy" || input === "ROY") {
                    $("#in").remove();
                    $("#main").append("<p class='prompt-info'>" + s + "</p>");
                    download();
                    setTimeout(function () {
                        $("#main").append("<p class='prompt-info'>The password has been downloaded to your local computer.</p>" +
                            "<p class='prompt-status'>(❥(^_-)</p>" +
                            "<input type='password' id='in'>");
                        $("#in").focus();
                    }, 1000);
                } else if (input === "7777") {
                    $("#in").remove();
                    let currentDate = new Date();
                    let mouth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
                    let dateTime = weekday[currentDate.getDay()] + " " + mouth[currentDate.getMonth()] + " " + currentDate.getDate() + " " + time + " " + currentDate.getFullYear();

                    let navUserAgent = navigator.userAgent;
                    let browserName = navigator.appName;
                    let browserVersion = '' + parseFloat(navigator.appVersion);
                    let majorVersion = parseInt(navigator.appVersion, 10);
                    let tempNameOffset, tempVersionOffset, tempVersion;


                    if ((tempVersionOffset = navUserAgent.indexOf("Opera")) !== -1) {
                        browserName = "Opera";
                        browserVersion = navUserAgent.substring(tempVersionOffset + 6);
                        if ((tempVersionOffset = navUserAgent.indexOf("Version")) !== -1)
                            browserVersion = navUserAgent.substring(tempVersionOffset + 8);
                    } else if ((tempVersionOffset = navUserAgent.indexOf("MSIE")) !== -1) {
                        browserName = "Microsoft Internet Explorer";
                        browserVersion = navUserAgent.substring(tempVersionOffset + 5);
                    } else if ((tempVersionOffset = navUserAgent.indexOf("Chrome")) !== -1) {
                        browserName = "Chrome";
                        browserVersion = navUserAgent.substring(tempVersionOffset + 7);
                    } else if ((tempVersionOffset = navUserAgent.indexOf("Safari")) !== -1) {
                        browserName = "Safari";
                        browserVersion = navUserAgent.substring(tempVersionOffset + 7);
                        if ((tempVersionOffset = navUserAgent.indexOf("Version")) !== -1)
                            browserVersion = navUserAgent.substring(tempVersionOffset + 8);
                    } else if ((tempVersionOffset = navUserAgent.indexOf("Firefox")) !== -1) {
                        browserName = "Firefox";
                        browserVersion = navUserAgent.substring(tempVersionOffset + 8);
                    } else if ((tempNameOffset = navUserAgent.lastIndexOf(' ') + 1) < (tempVersionOffset = navUserAgent.lastIndexOf('/'))) {
                        browserName = navUserAgent.substring(tempNameOffset, tempVersionOffset);
                        browserVersion = navUserAgent.substring(tempVersionOffset + 1);
                        if (browserName.toLowerCase() === browserName.toUpperCase()) {
                            browserName = navigator.appName;
                        }
                    }

                    if ((tempVersion = browserVersion.indexOf(";")) !== -1)
                        browserVersion = browserVersion.substring(0, tempVersion);
                    if ((tempVersion = browserVersion.indexOf(" ")) !== -1)
                        browserVersion = browserVersion.substring(0, tempVersion);

                    let st = dateTime + " from " + browserName + " " + browserVersion;

                    $("#main").append("<p class='prompt-info'>" + s + "</p>" +
                        "<p class='prompt-info'>Accessed: " + st + "</p>" +
                        "<p class='prompt-info'>Welcome to Vega Virtual Terminal!</p>");
                    setTimeout(function () {
                        welcome();
                        $("#secondary").append("<p class='prompt line-480 anim-typewriter480'>This is a terminal emulator designed for Sameen.</p>" +
                            "<p class='prompt line-48 anim-typewriter48'>Try to execute some commands, e.g., ps, ls, etc.</p>");
                        window.scrollTo(0, document.body.scrollHeight);
                    }, 1000);
                    setTimeout(function () {
                        welcome();
                        $("#secondary").append("<b id='sign'>></b><input type='text' id='command'>");
                        $("#command").focus();
                        window.scrollTo(0, document.body.scrollHeight);
                    }, 15000);
                } else if (input !== "7777") {
                    $("#in").remove();
                    $("#main").append("<p class='prompt-info'>" + s + "</p>" +
                        "<p class='prompt-warning'>Permission denied, please try again.</p>" +
                        "<p class='prompt-status'>(enter the english name of your little assistant for help</p>" +
                        "<input type='password' id='in'>");
                    $("#in").focus();
                }
            }
            $(document).on("click", function () {
                if ($("#command")) {
                    $("#command").focus();
                }
            });
            let command = "";
            let exiting = false;
            if ($("#command")) {
                command = $("#command").val();
            }
            if (command !== "" && command !== undefined) {
                command_count++;
                if (command === "ps") {
                    $("#sign").remove();
                    $("#command").remove();
                    $("#secondary").append("<p class='prompt-info'>> ps</p>");
                    $("#secondary").append("<p class='prompt-warning'>no running process</p>");
                } else if (command === "ls") {
                    $("#sign").remove();
                    $("#command").remove();
                    $("#secondary").append("<p class='prompt-info'>> ls</p>");
                    $("#secondary").append("<p class='prompt-warning'>nothing found</p>");
                } else if (command === "exit") {
                    exiting = true;
                    $("#sign").remove();
                    $("#command").remove();
                    $("#secondary").append("<p class='prompt-info'>> exit</p>");
                    $("#secondary").append("<p class='prompt-info'>exiting...<span id='dots'></span></p>");
                    for (let i = 0; i < 5; i++) {
                        (function (i) {
                            //var backup = i;//定义个backup也可以暂存i值
                            setTimeout(function () {
                                $("#dots").append("...");
                            }, i * 1000);
                        })(i);
                    }
                    setTimeout(function () {
                        $("#secondary").append("<p class='prompt'>Wait</p>");
                        window.scrollTo(0, document.body.scrollHeight);
                    }, 5000);
                    setTimeout(function () {
                        $("#secondary").append("<p class='prompt line-14 anim-typewriter14'>One more thing</p>");
                        window.scrollTo(0, document.body.scrollHeight);
                    }, 7000);
                    setTimeout(function () {
                        meme();
                        window.scrollTo(0, document.body.scrollHeight);
                    }, 11000);
                    setTimeout(function () {
                        $("#hm").addClass("fulfill");
                        $("#bd").addClass("fulfill").html("").css("background-color", "#f8f9fa").css("color", "#343a40").append("<div id='lv'></div>")
                        $("#lv").addClass("fulfill").addClass("central").html("I love u&nbsp;")
                    }, 15500);
                    setTimeout(function () {
                        $("#lv").append("<svg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='32' height='32'><path d='M512.036571 950.857143c-9.142857 0-18.285714-3.437714-25.161142-10.276572l-356.571429-343.990857c-4.571429-3.986286-130.304-118.857143-130.304-256C0 173.165714 102.290286 73.142857 273.152 73.142857c99.986286 0 193.718857 78.848 238.848 123.428572C557.129143 151.990857 650.861714 73.142857 750.848 73.142857c170.861714 0 273.152 99.986286 273.152 267.446857 0 137.142857-125.696 252.013714-130.852571 257.133715l-355.986286 342.857142a35.547429 35.547429 0 0 1-25.161143 10.276572z' fill='#dc3545'></path></svg>")
                    }, 17000);
                } else {
                    $("#sign").remove();
                    $("#command").remove();
                    $("#secondary").append("<p class='prompt-info'>> " + command + "</p>");
                    $("#secondary").append("<p class='prompt-warning'>" + command + ": Undefined command</p>");
                }
                window.scrollTo(0, document.body.scrollHeight);
                if (!exiting) {
                    switch (command_count) {
                        case 1:
                            $("#secondary").append("<p class='prompt-status'>( Vega is the brightest star in the northern constellation of Lyra</p>");
                            $("#secondary").append("<b id='sign'>></b><input type='text' id='command'>");
                            $("#command").focus();
                            break;
                        case 2:
                            $("#secondary").append("<p class='prompt-status'>( Vega is known as the zhī nǚ Star in China</p>");
                            $("#secondary").append("<b id='sign'>></b><input type='text' id='command'>");
                            $("#command").focus();
                            break;
                        case 3:
                            $("#secondary").append("<p class='prompt-status'>( None of this matters</p>");
                            setTimeout(function () {
                                $("#secondary").append("<p class='prompt-info' style='text-align: center'>Happy <span class='purple'>Qi</span>xi Festival!</p>");
                                window.scrollTo(0, document.body.scrollHeight);
                            }, 1500);
                            setTimeout(function () {
                                $("#secondary").append("<b id='sign'>></b><input type='text' id='command'>");
                                $("#command").focus();
                                window.scrollTo(0, document.body.scrollHeight);
                            }, 3000);
                            break;
                        default:
                            $("#secondary").append("<p class='prompt-info'>You can try to execute these commands in Windows PowerShell, this emulator is so crude.</p>" +
                                "<p class='prompt-info'>Type 'exit' to quit the emulator</p>");
                            $("#secondary").append("<b id='sign'>></b><input type='text' id='command'>");
                            $("#command").focus();
                    }
                }
                window.scrollTo(0, document.body.scrollHeight);
            }
        }
    });
});

function download() {
    let text = "弟弟行为gxq\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "(密码在底下\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "7777";
    // 下载
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "passwd.txt");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function welcome() {
    $("#welcome").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77777777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;77777777777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77777777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77777777&nbsp;777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;777777&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;______&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77777777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/\\&nbsp;\\&nbsp;&nbsp;__/\\&nbsp;\\/\\&nbsp;&nbsp;___\\&nbsp;/\\&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/\\&nbsp;&nbsp;_`\\&nbsp;&nbsp;/\\&nbsp;&nbsp;__`\\&nbsp;&nbsp;/'\\_/`\\/\\&nbsp;&nbsp;___\\&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;\\&nbsp;\\/\\&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;\\__/_\\&nbsp;\\&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;\\&nbsp;\\/\\_\\\\&nbsp;\\&nbsp;\\/\\&nbsp;\\/\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;\\&nbsp;\\__/_&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;&nbsp;___\\\\&nbsp;\\&nbsp;\\&nbsp;&nbsp;__\\&nbsp;\\&nbsp;\\/_/_\\&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;\\&nbsp;\\__\\&nbsp;\\&nbsp;\\&nbsp;&nbsp;___\\&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;\\&nbsp;\\_/&nbsp;\\_\\&nbsp;\\&nbsp;\\&nbsp;\\__/_\\&nbsp;\\&nbsp;\\L\\&nbsp;\\\\&nbsp;\\&nbsp;\\L\\&nbsp;\\\\&nbsp;\\&nbsp;\\_\\&nbsp;\\&nbsp;\\&nbsp;\\_/\\&nbsp;\\&nbsp;\\&nbsp;\\__/_&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;`\\___x___/\\&nbsp;\\_____\\\\&nbsp;\\____/&nbsp;\\&nbsp;\\____/&nbsp;\\&nbsp;\\_____\\&nbsp;\\_\\\\&nbsp;\\_\\&nbsp;\\_____\\<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'\\/__//__/&nbsp;&nbsp;\\/_____/&nbsp;\\/___/&nbsp;&nbsp;&nbsp;\\/___/&nbsp;&nbsp;&nbsp;\\/_____/\\/_/&nbsp;\\/_/\\/_____/<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;777777777&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;777777777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;77777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77777777777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;77777&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;7777777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777777&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7777&nbsp;77&nbsp;777&nbsp;77&nbsp;777&nbsp;777&nbsp;&nbsp;7&nbsp;777&nbsp;7&nbsp;777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;777&nbsp;77&nbsp;777&nbsp;77&nbsp;7&nbsp;77&nbsp;77777&nbsp;7&nbsp;777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>")
}

function meme() {
    $("#meme").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`..-.``&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`:osyyyyyys+.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.-:://+++//:-.`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`:/+sso+/:`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;`/yyyyyyyyyyyyyo-``-+shdhyso++///+++oshhhy+-`&nbsp;&nbsp;`:oyyyyyyyyyys/.&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;`:syyyyyyyyyyyyyyyhhdh+:.`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`-+ydy+yyyyyyyyyyyyyyyy/`&nbsp;&nbsp;<br>\n" +
        ".oyyyyyyyyyyyyyyyhdy:`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`:sdhyyyyyyyyyyyyyyyo`&nbsp;<br>\n" +
        "+yyyyyyyyyyyyyyhdy.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`oddyyyyyyyyyyyyyy`&nbsp;<br>\n" +
        "syyyyyyyyyyyyyhm/`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.omhyyyyyyyyyyys`&nbsp;<br>\n" +
        "syyyyyyyyyyyydm:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/o:&nbsp;&nbsp;``&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:mdyyyyyyyyyy:&nbsp;&nbsp;<br>\n" +
        "-yyyyyyyyyyydm:&nbsp;&nbsp;.sy:hMMd-hNm.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`:.&nbsp;&nbsp;-mmhyyyyyys:`&nbsp;&nbsp;<br>\n" +
        "&nbsp;-syyyyyyyydm-&nbsp;&nbsp;&nbsp;.mMMMMMNNMm-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:NNo`dNmNhyyys/`&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;`/yyyyyymm-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+MMMMMMMN/-+syyhhhh/`&nbsp;&nbsp;&nbsp;&nbsp;.+o+:-``yMMomMoNNyo:`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;`:syydm-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/MMMMMMMNoNMMd+oydNms.&nbsp;&nbsp;&nbsp;-+osmMd/.mMNNMdMm`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.yN/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`hMMMMMMMMMMNs//::::os.&nbsp;&nbsp;`--...+NMmNMMMMMN-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-No&nbsp;&nbsp;&nbsp;&nbsp;`/hNMMMMMMMMMMMMMMMms+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`++hyooMMMMMMMMN`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.dh`&nbsp;`/hNMMMMMMMMMMMMMMNds/.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/mMMMMMMMMMMMM-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oN--sNMMMMMMMMMMMMMMNy:`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.+dNMMMMMMMMh-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`mmhMMMMMMMMMMMMMMMNy-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`+:`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`-`&nbsp;&nbsp;&nbsp;+NMMMMMMMMNo`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;&nbsp;&nbsp;-+yMMMMMMMMMMMMMMMMNd+-`&nbsp;`-/+o+-o++ooo/-``.y-&nbsp;&nbsp;.oNMMMMMMMMMm-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "&nbsp;.yMMMMMMMMMMMMMMMMMNmhyyyyo:/h:`&nbsp;&nbsp;`/sdmNNho/`./`.syhNMMMMMMMMMNo`&nbsp;&nbsp;&nbsp;&nbsp;<br>\n" +
        "-NMMMMMMMMMMMMMMMMMmhyyyyyyyy--+o+//:::-::.``&nbsp;`&nbsp;&nbsp;-yyyhNMMMMMMMMMMm:&nbsp;&nbsp;&nbsp;<br>\n" +
        "oMMMMMMMMMMMMMMMMNdhyyyyyyyy+`.``&nbsp;./.`-/--+yo/-&nbsp;&nbsp;&nbsp;./syhNMMMMMMMMMMNs`&nbsp;<br>\n" +
        "+MMMMMMMMMMMMMMMy:/osssss+/.`&nbsp;&nbsp;`&nbsp;&nbsp;&nbsp;.:-/:---:/-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``.:dMMMMMMMMMMMN`<br>\n" +
        "/MMMMMMMMMMMMMd:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`:++++`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`dMMMMMMMMMMM.<br>\n" +
        "/MMMMMMMMMMMNs`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-yMMMMMMMMMMMM.<br>\n" +
        ":MMMMMMMMMMMNo.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/hMMMMMMMMMMMMMM.<br>\n" +
        "-MMMMMMMMMMMMMNh+-`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;./yNMMMMMMMMMMMMMMMM.<br>\n" +
        "-NMMMMMMMMMMMMMMMMmho/-.`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`./oymMMMMMMMMMMMMMMMMMMMM.<br>\n" +
        ".NMMMMMMMMMMMMMMMMMMMMMNNmhys+/:--://+osydmNMMMMMMMMMMMMMMMMMMMMMMMMM.<br>\n" +
        "`mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM.<br>\n")
}