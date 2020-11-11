/**
 * data structure stack for cancel/redo
 */
var CancelStack = /** @class */ (function () {
    function CancelStack() {
        this.stack = [];
        this.currentIndex = -1;
        this.n = 0;
    }
    /**
     * empty the stack
     */
    CancelStack.prototype.clear = function () {
        this.stack = [];
        this.currentIndex = -1;
        this.n = 0;
    };
    /**
     *
     * @param {*} data
     */
    CancelStack.prototype.push = function (data) {
        this.currentIndex++;
        this.stack[this.currentIndex] = data;
        this.n = this.currentIndex + 1;
    };
    CancelStack.prototype.back = function () {
        if (this.currentIndex <= 0)
            return this.stack[this.currentIndex];
        this.currentIndex--;
        return this.stack[this.currentIndex];
    };
    CancelStack.prototype.forward = function () {
        if (this.currentIndex >= this.n - 1)
            return this.stack[this.currentIndex];
        this.currentIndex++;
        return this.stack[this.currentIndex];
    };
    return CancelStack;
}());
//# sourceMappingURL=cancelStack.js.map