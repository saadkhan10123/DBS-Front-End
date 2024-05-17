<script>
    import Game from "./Game.svelte";

    export let scores

    // Data for game leaderboard
    let gameList = [
        {
        id: 1,
        playerName: "Name 1",
        score: 100
        },
        {
        id: 2,
        playerName: "Name 2",
        score: 50
        },
        {
        id: 3,
        playerName: "Name 3",
        score: 20
        },
        {
        id: 4,
        playerName: "Name 4",
        score: 10
        },
        {
        id: 5,
        playerName: "Name 5",
        score: 5
        },
        {
        id: 6,
        playerName: "Name 6",
        score: 1
        },
        {
        id: 7,
        playerName: "Name 7",
        score: 0
        }
    ];

    let rank = 1;

    const appendRank = (game) => {
        game.rank = rank;
        rank++;
    };

    gameList.forEach(appendRank);

    gameList[1].rank = 1
    gameList[2].rank = 2
    gameList[3].rank = 3

    let firstPosition = gameList.filter(game => game.rank === 1)
    let secondPosition = gameList.filter(game => game.rank === 2)
    let thirdPosition = gameList.filter(game => game.rank === 3)
    let restOfTheList = gameList.filter(game => game.rank > 3)

    // No need for separate filtering and sorting anymore
</script>
    
<div class="game-details">
    
</div>
<div class="leader-board">
    <h1>Leader Board</h1>
    <table>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Player Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {#each scores as score}
            <tr>
                <td>{score.user_rank}</td>
                <td>{score.username}</td>
                <td>{score.highscore}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>


<style>
    h1 {
        margin-bottom: 24px;
    }

    .leader-board {
    width: 100%;
    }

    .leader-board table {
        width: 100%;
        border-collapse: collapse;
    }

    .leader-board th,
    .leader-board td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    .leader-board th {
        background-color: #f74d40;
        /* background-color: #ff6961; */
    }

    .leader-board tbody tr:nth-child(even) {
        background-color: #2d2d2d;
    }

    .leader-board tbody tr:hover {
        background-color: #3d3d3d;
    }
</style>