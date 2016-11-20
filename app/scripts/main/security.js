module.exports = function() {
    require("./security/antiClickJacking")("/^(translate\.googleusercontent\.com)$/");
}
