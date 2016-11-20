//= app.js
(function(){
    require('./main/security')();
    require('./main/old-browser')('Вы используете устаревший браузер. Сайт может отображаться некорректно.');
})();