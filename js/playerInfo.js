let home_button = document.getElementById("home-button");
let show_overall_stats = document.getElementById("show-overall-stats");
let show_individual_stats = document.getElementById("show-individual-stats");

let user_name_span = document.getElementById("user-name");
let location_span = document.getElementById("location");

var barGraphValues = [];
var xValues = [];
var yValues = [];

let first_place = document.getElementById("first-place");
let second_place = document.getElementById("second-place");
let third_place = document.getElementById("third-place");
let mvp = document.getElementById("mvp");
let ckla = document.getElementById("ckla");
let mlaa = document.getElementById("mlaa");
let cklr = document.getElementById("cklr");
let mlra = document.getElementById("mlra");
let jw = document.getElementById("jw");
let fw = document.getElementById("fw");
let mw = document.getElementById("mw");
let cwag = document.getElementById("cwag");
let mgp = document.getElementById("mgp");
let hwr = document.getElementById("hwr");

let tgp = document.getElementById("tgp");
let tgw = document.getElementById("tgw");
let owr = document.getElementById("owr");
let vpg = document.getElementById("vpg");
let lra = document.getElementById("lra");
let lrl = document.getElementById("lrl");
let laa = document.getElementById("laa");
let lal = document.getElementById("lal");

let amount_all_span = document.getElementById("amount_all");
let month_all_span = document.getElementById("month_all");
let percentage_all_span = document.getElementById("percentage_all"); 

let amount_jan_span = document.getElementById("amount_jan");
let month_jan_span = document.getElementById("month_jan");
let percentage_jan_span = document.getElementById("percentage_jan");

let amount_feb_span = document.getElementById("amount_feb");
let month_feb_span = document.getElementById("month_feb");
let percentage_feb_span = document.getElementById("percentage_feb");

let amount_mar_span = document.getElementById("amount_mar");
let month_mar_span = document.getElementById("month_mar");
let percentage_mar_span = document.getElementById("percentage_mar");

let amount_apr_span = document.getElementById("amount_apr");
let month_apr_span = document.getElementById("month_apr");
let percentage_apr_span = document.getElementById("percentage_apr");

const playerInfo = [
    {
        name: "Almasa",
        location: "Hard Builds",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 4,
        gamesPlayed_Jan: 5,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 0,
        winRate_Feb: 0,

        march: 1,
        gamesPlayed_Mar: 5,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 1,
        endedWith_LargestArmy: 1,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 0,
    },
    {
        name: "Amanda",
        location: "",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 0,
        gamesPlayed_Jan: 2,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 0,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 1,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 2,
    },
    {
        name: "Bre",
        location: "Spontaneous Game Played",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 0,
        gamesPlayed_Jan: 1,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 0,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 0,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 0,
    },
    {
        name: "Bret",
        location: "Only person to complain about my house rules.",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 1,
        gamesPlayed_Jan: 2,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 0,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 0,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 0,
    },
    {
        name: "Chris",
        location: "Hates to play the game, but gets way to into it when he does.",
        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 1,
        gamesPlayed_Jan: 4,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 3,
        winRate_Feb: 0,

        march: 1,
        gamesPlayed_Mar: 4,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 2,
        lost_LongestRoad: 3,
        endedWith_LargestArmy: 3,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 2,
    },
    {
        name: "Daniel",
        location: "Talks a lot of shit, but still hasn't won.",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 0,
        gamesPlayed_Jan: 4,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 0,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 0,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 0,
    },
    {
        name: "Dorian",
        location: "Don't fall for his kindness.",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 2.5,
        gamesPlayed_Jan: 2.5,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 1,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 1,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 0,
    },
    {
        name: "Edisson",
        location: "Beginner's luck no more",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 1,
        gamesPlayed_Jan: 2,
        winRate_Jan: 0,

        february: 1,
        gamesPlayed_Feb: 3,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 2,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 1,
        lost_LongestRoad: 3,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 3,
    },
    {
        name: "Henry",
        location: "Longest Road Thief",
        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 0,
        gamesPlayed_Jan: 0,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 2,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 5,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 1,
        lost_LongestRoad: 3,
        endedWith_LargestArmy: 2,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 8,
    },
    {
        name: "Joel",
        location: "First Played Catan on a 6-player Game",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 0,
        gamesPlayed_Jan: 0,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 1,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 1,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 1,
    },
    {
        name: "Kassie",
        location: "Lowest Win Rate",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 1,
        gamesPlayed_Jan: 18,
        winRate_Jan: 0,

        february: 2,
        gamesPlayed_Feb: 7,
        winRate_Feb: 0,

        march: 3,
        gamesPlayed_Mar: 8,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 6,
        lost_LongestRoad: 7,
        endedWith_LargestArmy: 3,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 11,
    },
    {
        name: "Lily",
        location: "One(won) and done",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 0,
        gamesPlayed_Jan: 0,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 0,
        winRate_Feb: 0,

        march: 1,
        gamesPlayed_Mar: 1,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 1,
    },
    {
        name: "Lukas",
        location: "Highest Win Rate",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 1,
        gamesPlayed_Jan: 1,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 0,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 0,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 0,
    },
    {
        name: "Nathan",
        location: "Will probably try for longest road.",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 2,
        gamesPlayed_Jan: 4,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 1,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 0,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 0,
    },
    {
        name: "Pedro",
        location: "Killed the 'be nice' mindset",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 1.5,
        gamesPlayed_Jan: 3.5,
        winRate_Jan: 0,

        february: 1,
        gamesPlayed_Feb: 4,
        winRate_Feb: 0,

        march: 1,
        gamesPlayed_Mar: 4,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 1,
    },
    {
        name: "Ryan",
        location: "Online Player",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 1,
        gamesPlayed_Jan: 5,
        winRate_Jan: 0,

        february: 1,
        gamesPlayed_Feb: 2,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 0,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 0,
    },
    {
        name: "Tony",
        location: "Enemy #1, Most Wins",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 5,
        gamesPlayed_Jan: 18,
        winRate_Jan: 0,

        february: 2,
        gamesPlayed_Feb: 7,
        winRate_Feb: 0,

        march: 1,
        gamesPlayed_Mar: 5,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 3,
        lost_LongestRoad: 3,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 5,
    },
    {
        name: "Tristan",
        location: "Get Good",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 0,
        gamesPlayed_Jan: 1,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 0,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 0,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 0,
    },
    {
        name: "Yessenia",
        location: "You need to play more",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 0,
        gamesPlayed_Jan: 3,
        winRate_Jan: 0,

        february: 1,
        gamesPlayed_Feb: 1,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 0,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 0,
    },
    {
        name: "Yuri",
        location: "👀",

        winTotal: 0,
        gamesPlayed: 0,
        winRate: 0,

        january: 0,
        gamesPlayed_Jan: 0,
        winRate_Jan: 0,

        february: 0,
        gamesPlayed_Feb: 0,
        winRate_Feb: 0,

        march: 0,
        gamesPlayed_Mar: 1,
        winRate_Mar: 0,

        april: 0,
        gamesPlayed_Apr: 0,
        winRate_Apr: 0,

        endedWith_LongestRoad: 0,
        lost_LongestRoad: 0,
        endedWith_LargestArmy: 0,
        lost_LargestArmy: 0,
        accumulated_VictoryPoints: 2,
    },
];

function findWinTotal(playerInfo) {
    for (let element of playerInfo) {
        element.winTotal = element.january + element.february + element.march + element.april;
    }
}

function findTotalGamesPlayed(playerInfo) {
    for (let element of playerInfo) {
        element.gamesPlayed = element.gamesPlayed_Jan + element.gamesPlayed_Feb + element.gamesPlayed_Mar + element.gamesPlayed_Apr;
    }
}

function findWinRate(playerInfo) {
    for (let element of playerInfo) {
        element.winRate = ((element.winTotal / element.gamesPlayed) * 100).toFixed(0) + "%";
    }
}

function findWinRatePerMonth(playerInfo) {
    for (let element of playerInfo) {
        if(element.gamesPlayed_Jan == 0){
            element.winRate_Jan = "0%";
        }
        else {
            element.winRate_Jan = ((element.january / element.gamesPlayed_Jan) * 100).toFixed(0) + "%";
        }

        if(element.gamesPlayed_Feb == 0){
            element.winRate_Feb = "0%";
        }
        else{
            element.winRate_Feb = ((element.february / element.gamesPlayed_Feb) * 100).toFixed(0) + "%";
        }

        if(element.gamesPlayed_Mar == 0){
            element.winRate_Mar = "0%";
        }
        else{
            element.winRate_Mar = ((element.march / element.gamesPlayed_Mar) * 100).toFixed(0) + "%";
        }

        if(element.gamesPlayed_Apr == 0){
            element.winRate_Apr = "0%";
        }
        else{
            element.winRate_Apr = ((element.april / element.gamesPlayed_Apr) * 100).toFixed(0) + "%";
        }
    }
}

var firstPlace = [];
var firstPlaceScore = 0;
function findFirstPlace() {

    for(let element of playerInfo){
        if(element.winTotal > firstPlaceScore) {
            firstPlaceScore = element.winTotal;
        }
    }

    for(let element of playerInfo){
        if(element.winTotal == firstPlaceScore) {
            firstPlace.push(element.name);
        }
    }
}

var secondPlace = [];
var secondPlaceScore = 0;
function findSecondPlace() {

    for(let element of playerInfo){
        if(element.winTotal > secondPlaceScore && element.winTotal < firstPlaceScore) {
            secondPlaceScore = element.winTotal;
        }
    }

    for(let element of playerInfo){
        if(element.winTotal == secondPlaceScore) {
            secondPlace.push(element.name);
        }
    }
}

var thirdPlace = [];
function findThirdPlace() {
    var thirdPlaceScore = 0;

    for(let element of playerInfo){
        if(element.winTotal > thirdPlaceScore && element.winTotal < secondPlaceScore) {
            thirdPlaceScore = element.winTotal;
        }
    }

    for(let element of playerInfo){
        if(element.winTotal == thirdPlaceScore) {
            thirdPlace.push(element.name);
        }
    }
}

var playerWithMostVP = [];
function findPlayerWithMostVictoryPoints() {
    var vpScore = 0;

    for(let element of playerInfo){
        if(element.accumulated_VictoryPoints > vpScore) {
            vpScore = element.accumulated_VictoryPoints;
        }
    }

    for(let element of playerInfo){
        if(element.accumulated_VictoryPoints == vpScore) {
            playerWithMostVP.push(element.name);
        }
    }
}

var personWithMostLargestArmysLost = [];
function lostLargestArmy() {
    var lostArmy = 0;

    for(let element of playerInfo){
        if(element.lost_LargestArmy > lostArmy) {
            lostArmy = element.lost_LargestArmy;
        }
    }

    for(let element of playerInfo){
        if(element.lost_LargestArmy == lostArmy) {
            personWithMostLargestArmysLost.push(element.name);
        }
    }

    if(personWithMostLargestArmysLost.length == playerInfo.length){
        personWithMostLargestArmysLost = [];
        personWithMostLargestArmysLost.push("No One Yet")
    }
}

var personWithMostLargestArmys = [];
function largestArmy() {
    var largeArmy = 0;

    for(let element of playerInfo){
        if(element.endedWith_LargestArmy > largeArmy) {
            largeArmy = element.endedWith_LargestArmy;
        }
    }

    for(let element of playerInfo){
        if(element.endedWith_LargestArmy == largeArmy) {
            personWithMostLargestArmys.push(element.name);
        }
    }

    if(personWithMostLargestArmys.length == playerInfo.length){
        personWithMostLargestArmys = [];
        personWithMostLargestArmys.push("No One Yet")
    }
}

var personWithMostLongestRoadsLost = [];
function lostLongestRoad() {
    var lostRoad = 0;

    for(let element of playerInfo){
        if(element.lost_LongestRoad > lostRoad) {
            lostRoad = element.lost_LongestRoad;
        }
    }

    for(let element of playerInfo){
        if(element.lost_LongestRoad == lostRoad) {
            personWithMostLongestRoadsLost.push(element.name);
        }
    }
    if(personWithMostLongestRoadsLost.length == playerInfo.length){
        personWithMostLongestRoadsLost = [];
        personWithMostLongestRoadsLost.push("No One Yet")
    }
}

var personWithMostLongestRoads = [];
function longestRoad() {
    var longRoad = 0;

    for(let element of playerInfo){
        if(element.endedWith_LongestRoad > longRoad) {
            longRoad = element.endedWith_LongestRoad;
        }
    }

    for(let element of playerInfo){
        if(element.endedWith_LongestRoad == longRoad) {
            personWithMostLongestRoads.push(element.name);
        }
    }
    if(personWithMostLongestRoads.length == playerInfo.length){
        personWithMostLongestRoads = [];
        personWithMostLongestRoads.push("No One Yet")
    }
}

var janWinner = [];
function findJanuaryWinner() {
    var janWinnerScore = 0;

    for(let element of playerInfo){
        if(element.january > janWinnerScore) {
            janWinnerScore = element.january;
        }
    }

    for(let element of playerInfo){
        if(element.january == janWinnerScore) {
            janWinner.push(element.name);
        }
    }
}

var febWinner = [];
function findFebruaryWinner() {
    var febWinnerScore = 0;

    for(let element of playerInfo){
        if(element.february > febWinnerScore) {
            febWinnerScore = element.february;
        }
    }

    for(let element of playerInfo){
        if(element.february == febWinnerScore) {
            febWinner.push(element.name);
        }
    }
}

var marWinner = [];
function findMarchWinner() {
    var marWinnerScore = 0;

    for(let element of playerInfo){
        if(element.march > marWinnerScore) {
            marWinnerScore = element.march;
        }
    }

    for(let element of playerInfo){
        if(element.march == marWinnerScore) {
            marWinner.push(element.name);
        }
    }
}

var aprWinner = [];
function findAprilWinner() {
    var aprWinnerScore = 0;

    for(let element of playerInfo){
        if(element.april > aprWinnerScore) {
            aprWinnerScore = element.april;
        }
    }

    for(let element of playerInfo){
        if(element.april == aprWinnerScore) {
            aprWinner.push(element.name);
        }
    }
    if(aprWinner.length == playerInfo.length){
        aprWinner = [];
        aprWinner.push("No One Yet")
    }
}

var loser = [];
function findLosers() {
    var losersScore = 10;

    for(let element of playerInfo){
        if(element.winTotal < losersScore) {
            losersScore = element.winTotal;
        }
    }

    for(let element of playerInfo){
        if(element.winTotal == losersScore) {
            loser.push(element.name);
        }
    }
}

var mostGames = [];
function findMostGamesPlayedByPlayer() {
    var mostGamesScore = 0;

    for(let element of playerInfo){
        if(element.gamesPlayed > mostGamesScore) {
            mostGamesScore = element.gamesPlayed;
        }
    }

    for(let element of playerInfo){
        if(element.gamesPlayed == mostGamesScore) {
            mostGames.push(element.name);
        }
    }
}

var highestWinRate = [];
function findPlayerWithHighestWinRate() {
    var highWinRate = 0;
    var justWinTotal;

    for(let element of playerInfo){
        justWinTotal = element.winRate;
        var slicedWinTotal = justWinTotal.slice(0, - 1);
        var numWinTotal = +slicedWinTotal;
        
        if(numWinTotal > highWinRate) {
            highWinRate = numWinTotal;
        }
    }

    for(let element of playerInfo){
        if(element.winRate == highWinRate+"%") {
            highestWinRate.push(element.name);
        }
    }
}

function findPage(name) {
    showPlayerStat();
    var item;
    for(let element of playerInfo){
        if (element.name == name){
            item = element;
        }
    }

    user_name_span.textContent = name;
    location_span.textContent = item.location;

    tgp.innerHTML = "";
    tgp.innerHTML += item.gamesPlayed;

    tgw.innerHTML = "";
    tgw.innerHTML += item.winTotal;

    owr.innerHTML = ""
    owr.innerHTML += item.winRate;

    vpg.innerHTML = ""
    vpg.innerHTML += item.accumulated_VictoryPoints;

    lra.innerHTML = ""
    lra.innerHTML += item.endedWith_LongestRoad;

    lrl.innerHTML = ""
    lrl.innerHTML += item.lost_LongestRoad;

    laa.innerHTML = ""
    laa.innerHTML += item.endedWith_LargestArmy;

    lal.innerHTML = ""
    lal.innerHTML += item.lost_LargestArmy;

    amount_all_span.textContent = item.winTotal + " won";
    month_all_span.textContent = item.gamesPlayed + " played";
    percentage_all_span.textContent = item.winRate;

    amount_jan_span.textContent = item.january + " won";
    month_jan_span.textContent = item.gamesPlayed_Jan + " played";
    percentage_jan_span.textContent = item.winRate_Jan;

    amount_feb_span.textContent = item.february + " won";
    month_feb_span.textContent = item.gamesPlayed_Feb + " played";
    percentage_feb_span.textContent = item.winRate_Feb;

    amount_mar_span.textContent = item.march + " won";
    month_mar_span.textContent = item.gamesPlayed_Mar + " played";
    percentage_mar_span.textContent = item.winRate_Mar;

    amount_apr_span.textContent = item.april + " won";
    month_apr_span.textContent = item.gamesPlayed_Apr + " played";
    percentage_apr_span.textContent = item.winRate_Apr;
}

function homePage() {
    first_place.innerHTML = "";
    second_place.innerHTML = "";
    third_place.innerHTML = "";
    mvp.innerHTML = "";
    ckla.innerHTML = "";
    mlaa.innerHTML = "";
    cklr.innerHTML = "";
    mlra.innerHTML = "";
    jw.innerHTML = "";
    fw.innerHTML = "";
    mw.innerHTML = "";
    aw.innerHTML = "";
    cwag.innerHTML = "";
    mgp.innerHTML = "";
    hwr.innerHTML = "";
    
    first_place.innerHTML += firstPlace;
    second_place.innerHTML += secondPlace;
    third_place.innerHTML += thirdPlace;
    mvp.innerHTML += playerWithMostVP;
    ckla.innerHTML += personWithMostLargestArmysLost;
    mlaa.innerHTML += personWithMostLargestArmys;
    cklr.innerHTML += personWithMostLongestRoadsLost;
    mlra.innerHTML += personWithMostLongestRoads;
    jw.innerHTML += janWinner;
    fw.innerHTML += febWinner;
    mw.innerHTML += marWinner;
    aw.innerHTML += aprWinner;
    cwag.innerHTML += loser;
    mgp.innerHTML += mostGames;
    hwr.innerHTML += highestWinRate;

    showHome();
}

function showHome() {
    if(show_overall_stats.style.display = "none"){
        show_individual_stats.style.display = "none";
        show_overall_stats.style.display = "block";
    }
}

function showPlayerStat() {
    if(show_individual_stats.style.display = "none"){
        show_overall_stats.style.display = "none";
        show_individual_stats.style.display = "block";
    }
}

const barColors = [
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)",
    "rgb(177, 124, 251)"
];

function getBarGraphValues() {
    for (let element of playerInfo)
    {
        var individualValues = [element.winTotal, element.name];
        barGraphValues.push(individualValues);
    }

    var sortedArray = barGraphValues.sort(function(a, b) {
        if (a[0] == b[0]) {
          return a[1] - b[1];
        }
        return b[0] - a[0];
      }
    );
      
    for(let i = 0; i < sortedArray.length; i++) {
        yValues.push(sortedArray[i][0]);
        xValues.push(sortedArray[i][1]);
    }

}

new Chart("myChart", {
    type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    scales: {
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
        }]
    },
    legend: {display: false},
    title: {
      display: true,
      text: "Scores"
    }
  }
});

findWinTotal(playerInfo);
findTotalGamesPlayed(playerInfo);
findWinRate(playerInfo);
findWinRatePerMonth(playerInfo);

findFirstPlace();
findSecondPlace();
findThirdPlace();
findPlayerWithMostVictoryPoints();
lostLargestArmy();
largestArmy();
lostLongestRoad();
longestRoad();
findJanuaryWinner();
findFebruaryWinner();
findMarchWinner();
findAprilWinner();
findLosers();
findMostGamesPlayedByPlayer();
findPlayerWithHighestWinRate();
getBarGraphValues();

homePage();
