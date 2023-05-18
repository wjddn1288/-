class Cell extends GameObject {
    constructor(container, x, y, width, height, velX, vleY) {
        super(container, x, y, width, height, velX, vleY);

        this.div.style.border="1px solid gray";
        this.div.style.boxSizing="border-box";
    }    
}