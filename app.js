import testData from "./testdata.json" with { type: "json" };
import Batsman from "./Models/batsman.js";
import Bowler from "./Models/bowler.js";
import AllRounder from "./Models/allrounder.js";
import Team from "./Models/team.js";
import AuctionUtils from "./Utils/auctionutils.js";

const team1 = new Team(testData.teams[0].id, testData.teams[0].name);
const team2 = new Team(testData.teams[1].id, testData.teams[1].name);

const acceptedPlayers = [];
const acceptedTeams = [team1, team2];
const auctionResults = [];

for (let i = 0; i < testData.players.length; i++) {
    const playerData = testData.players[i];

    let player;

    if (playerData.role === "Batsman") {
        player = new Batsman(
            playerData.id,
            playerData.name,
            playerData.age,
            playerData.role,
            playerData.basePrice,
            playerData.soldPrice,
            playerData.isSold,
            playerData.totalRuns
        );
    } else if (playerData.role === "Bowler") {
        player = new Bowler(
            playerData.id,
            playerData.name,
            playerData.age,
            playerData.role,
            playerData.basePrice,
            playerData.soldPrice,
            playerData.isSold,
            playerData.totalWickets
        );
    } else if (playerData.role === "AllRounder") {
        player = new AllRounder(
            playerData.id,
            playerData.name,
            playerData.age,
            playerData.role,
            playerData.basePrice,
            playerData.soldPrice,
            playerData.isSold,
            playerData.totalRuns,
            playerData.totalWickets
        );
    }


    const preparedPlayer = AuctionUtils.preparePlayer(player);

    if (preparedPlayer === null) {
        continue;
    }

    acceptedPlayers.push(preparedPlayer);

    let selectedTeam;

    if (i < 5) {
        selectedTeam = team1;
    } 
    else {
        selectedTeam = team2;
    }
    selectedTeam.addPlayer(preparedPlayer);

    auctionResults.push({
        id: preparedPlayer.id,
        name: preparedPlayer.name,
        role: preparedPlayer.role,
        teamSold: selectedTeam.name
    });
}

console.log("========== FINAL AUCTION RESULT ==========");
for (let i = 0; i < auctionResults.length; i++) {
    console.log("ID:", auctionResults[i].id);
    console.log("Name:", auctionResults[i].name);
    console.log("Role:", auctionResults[i].role);
    console.log("Team Sold:", auctionResults[i].teamSold);

}


// console.log("========== ACCEPTED PLAYERS ==========");

// for (let i = 0; i < acceptedPlayers.length; i++) {
//     console.log("ID:", acceptedPlayers[i].id);
//     console.log("Name:", acceptedPlayers[i].name);
//     console.log("Age:", acceptedPlayers[i].age);
//     console.log("Role:", acceptedPlayers[i].role);
//     console.log("Base Price:", acceptedPlayers[i].basePrice);
//     console.log("Sold Price:", acceptedPlayers[i].soldPrice);

//     if (acceptedPlayers[i].role === "Batsman") {
//         console.log("Total Runs:", acceptedPlayers[i].totalRuns);
//     }

//     if (acceptedPlayers[i].role === "Bowler") {
//         console.log("Total Wickets:", acceptedPlayers[i].totalWickets);
//     }

//     if (acceptedPlayers[i].role === "AllRounder") {
//         console.log("Total Runs:", acceptedPlayers[i].totalRuns);
//         console.log("Total Wickets:", acceptedPlayers[i].totalWickets);
//     }


// }
// console.log("========== ACCEPTED TEAMS ==========");

// for (let i = 0; i < acceptedTeams.length; i++) {
//     console.log("Team ID:", acceptedTeams[i].id);
//     console.log("Team Name:", acceptedTeams[i].name);

// }