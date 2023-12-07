var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
        this.pi++;
        Circle.pi++;
    }
    Circle.calculate = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
var circle = new Circle();
console.log(circle);
console.log(Circle.calculate(10));
