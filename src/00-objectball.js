const game = gameObject();
const players = playersObject()
const teams = Object.values(game)

function gameObject() {
  const obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assits: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assits: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assits: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assits: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assits: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assits: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assits: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assits: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assits: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assits: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return obj;
}

function numPointsScored(playerName) {
  // for (let gameKey in game) {
  //   let teamObj = game[gameKey];
  //   for (let teamKey in teamObj) {
  //     if (teamKey == "players") {
  //       let players = teamObj[teamKey];
  //       for (let player in players) {
  //         // debugger
  //         if (player == playerName) {
  //           return players[player].points;
  //         }
  //       }
  //     }
  //   }
  // }
  return players[playerName].points
}

function homeTeam(){
  return game.home
}

function awayTeam() {
  return game.away
}

function playersObject() {
  // return Object.assign({}, homeTeam().players, awayTeam().players)
  return {...homeTeam().players, ...awayTeam().players}
}

function teamColors(teamName){
  return findByTeamName(teamName).colors
}

function findByTeamName(teamName){
  return teams.find(team => team.teamName === teamName)
}

function teamNames() {
  return teams.map(team => team.teamName)
}
 
function shoeSizes() {
  let stats = Object.values(players)
  return stats.map(stat => stat.shoe)
}
 
function bigFeetPlayers() {
  const playerArr = Object.entries(players)
  debugger
  return playerArr.filter(player => player[1].shoe > 15).map(pArr => pArr[0])
}
