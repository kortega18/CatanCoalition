const headerInfo = [
    "Name", 
    "Total Wins",
    "In Person Wins", 
    "Online Wins",
    "Games Played",
    "Win Rate",
    "January Wins"
]

const playerInfo = [
    {
        name: "Almasa",
        winTotal: 4,
        inPerson: 1,
        online: 3,
        gamesPlayed: 5,
        winRate: "80%",
        january: 4,
        gamesPlayed_Jan: 5,

    },
    {
        name: "Amanda",
        winTotal: 0,
        inPerson: 0,
        online: 0,
        gamesPlayed: 2,
        winRate: "0%",
        january: 0,
        gamesPlayed_Jan: 2,
    },
    {
        name: "Bre",
        winTotal: 0,
        inPerson: 0,
        online: 0,
        gamesPlayed: 1,
        winRate: "0%",
        january: 0,
        gamesPlayed_Jan: 1,
    },
    {
        name: "Bret",
        winTotal: 1,
        inPerson: 1,
        online: 0,
        gamesPlayed: 2,
        winRate: "50%",
        january: 1,
        gamesPlayed_Jan: 2,
    },
    {
        name: "Chris",
        winTotal: 1,
        inPerson: 1,
        online: 0,
        gamesPlayed: 4,
        winRate: "25%",
        january: 1,
        gamesPlayed_Jan: 4,
    },
    {
        name: "Daniel",
        winTotal: 0,
        inPerson: 0,
        online: 0,
        gamesPlayed: 4,
        winRate: "0%",
        january: 0,
        gamesPlayed_Jan: 4,
    },
    {
        name: "Dorian",
        winTotal: 2.5,
        inPerson: 2.5,
        online: 0,
        gamesPlayed: 2.5,
        winRate: "100%",
        january: 2.5,
        gamesPlayed_Jan: 2.5,
    },
    {
        name: "Edisson",
        winTotal: 1,
        inPerson: 1,
        online: 0,
        gamesPlayed: 2,
        winRate: "50%",
        january: 1,
        gamesPlayed_Jan: 2,
    },
    {
        name: "Kassie",
        winTotal: 1,
        inPerson: 1,
        online: 0,
        gamesPlayed: 18,
        winRate: "6%",
        january: 1,
        gamesPlayed_Jan: 18,
    },
    {
        name: "Lukas",
        winTotal: 1,
        inPerson: 0,
        online: 1,
        gamesPlayed: 1,
        winRate: "100%",
        january: 1,
        gamesPlayed_Jan: 1,
    },
    {
        name: "Nathan",
        winTotal: 2,
        inPerson: 1,
        online: 1,
        gamesPlayed: 4,
        winRate: "50%",
        january: 2,
        gamesPlayed_Jan: 4,
    },
    {
        name: "Pedro",
        winTotal: 1.5,
        inPerson: 1.5,
        online: 0,
        gamesPlayed: 3.5,
        winRate: "38%",
        january: 1.5,
        gamesPlayed_Jan: 3.5,
    },
    {
        name: "Tony",
        winTotal: 5,
        inPerson: 2,
        online: 3,
        gamesPlayed: 18,
        winRate: "28%",
        january: 5,
        gamesPlayed_Jan: 18,
    },
    {
        name: "Tristan",
        winTotal: 0,
        inPerson: 0,
        online: 0,
        gamesPlayed: 1,
        winRate: "0%",
        january: 0,
        gamesPlayed_Jan: 1,
    },
    {
        name: "Ryan",
        winTotal: 1,
        inPerson: 0,
        online: 1,
        gamesPlayed: 5,
        winRate: "20%",
        january: 1,
        gamesPlayed_Jan: 5,
    },
    {
        name: "Yessenia",
        winTotal: 0,
        inPerson: 0,
        online: 0,
        gamesPlayed: 3,
        winRate: "0%",
        january: 0,
        gamesPlayed_Jan: 3,
    },
];

let table = document.querySelector("table");
let leaderBoard = document.getElementById("leaders");

var tableHeadersList = [    
    "Name", 
    "Total Wins",
    // "In Person Wins", 
    // "Online Wins",
    // "Games Played",
    // "Win Rate",
    // "January Wins"
];
var tableDataList = [
    "name",
    "winTotal",
    // "inPerson",
    // "online",
    // "gamesPlayed",
    // "winRate",
    // "january"
];

var leadersList = [];

function totalWins_button() {
    var tw_Btn = document.getElementById("totalWins");
    if (tw_Btn.innerHTML === "Show Total Wins") {
        tw_Btn.innerHTML = "Hide Total Wins";
        tw_Btn.style.opacity = "0.6";

        tableHeadersList.push("Total Wins");
        tableDataList.push("winTotal");
    } else {
        tw_Btn.innerHTML = "Show Total Wins";
        tw_Btn.style.opacity = "1";

        let findHeader = tableHeadersList.indexOf("Total Wins");
        let findData = tableDataList.indexOf("winTotal");

        tableHeadersList.splice(findHeader, 1);
        tableDataList.splice(findData, 1);
    }
};

function inPerson_button() {
    var ip_Btn = document.getElementById("inPerson");
    if (ip_Btn.innerHTML === "Show In Person Wins") {
        ip_Btn.innerHTML = "Hide In Person Wins";
        ip_Btn.style.opacity = "0.6";

        
        tableHeadersList.push("In Person Wins");
        tableDataList.push("inPerson");
    } else {
        ip_Btn.innerHTML = "Show In Person Wins";
        ip_Btn.style.opacity = "1";

        let findHeader = tableHeadersList.indexOf("In Person Wins");
        let findData = tableDataList.indexOf("inPerson");

        tableHeadersList.splice(findHeader, 1);
        tableDataList.splice(findData, 1);
    }

    removeRows(table);
    generateTableHead(table, tableHeadersList);
    generateTable(table, tableDataList, playerInfo);
};

function online_button() {
    var on_Btn = document.getElementById("online");
    if (on_Btn.innerHTML === "Show Online Wins") {
        on_Btn.innerHTML = "Hide Online Wins";
        on_Btn.style.opacity = "0.6";

        tableHeadersList.push("Online Wins");
        tableDataList.push("online");
    } else {
        on_Btn.innerHTML = "Show Online Wins";
        on_Btn.style.opacity = "1";

        let findHeader = tableHeadersList.indexOf("Online Wins");
        let findData = tableDataList.indexOf("online");

        tableHeadersList.splice(findHeader, 1);
        tableDataList.splice(findData, 1);
    }

    removeRows(table);
    generateTableHead(table, tableHeadersList);
    generateTable(table, tableDataList, playerInfo);
}

function gamesPlayed_button() {
    var gp_Btn = document.getElementById("gamesPlayed");
    if (gp_Btn.innerHTML === "Show Games Played") {
        gp_Btn.innerHTML = "Hide Games Played";
        gp_Btn.style.opacity = "0.6";

        tableHeadersList.push("Games Played");
        tableDataList.push("gamesPlayed");
    } else {
        gp_Btn.innerHTML = "Show Games Played";
        gp_Btn.style.opacity = "1";

        let findHeader = tableHeadersList.indexOf("Games Played");
        let findData = tableDataList.indexOf("gamesPlayed");

        tableHeadersList.splice(findHeader, 1);
        tableDataList.splice(findData, 1);
    }

    removeRows(table);
    generateTableHead(table, tableHeadersList);
    generateTable(table, tableDataList, playerInfo);
}

function winRate_button() {
    var wr_Btn = document.getElementById("winRate");
    if (wr_Btn.innerHTML === "Show Win Rate") {
        wr_Btn.innerHTML = "Hide Win Rate";
        wr_Btn.style.opacity = "0.6";

        tableHeadersList.push("Win Rate");
        tableDataList.push("winRate");
    } else {
        wr_Btn.innerHTML = "Show Win Rate";
        wr_Btn.style.opacity = "1";

        let findHeader = tableHeadersList.indexOf("Win Rate");
        let findData = tableDataList.indexOf("winRate");

        tableHeadersList.splice(findHeader, 1);
        tableDataList.splice(findData, 1);
    }

    removeRows(table);
    generateTableHead(table, tableHeadersList);
    generateTable(table, tableDataList, playerInfo);
}

generateTableHead(table, tableHeadersList);
generateTable(table, tableDataList, playerInfo);

function generateTableHead(table, headerData) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of headerData) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
  }
  
function generateTable(table, tableData, playerData) {
    for (let element of playerData) {
        let row = table.insertRow();
        for (key in element) {
            for (var i = 0; i < tableData.length; i++) {
                if (key === tableData[i]) {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }
        }
    }
}

function removeRows(table)
{
    table.firstElementChild.remove();
}

function findWinRate(timesPlayed, timesWon) {
    return ((timesWon/timesPlayed) * 100);
}

function findLeaders(leaderBoard, players) {
    var leadersName = [];
    var leadersScore = [];
    for (let element of players) {
        for (key in element) {
            if (key === "name") {
                leadersName.push(element[key]);
            }
            if (key === "winTotal") {
                leadersScore.push(element[key]);
            }
        }
    }

    var highestScore = 0;

    for (var i = 0; i < leadersScore.length; i++) {
        if(leadersScore[i] > highestScore) {
            highestScore = leadersScore[i];
        }
    }

    var scoreLocation = leadersScore.indexOf(highestScore);
    var currentWinner = leadersName[scoreLocation];

    leaderBoard.innerHTML = currentWinner;
}

findLeaders(leaderBoard, playerInfo);