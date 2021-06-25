class Continue{
    constructor(){
        this.button = createButton('Continue');
    }
    hide(){
        this.button.hide();
    }
    display(){
        this.button.position(1100,height-80);
        this.button.style("background","transparent");
        this.button.style("width","200px");
        this.button.style("height","50px");
        this.button.style("font-size","35px");
        this.button.style("color","white");

        this.button.mousePressed(function () {
            gameState = PLAY;
        })
    }
}