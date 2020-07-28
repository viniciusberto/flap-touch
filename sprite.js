function Sprite(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.draw = function(context, image, xCanvas, yCanvas) {
        context.drawImage(
            image,
            this.x,
            this.y,
            this.width,
            this.height,
            xCanvas,
            yCanvas,
            this.width,
            this.height);
    }
}

var sprBackground = new Sprite(0, 0, 600, 600);
var sprPerson = new Sprite(618, 16, 87, 87);