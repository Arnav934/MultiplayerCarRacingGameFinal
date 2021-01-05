class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
    this.finishedCars = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank: this.rank
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getFinishedCars(){
    var getFinishedCarsRef = database.ref('finishedCars');
    getFinishedCarsRef.on("value",(data)=>{
    this.finishedCars   = data.val();
    })
    }

   static updateFinishedCars(rankObj){
      database.ref('/').update({
      finishedCars: rankObj
      });
    }

    getPlayerRank(){
      var playerRankIndex = "players/player" + this.index;
      database.ref(playerRankIndex).on("value",(data)=>{
      this.rank = data.val().rank;
      console.log(this.rank)
    })
    }

    updatePlayerRank(rankOb){
      var playerRankIndex = "players/player" + this.index;
      database.ref(playerRankIndex).update({
      rank: rankOb  
      })
    }
}
