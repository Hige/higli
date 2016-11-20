var $ = require("jquery");
module.exports = function(regexp) {
    var regexp = regexp||/^(translate\.googleusercontent\.com)$/;
    if (top != self && !self.location.hostname.match(regexp) ) {
        $(function() {
            $("body").html("<center><h1><br><br>Похоже вас пытаются обмануть<br>frame's hostname: " + self.location.hostname + "</h1></center>  ");
        });
    }
}