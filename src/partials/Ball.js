import { SVG_NS } from '../settings';
export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;

        this.reset(); //calling the reset
    }


    //==========================================
    reset() { //reset ball
            this.x = this.boardWidth / 2;
            this.y = this.boardHeight / 2;

            //preventing from being zero
            this.vy = 0;
            while (this.vy === 0) {
                this.vy = Math.floor(Math.random() * 10 - 5);
            }

            this.vx = this.direction * (6 - Math.abs(this.vy));
        } //end of reset method


    wallCollision() { //collision detection method
            const hitLeft = this.x - this.radius <= 0;
            const hitRight = this.x + this.radius >= this.boardWidth;
            const hitTop = this.y - this.radius <= 0;
            const hitBottom = this.y + this.radius >= this.boardHeight;

            if (hitLeft || hitRight) {
                this.vx = -this.vx;
            } else if (hitTop || hitBottom) {
                this.vy = -this.vy;
            }

        }
        //==========================================
    paddleCollision(player1, player2) { //detecting paddle collision
        //if moving towatd the right end
        if (this.vx > 0) {
            //detect player2 paddle collision
            let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            //if the right edge of the ball is greater or equall to left edge of the paddle
            if ((this.x + this.radius >= leftX) &&
                (this.x + this.radius <= rightX) &&
                (this.y >= topY && this.y <= bottomY)) {

                this.vx = -this.vx;
            }

        } else {
            //...
        }
    }

    //==========================================
    render(svg, player1, player2) {
        this.x += this.vx;
        this.y += this.vy;
        this.wallCollision();

        this.paddleCollision(player1, player2);

        //Ball element=============================

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x); //x of the center point
        circle.setAttributeNS(null, 'cy', this.y); // y of the center point
        circle.setAttributeNS(null, 'fill', 'white'); //x of the top left corner

        svg.appendChild(circle);

    }

}