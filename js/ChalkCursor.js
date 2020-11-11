var ChalkCursor = /** @class */ (function () {
    function ChalkCursor() {
    }
    /**
     * @description adds clicks on buttons in the menu for left- and right-handed options
     */
    ChalkCursor.init = function () {
        var change = function (param) {
            ChalkCursor.leftHanded = param;
            if (!param)
                localStorage.removeItem("leftHanded");
            else
                localStorage.setItem("leftHanded", "true");
            UserManager.me.updateCursor();
            Menu.hide();
        };
        document.getElementById("buttonLefthanded").onclick = function () { change(true); };
        document.getElementById("buttonRighthanded").onclick = function () { change(false); };
    };
    /**
     *
     * @param {*} color
     * @returns the .style.cursor of the canvas if you want to have a cursor that looks like a chalk with the color color.
     * The cursor is an objet {data: dataofimage, x: position where to click, y: position where to click}
     */
    ChalkCursor.getStyleCursor = function (color) {
        return { data: ChalkCursor.getCursorURL(color), x: ChalkCursor.leftHanded ? 32 : 0, y: 0 };
    };
    /**
     *
     * @param {*} color
     * @returns the image information of the chalk of a specific color
     */
    ChalkCursor.getCursorURL = function (color) {
        var sizeX = 32;
        var sizeY = 44;
        var angleOpening = 0.3;
        var sizeHead = 16;
        var length = 34;
        var canvas = document.createElement('canvas');
        canvas.width = sizeX;
        canvas.height = sizeY;
        var context = canvas.getContext("2d");
        if (ChalkCursor.leftHanded) //transformation of the chalk picture for left-handed
            context.transform(-1, 0, 0, 1, sizeX, 0);
        var angle = Math.atan2(sizeY, sizeX);
        var anglePlus = angle + angleOpening;
        var angleMinus = angle - angleOpening;
        var p1 = { x: sizeHead * Math.cos(anglePlus), y: sizeHead * Math.sin(anglePlus) };
        var p2 = { x: sizeHead * Math.cos(angleMinus), y: sizeHead * Math.sin(angleMinus) };
        var ll = { x: length * Math.cos(angle), y: length * Math.sin(angle) };
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(p1.x, p1.y);
        context.lineTo(p1.x + ll.x, p1.y + ll.y);
        context.lineTo(p2.x + ll.x, p2.y + ll.y);
        context.lineTo(p2.x, p2.y);
        context.lineTo(0, 0);
        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.stroke();
        context.fillStyle = color;
        context.fill();
        context.beginPath();
        context.moveTo(sizeHead * Math.cos(anglePlus), sizeHead * Math.sin(anglePlus));
        context.lineTo(sizeHead * Math.cos(angleMinus), sizeHead * Math.sin(angleMinus));
        context.stroke();
        return canvas.toDataURL();
    };
    /** undefined for right-handed, "true" for left-handed */
    ChalkCursor.leftHanded = localStorage.getItem("leftHanded");
    return ChalkCursor;
}());
//# sourceMappingURL=ChalkCursor.js.map