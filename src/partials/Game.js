import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import { SVG_NS, KEYS } from '../settings';

export default class Game { //Game class
    constructor(element, width, height) {
            // Other code goes here...
            this.element = element;
            this.width = width;
            this.height = height;
            this.gameElement = document.getElementById(this.element);
            this.board = new Board(this.width, this.height);
            //first ball
            this.ball = new Ball(8, this.width, this.height);
            //adding second ball to the stage
            this.ball1 = new Ball(5, this.width, this.height);
            this.paddleWidth = 8;
            this.paddleHeight = 56;
            this.boardGap = 10;
            this.pause = false;
            this.player1 = new Paddle(
                this.height,
                this.paddleWidth,
                this.paddleHeight,
                this.boardGap,
                ((this.height - this.paddleHeight) / 2),
                KEYS.a,
                KEYS.z,
                'player1'
            );
            this.player2 = new Paddle(
                this.height,
                this.paddleWidth,
                this.paddleHeight,
                (this.width - this.boardGap - this.paddleWidth),
                ((this.height - this.paddleHeight) / 2),
                KEYS.up,
                KEYS.down,
                'player2'
            );
            //score positioning
            this.score1 = new Score(this.width / 2 - 50, 30, 30);
            this.score2 = new Score(this.width / 2 + 25, 30, 30);

            document.addEventListener('keydown', event => { // pause game
                if (event.key === KEYS.spaceBar) {
                    this.pause = !this.pause;
                }
            });
        } //end of constructor
    render() {
        //================================================
        if (this.pause) {
            return;
        }
        this.gameElement.innerHTML = '';
        let svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttributeNS(null, 'width', this.width);
        svg.setAttributeNS(null, 'height', this.height);
        svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
        this.gameElement.appendChild(svg);
        this.board.render(svg);
        this.player1.render(svg);
        this.player2.render(svg);
        this.ball.render(svg, this.player1, this.player2);
        //adding second ball to the stage
        this.ball1.render(svg, this.player1, this.player2);
        this.score1.render(svg, this.player1.score);
        this.score2.render(svg, this.player2.score);
    }
}