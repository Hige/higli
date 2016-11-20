var $ = require("jquery");
var snowEffect = require('./modules/snowEffect');
var parallax = require('./modules/parallax');
var linkedFalse = require('./modules/linkedFalse');
var animated = require('./modules/animated');
var topBanners = require('./modules/topBanners');



var topBar = setInterval(function(){
    topBanners(".landing-content", [
        "../img/srennab/h1.png",
        "../img/srennab/h2.png",
        "../img/srennab/h3.png",
    ]);
}, 20000);
linkedFalse();
// snowEffect('#snow-canvas');
parallax(".landing-content img");


animated(".top-bar.small li.page-delivery a", "wobble");
animated(".top-bar.small li.page-payment a", "tada");
animated(".top-bar.small li:not(.page-delivery, .page-payment) a", ["jello"]);

animated(".top-bar.bigger li.page-pre-order a, .top-bar.bigger li.page-rent a, .top-bar.bigger li.page-cart a", ["tada"]);
animated(".top-bar.bigger li.page-search a", ["swing"]);



animated(".top-bar.bigger li:not(.page-index, .page-rent, .page-pre-order, .page-search, .page-cart) a:not(#phone)", ["jello", "rubberBand", "wobble"]);

// for logo
animated(".top-bar.bigger li.page-index a", ["jello", "rubberBand", "wobble", "tada"]);

// for phone
animated(".top-bar.bigger li a#phone", ["jello", "rubberBand", "tada", "swing"], false);

var phone = setInterval(function() {
    var el = $(".top-bar.bigger li a#phone");
    if(!el.data("mouseenter")) {
        el.trigger("mouseenter").data("mouseenter", false);
        setTimeout(function () {
            if (!el.data("mouseenter")) {
                el.trigger("mouseleave");
            }
        }, 2000);
    }
}, 5000);


