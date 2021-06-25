class Form {
    constructor(){
        this.heading = createElement('h2');
        this.button = createButton("Play");
    }
    hide(){
            this.button.hide();
            this.heading.hide();
    }
    display(){
        this.heading.html("Space Battle");
        this.heading.style("color","white");
        this.heading.style("font-size","75px")
        this.heading.position(displayWidth/2 - 250, 0);

        this.button.position(displayWidth/2-150,displayHeight/4);
        this.button.style("background","transparent");
        this.button.style("width","200px");
        this.button.style("height","50px");
        this.button.style("font-size","35px");
        this.button.style("color","white");

        this.button.mousePressed(() => {
            gameState = INS;
        });
    }
}