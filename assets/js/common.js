    var sDomainSearch = "http://genk.vn/tim-kiem/";

	var b = false;
    $("#searchinput").click(function(c) {
        c.stopPropagation()
    });
    $("#btnSearch").click(function(c) {
        c.stopPropagation();
        if ($("#searchinput").text() != "" && $(".textsearch").hasClass("show-search")) {
            searchPress()
        } else {
            if (b == false) {
                $("#btnSearch").addClass("active");
                $(".textsearch").toggleClass("show-search", 100);
                $("#searchinput").focus();
                b = true
            } else {
                $("#btnSearch").removeClass("active");
                $(".textsearch").removeClass("show-search");
                b = false
            }
        }
    });
    $("body").click(function() {
        if ($(".textsearch").hasClass("show-search")) {
            $(".textsearch").removeClass("show-search");
            b = false;
            return
        }
    });
	
	function require_txt(c, b) {
    if (document.getElementById(c).textContent == "") {
        alert(b);
        document.getElementById(c).focus();
        return false
    }
    return true
}

	function searchPress() {
    if (!require_txt("searchinput", "Báº¡n chÆ°a nháº­p tá»« khÃ³a")) {
        return false
    }
    key = removeHTMLTags("searchinput");
    key = LocDauUnicode(key);
    window.location = sDomainSearch + encodeURIComponent(key) + ".chn";
    return false
}
function LocDauUnicode(b) {
    b = b.toLowerCase();
    b = b.replace(/Ã |Ã¡|áº¡|áº£|Ã£|Ã¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g, "a");
    b = b.replace(/Ã¨|Ã©|áº¹|áº»|áº½|Ãª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e");
    b = b.replace(/Ã¬|Ã­|á»‹|á»‰|Ä©/g, "i");
    b = b.replace(/Ã²|Ã³|á»|á»|Ãµ|Ã´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g, "o");
    b = b.replace(/Ã¹|Ãº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u");
    b = b.replace(/á»³|Ã½|á»µ|á»·|á»¹/g, "y");
    b = b.replace(/Ä‘/g, "d");
    b = b.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g, "-");
    b = b.replace(/-+-/g, "-");
    b = b.replace(/^\-+|\-+$/g, "");
    return b
}
function removeHTMLTags(c) {
    var b = document.getElementById(c).textContent;
    b = b.replace(/&(lt|gt);/g, function(f, e) {
        return (e == "lt") ? "<" : ">"
    });
    var d = b.replace(/<\/?[^>]+(>|$)/g, "");
    while (d.indexOf('"') != -1) {
        d = d.replace('"', "")
    }
    while (d.indexOf("'") != -1) {
        d = d.replace("'", "")
    }
    document.getElementById(c).value = d;
    return d
}

function BBEnterPress1(c) {
    var b;
    if (c && c.which) {
        c = c;
        b = c.which
    } else {
        c = window.event;
        b = c.keyCode
    }
    if (b == 13) {
        ValidateSearch();
        return false
    }
    return true
}

function ValidateSearch() {
    if (!require_txt("searchinput", "Báº¡n chÆ°a nháº­p tá»« khÃ³a")) {
        return false
    }
    key = removeHTMLTags("searchinput");
    key = LocDauUnicode(key);
    window.location = sDomainSearch + encodeURIComponent(key) + ".chn";
    return false
}
    