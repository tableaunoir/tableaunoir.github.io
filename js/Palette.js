/**
 * the circular palette
 */
var Palette = /** @class */ (function () {
    function Palette() {
        /** colors that can have a chalk. The first color *must* be white */
        this.colors = ["white", "yellow", "orange", "rgb(100, 172, 255)", "Crimson", "Plum", "LimeGreen"];
        this.buttons = [];
        this.currentColorID = 0;
        this.onchange = function () { };
    }
    /**
     * @descrition create (the DOM elements of) the palette
     */
    Palette.prototype._createPalette = function () {
        var div = document.getElementById("palette");
        for (var i in this.colors) {
            this.buttons[i] = this._createColorButton(i);
            div.appendChild(this.buttons[i]);
        }
    };
    /**
     * @description switch the first color (white <=> black)
     */
    Palette.prototype.switchBlackAndWhite = function () {
        this.colors[0] = (this.colors[0] == "white") ? "black" : "white";
        this.onchange();
    };
    /**
     *
     * @param {*} i  an index between 0 and this.colors.length - 1
     * @description create the button for the color of index i
     */
    Palette.prototype._createColorButton = function (i) {
        var _this = this;
        var img = new Image();
        img.src = ChalkCursor.getCursorURL(this.colors[i]);
        img.classList.add("paletteColorButton");
        var angle = -Math.PI / 2 + 2 * Math.PI * i / this.colors.length;
        img.style.top = (Palette.radius * Math.sin(angle) - 22) + "px";
        img.style.left = (Palette.radius * Math.cos(angle) - 16) + "px";
        img.style.borderColor = this.colors[i];
        img.onmousedown = function (evt) { evt.preventDefault(); }; //to prevent the drag and drop of the image of the chalk
        img.onclick = function () {
            _this.buttons[_this.currentColorID].classList.remove("selected");
            _this.currentColorID = i;
            _this.buttons[_this.currentColorID].classList.add("selected");
            _this.hide();
            _this.onchange();
        };
        return img;
    };
    /**
     * @description select the next color
     */
    Palette.prototype.next = function () {
        this.buttons[this.currentColorID].classList.remove("selected");
        this.currentColorID++;
        this.currentColorID = this.currentColorID % this.colors.length;
        this.buttons[this.currentColorID].classList.add("selected");
        this.onchange();
    };
    /**
     * @description select the previous color
     */
    Palette.prototype.previous = function () {
        this.buttons[this.currentColorID].classList.remove("selected");
        this.currentColorID--;
        if (this.currentColorID < 0)
            this.currentColorID = this.colors.length - 1;
        this.buttons[this.currentColorID].classList.add("selected");
        this.onchange();
    };
    /**
     * @param position a point {x: ..., y: ...}
     * @description show the palette at position position
     */
    Palette.prototype.show = function (position) {
        var div = document.getElementById("palette");
        div.innerHTML = "";
        this._createPalette();
        position.y = Math.max(position.y, Palette.radius + 16 + 48);
        position.x = Math.max(position.x, Palette.radius + 16 + 48);
        div.style.left = position.x + "px";
        div.style.top = position.y + "px";
        div.classList.remove("PaletteHide");
        div.classList.add("PaletteShow");
    };
    /**
     * @description hide the palette
     */
    Palette.prototype.hide = function () {
        var div = document.getElementById("palette");
        div.classList.remove("PaletteShow");
        div.classList.add("PaletteHide");
    };
    /**
     * @returns true iff the palette is shown
     */
    Palette.prototype.isShown = function () {
        return document.getElementById("palette").classList.contains("PaletteShow");
    };
    /**
     * @returns the selected color
     */
    Palette.prototype.getCurrentColor = function () {
        return this.colors[this.currentColorID];
    };
    Palette.radius = 96;
    return Palette;
}());
//# sourceMappingURL=Palette.js.map