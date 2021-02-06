class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player=new Player()
            player.getCount();
            form=new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car1.addImage("c1",c1);
        car2=createSprite(300,200);
        car2.addImage("c2",c2);
        car3=createSprite(500,200);
        car3.addImage("c3",c3);
        car4=createSprite(700,200);
        car4.addImage("c4",c4);
        cars=[car1,car2,car3,car4]
        finish=false
    }
    play(){
        form.hideDetails()
        
        Player.getPlayersInfo()
        player.getFinishedPlayers()
        if(allPlayers!==undefined){
            background(69,69,69);
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
           var index=0
           var x=250
           var y
            for(var a in allPlayers){
                index+=1
                x+=200
                y=displayHeight-allPlayers[a].distance;
                cars[index-1].position.x=x;
                cars[index-1].position.y=y;
                if(index===player.index){
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].position.y;
                    fill("red");
                    ellipse(x,y,60,60)
                }
                else{
                    
                    cars[index-1].shapeColor="purple"
                }
                textSize(20)
                textAlign(CENTER)
                text(allPlayers[a].name,x,y+65)
            }
        }
        if(keyDown(UP_ARROW)&&player.index!==null&&finish===false){
            player.distance+=50
            player.update()
        }
        if(player.distance>=5200&&finish===false){
            Player.updateFinishedPlayers()
            player.rank=finishedPlayers
            player.update()
            finish=true
        }
        drawSprites()
    }
    end(){
        var endGame=createElement('h2')
        endGame.html('game Over')
        endGame.position(displayWidth/2-50,displayHeight/2)
        camera.position.x=0
        camera.position.y=0
        imageMode(CENTER)
        image(gold,0,-300,300,300)
        image(silver,350,0,300,300)
        image(bronze,-350,0,300,300)
        Player.getPlayersInfo()
        textAlign(CENTER)
        textSize(25)
        fill("purple")
        for(var i in allPlayers){
            if(allPlayers[i].rank===1){
                text("1st: "+allPlayers[i].name,0,-130)
            }
            else if(allPlayers[i].rank===2){
                text("2nd: "+allPlayers[i].name,-300,220)
            }
            else if(allPlayers[i].rank===3){
                text("3rd: "+allPlayers[i].name,300,220)
            }
            else{
                text("honourable mention: "+allPlayers[i].name,0,350)
            }
        }
    }
}