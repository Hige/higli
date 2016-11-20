var $ = require('jquery');
module.exports = function(selector) {
    //return $(selector).hide();

    if ($(selector).length) {
        var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;
        initHeader();
        addListeners();
    }

    function initHeader() {
        width = $(selector).width();
        height = $(selector).height();
        target = {
            x: 0,
            y: height
        };
        canvas = $(selector).get(0);
        canvas.width = width;
        canvas.height = height;

        ctx = canvas.getContext('2d');
        // create particles
        circles = [];
        for (var x = 0; x < width * 0.59; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        $(window).on("scroll", scrollCheck);
        $(window).on("resize", resize);
    }

    function scrollCheck() {
        if(!this.list)
            this.list = {};

        if(!this.list[selector]) {
            this.list[selector] = {
                "parent": $(selector).parent()
            }
        }

        var positionTop = this.list[selector].parent.position().top + this.list[selector].parent.outerHeight();


        if (document.body.scrollTop <= positionTop) {
            animateHeader = true;
        }
        else {
            animateHeader = false;
        }
    }

    function resize() {
        width = $(selector).width();
        height = $(selector).height();
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (var i in circles) {
                circles[i].draw();
            }
        }

        setTimeout(function(){
            requestAnimationFrame(animate);
        }.bind(this), 40);
    }

    function Circle() {
        var _this = this;
        (function() {
            _this.pos = {};
            init();
        })();

        function init() {
            //_this.pos.x = Math.random() * width;
            _this.pos.x = width * Math.random();
            _this.pos.y = height + Math.random() * 300;
            _this.alpha = 0.1 + Math.random() * 0.6;
            _this.scale = 0.1 + Math.random() * 0.3 * 10;
            _this.velocity = Math.random() * 3;
            _this.parity = (Math.floor(Math.random() * (9 - 0 + 1)) + 0)&1;
        }
        this.draw = function() {
            if (_this.alpha <= 0) {
                init();
            }
            if(_this.parity) {
                _this.pos.x += Math.random();
            } else {
                _this.pos.x -= Math.random();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
            ctx.fill();
        };
    }
};