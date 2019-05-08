/*
ContentEasy V1.0.0
https://github.com/AdlerED/ContentEasyJS
 */

var contents = new Array();
var windowClass = "";
var autoHide = "";

function contentEasy(options) {
    var opt = {
        "range": "",
        "contentClass": ".contentEasy-class",
        "windowClass": ".contentEasy-window",
        "autoHide": "false"
    };
    var option = $.extend({}, opt, options);
    windowClass = option.windowClass;
    autoHide = option.autoHide;
    if (autoHide == "true") {
        $(windowClass).css("display", "none");
    }
    analyze(option.range);
    setTimeout(function () {
        $.each(contents, function (n, value) {
            $(".contentEasy-class").append("<li class='contentEasy-class-h" + value.level + "'>" +
                "<a href=\"javascript:void(0);\" onclick=\"jumpTo(" + value.offset + ");\">" +
                value.tag +
                "</a>" +
                "</li>");
        });
    }, 0);
}

function analyze(range) {
    console.log(range);
    var tag = "";
    var level = 1;
    var off = 0;
    $(range + " *").each(function (i) {
        function set(text, tagLevel, offset) {
            tag = text;
            level = tagLevel;
            off = offset;
            //Stack is fun
            contents.push({
                "tag": tag,
                "level": level,
                "offset": off
            });
        }

        switch ($(this).prop("localName")) {
            case "h1":
                set($(this).text(), 1, $(this).offset().top);
                break;
            case "h2":
                set($(this).text(), 2, $(this).offset().top);
                break;
            case "h3":
                set($(this).text(), 3, $(this).offset().top);
                break;
            case "h4":
                set($(this).text(), 4, $(this).offset().top);
                break;
            case "h5":
                set($(this).text(), 5, $(this).offset().top);
                break;
            case "h6":
                set($(this).text(), 6, $(this).offset().top);
                break;
        }
    });
}

function jumpTo(top) {
    $(window).scrollTop(top);
}

function check() {
    if ($(window).scrollTop() <= 70) {
        $(windowClass).css("display", "none");
    } else {
        $(windowClass).css("display", "");
    }
}

var scrollFunc = function (e) {
    if (autoHide == "true") {
        check();
    }
};

//Listener for Firefox
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}

//Listener for IE, Chrome
window.onmousewheel = document.onmousewheel = scrollFunc;