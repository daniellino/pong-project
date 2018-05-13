import { SVG_NS } from '../settings';
export default class Board {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    render(svg) {
        //...
        //creating Borad and elements
        //main board========================================
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', '#353535');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        //center dashed line================================
        let line = document.createElementNS(SVG_NS, 'line');
        line.setAttributeNS(null, 'x1', (this.width / 2));
        line.setAttributeNS(null, 'y1', -4);
        line.setAttributeNS(null, 'x2', (this.width / 2));
        line.setAttributeNS(null, 'y2', this.height);
        line.setAttributeNS(null, 'stroke', 'white');
        line.setAttributeNS(null, 'stroke-dasharray', '20,15');
        line.setAttributeNS(null, 'stroke-width', '4');
        //center dashed middle circle================================
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'cx', (this.width / 2));
        circle.setAttributeNS(null, 'cy', (this.height / 2));
        circle.setAttributeNS(null, 'r', 40);
        circle.setAttributeNS(null, 'stroke', 'white');
        circle.setAttributeNS(null, 'stroke-dasharray', '20,15');
        circle.setAttributeNS(null, 'stroke-width', '4');
        circle.setAttributeNS(null, 'fill', '#353535');
        //center dashed circumference for board================================
        let rect2 = document.createElementNS(SVG_NS, 'rect');
        line.setAttributeNS(null, 'stroke-dasharray', '20,15');
        rect2.setAttributeNS(null, 'stroke', '#FFF800');
        rect2.setAttributeNS(null, 'width', this.width - 6);
        rect2.setAttributeNS(null, 'height', this.height - 6);
        rect2.setAttributeNS(null, 'x', 3);
        rect2.setAttributeNS(null, 'y', 3);
        rect2.setAttributeNS(null, 'stroke-width', '2');
        rect2.setAttributeNS(null, 'stroke-dasharray', '10,10');
        rect2.setAttributeNS(null, 'fill', 'none');


        svg.appendChild(rect);
        svg.appendChild(line);
        svg.appendChild(circle);
        svg.appendChild(rect2);
    }
}