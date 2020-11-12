var Drawing = /** @class */ (function () {
    function Drawing() {
    }
    /**
     *
     * @param points
     * @description clear (erase) the inside of the polygon
     */
    Drawing.clearPolygon = function (points) {
        var context = getCanvas().getContext("2d");
        context.save();
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var point = points_1[_i];
            context.lineTo(point.x, point.y);
        }
        context.clip();
        context.clearRect(0, 0, Layout.getWindowWidth(), Layout.getWindowHeight());
        context.restore();
        context.globalCompositeOperation = "source-over";
    };
    /**
     *
     * @param points
     * @description erase the contour of the polygon
     */
    Drawing.removeContour = function (points) {
        var canvas = getCanvas();
        var context = canvas.getContext("2d");
        context.globalCompositeOperation = "destination-out";
        context.strokeStyle = "rgba(255, 255, 255, 1)";
        context.lineWidth = 6;
        context.globalAlpha = 1.0;
        context.moveTo(points[0].x, points[0].y);
        for (var _i = 0, points_2 = points; _i < points_2.length; _i++) {
            var point = points_2[_i];
            context.lineTo(point.x, point.y);
        }
        context.stroke();
    };
    Drawing.drawLine = function (context, x1, y1, x2, y2, pressure, color) {
        if (pressure === void 0) { pressure = 1.0; }
        if (color === void 0) { color = UserManager.me.getCurrentColor(); }
        //console.log(pressure)
        context.beginPath();
        context.strokeStyle = color;
        context.globalCompositeOperation = "source-over";
        context.globalAlpha = 0.9 + 0.1 * pressure;
        context.lineWidth = 1.5 + 3 * pressure;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        /*context.moveTo(Math.round(x1), Math.round(y1));
        context.lineTo(Math.round(x2), Math.round(y2));*/
        context.stroke();
        context.closePath();
    };
    Drawing.drawDot = function (x, y, color) {
        var context = getCanvas().getContext("2d");
        context.beginPath();
        context.fillStyle = color;
        context.lineWidth = 2.5;
        context.arc(x, y, 2, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    };
    Drawing.clearLine = function (x1, y1, x2, y2, lineWidth) {
        if (lineWidth === void 0) { lineWidth = 10; }
        var context = getCanvas().getContext("2d");
        context.beginPath();
        //context.strokeStyle = BACKGROUND_COLOR;
        context.globalCompositeOperation = "destination-out";
        context.strokeStyle = "rgba(255,255,255,1)";
        context.lineWidth = lineWidth;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineCap = "round";
        context.stroke();
        context.closePath();
    };
    Drawing.divideScreen = function () {
        console.log("divide the screen");
        var x = Layout.getXMiddle();
        Drawing.drawLine(getCanvas().getContext("2d"), x, 0, x, Layout.getWindowHeight(), 1, BoardManager.getDefaultChalkColor());
        BoardManager.saveCurrentScreen();
    };
    return Drawing;
}());
//# sourceMappingURL=Drawing.js.map