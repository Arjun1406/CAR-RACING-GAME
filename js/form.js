class Form{
    constructor(){
        this.input=createInput('Name');
        this.button=createButton('play');
        this.greeting=createElement('h2');
        this.reset=createButton('reset');
    }
    display(){
        var title=createElement('h1');
        title.html("car racing game");
        title.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth/2-20,displayHeight/2-200);
        this.input.style('width','200px');
        this.input.style('height','50px');
        this.input.style('fontSize','20px');
        this.input.style('color','orange');
        this.input.style('background-color','blue');
        
        this.button.position(displayWidth/2,displayHeight/2-100);
        this.button.style('width','100px');
        this.button.style('height','30px');
        this.button.style('fontSize','20px');
        this.button.style('background-color','yellow');
        this.button.style('border-radius','30px');
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("hello "+player.name);
            this.greeting.position(displayWidth/2-20,displayHeight/2-200);

        })
        this.reset.position(50,50);
        this.reset.style('fontSize','20px');
        this.reset.style('height','30px');
        this.reset.style('background-color','lightblue');
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            database.ref('/').update({
                players:null,
                finishedPlayers:0
            })
        })
    }
    hideDetails(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}