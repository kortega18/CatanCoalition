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
        winTotal: 1,
        inPerson: 1,
        online: 0,
        gamesPlayed: 1,
        winRate: "100%",
        january: 1
    },
    {
        name: "Amanda",
        winTotal: 0,
        inPerson: 0,
        online: 0,
        gamesPlayed: 1,
        winRate: "0%",
        january: 0
    },
    {
        name: "Chris",
        winTotal: 0,
        inPerson: 0,
        online: 0,
        gamesPlayed: 1,
        winRate: "0%",
        january: 0
    },
    {
        name: "Daniel",
        winTotal: 0,
        inPerson: 0,
        online: 0,
        gamesPlayed: 1,
        winRate: "0%",
        january: 0
    },
    {
        name: "Dorian",
        winTotal: 2,
        inPerson: 2,
        online: 0,
        gamesPlayed: 2,
        winRate: "100%",
        january: 2
    },
    {
        name: "Kassie",
        winTotal: 1,
        inPerson: 1,
        online: 0,
        gamesPlayed: 11,
        winRate: "9%",
        january: 1
    },
    {
        name: "Lukas",
        winTotal: 1,
        inPerson: 0,
        online: 1,
        gamesPlayed: 1,
        winRate: "100%",
        january: 1
    },
    {
        name: "Nathan",
        winTotal: 1,
        inPerson: 0,
        online: 1,
        gamesPlayed: 1,
        winRate: "100%",
        january: 1
    },
    {
        name: "Pedro",
        winTotal: 2,
        inPerson: 2,
        online: 0,
        gamesPlayed: 3,
        winRate: "67%",
        january: 2
    },
    {
        name: "Tony",
        winTotal: 3,
        inPerson: 1,
        online: 2,
        gamesPlayed: 12,
        winRate: "25%",
        january: 2
    },
    {
        name: "Tristan",
        winTotal: 0,
        inPerson: 0,
        online: 0,
        gamesPlayed: 1,
        winRate: "0%",
        january: 0
    },
    {
        name: "Ryan",
        winTotal: 1,
        inPerson: 0,
        online: 1,
        gamesPlayed: 3,
        winRate: "33%",
        january: 1
    },
    {
        name: "Yessenia",
        winTotal: 0,
        inPerson: 0,
        online: 0,
        gamesPlayed: 1,
        winRate: "0%",
        january: 0
    },
];

let table = document.querySelector("table");

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