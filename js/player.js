class Player{
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
        this.rank=0
    }
    getCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="players/player"+player.index
        database.ref(playerIndex).update({
            name:this.name,
            distance:this.distance,
            rank:this.rank
        })
    }
    getFinishedPlayers(){
        database.ref('finishedPlayers').on("value",function(data){
            finishedPlayers=data.val()
        })
    }
    static updateFinishedPlayers(){
        database.ref('/').update({
            finishedPlayers:finishedPlayers+1
        })
        this.rank+=1
    }
    static getPlayersInfo(){
        database.ref('players').on("value",function(data){
            allPlayers=data.val()
        })
    }
}