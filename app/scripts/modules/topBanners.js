var $ = require("jquery");
var randomArr = require("./randomArr");

module.exports = function(selector, files) {

    if(!(files = files||false))
        return false;

    if(typeof files == "string"){
        files = [files];
    };

    console.log(randomArr(files));

    var img = new Image();
    $(img).on("load", function(){
        var tmp = $(selector).find("img").addClass("animated bounceOutLeft");

        $(img).addClass("animated bounceInRight");
        $(selector).append(img);

        setTimeout(function(){
            tmp.remove();
        }.bind(this), 2000);
    }).attr({
        src: randomArr(files)
    });

    //.error(function(){
    //    //do something if image cannot load
    //});
}