module.exports = function(text) {

    if ( (typeof(window.opera) != "undefined" && window.opera.version() < 12.10) || (window.attachEvent && !window.addEventListener) /* IE < 9 */ ) {
        var el = document.getElementById('old-browser-warn');
        el.innerHTML = text;
        el.style.display = 'block';
    }

}