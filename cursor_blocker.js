function CursorBlocker() {
    this.container=null;
    this.active = false;
    this.pX = null;
    this.pY = null;
    this.init = function () {
        var self = this;
        var f = function (e) {
            self.move(e);
        };
        window.addEventListener('mousemove', f, false);
        this.container = cd('div');
        this.container.classList.add('cursor_blocker');
        this.container.classList.add('hdn');
        a(document.body, this.container);
    };
    this.enable = function () {
        if (!this.active) {
            this.container.style.left = this.pX - 100 + 'px';
            this.container.style.top = this.pY - 100 + 'px';
            this.container.classList.remove('hdn');
            this.active = true;
        }
    };
    this.disable = function () {
        if (this.active) {
            this.container.classList.add('hdn');
            this.active = false;
        }
    };
    this.toggle = function () {
        if (this.active) {
            this.disable();
        } else {
            this.enable();
        }
    };
    this.move = function (e) {
        this.pX = e.clientX;
        this.pY = e.clientY;
        if (this.active) {
            this.container.style.left = this.pX - 100 + 'px';
            this.container.style.top = this.pY - 100 + 'px';
        }
    };
}
var cursor_blocker = new CursorBlocker();
elem.push(cursor_blocker);

