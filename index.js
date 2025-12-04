function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
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
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// Helper to access all players
function allPlayers() {
    const game = gameObject();
    // return {
    //     ...game.home.players,
    //     ...game.away.players
    // };
    return Object.assign({}, game.home.players, game.away.players);
}

// Retrieve Player Info
function numPointsScored(playerName) {
    // return allPlayers()[playerName]?.points || null;
    const player = allPlayers()[playerName];
    return player ? player.points : null;
}

function shoeSize(playerName) {
    // return allPlayers()[playerName]?.shoe || null;
    const player = allPlayers()[playerName];
    return player ? player.shoe : null;
}

// Retrieve Team Info
function teamColors(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
        if (game[teamKey].teamName === teamName) {
            return game[teamKey].colors;
        }
    }
    return null;
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// Retrieve Player Numbers and Stats

function playerNumbers(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
        if (game[teamKey].teamName === teamName) {
            return Object.values(game[teamKey].players).map(player => player.number);
        }
    }
    return [];
}

function playerStats(playerName) {
    return allPlayers()[playerName] || null;
}

// Hard problem
function bigShoeRebounds() {
    const players = allPlayers();
    let biggestShoe = 0; // I would go smaller with a different dataset
    // let topRebounder = "";
    let rebounds = 0;

    for (let player in players) {
        if (players[player].shoe > biggestShoe) {
            biggestShoe = players[player].shoe;
            rebounds = players[player].rebounds;
            // topRebounder = player;
        }
    }

    return rebounds;
    // return `${topRebounder} had the biggest shoe size and grabbed ${rebounds} rebounds.`;
}

// Bonus
function mostPointsScored() {
    const players = allPlayers();
    let maxPoints = 0; // I would go smaller with a different dataset
    let topScorer = "";

    for (let player in players) {
        if (players[player].points > maxPoints) {
            maxPoints = players[player].points;
            topScorer = player;
        }
    }

    return `${topScorer} scored the most points with ${maxPoints}.`;
}

// Helper
function totalTeamPoints(players) {
    return Object.values(players).reduce((sum, player) => sum + player.points, 0);
}

function winningTeam() {
    const game = gameObject();
    let homePoints = totalTeamPoints(game.home.players);
    let awayPoints = totalTeamPoints(game.away.players);

    if (homePoints > awayPoints) {
        return `${game.home.teamName} won with ${homePoints} points.`;
    } else if (awayPoints > homePoints) {
        return `${game.away.teamName} won with ${awayPoints} points.`;
    } else {
        return `It's a tie! Both teams scored ${homePoints} points.`;
    }
}

function playerWithLongestName() {
    const players = allPlayers();
    let longestName = "";

    for (let player in players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    return longestName;
    // return `${longestName} has the longest name.`;
}

function doesLongNameStealATon() {
    const players = allPlayers();
    const longestName = playerWithLongestName();

    let maxSteals = 0;
    let playerWithMostSteals = "";

    for (let player in players) {
        if (players[player].steals > maxSteals) {
            maxSteals = players[player].steals;
            playerWithMostSteals = player;
        }
    }

    return longestName === playerWithMostSteals;
}

console.log(numPointsScored("Alan Anderson"));
console.log(shoeSize("Ben Gordon"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerStats("DeSagna Diop"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());    
console.log(doesLongNameStealATon());