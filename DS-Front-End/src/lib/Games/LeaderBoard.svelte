<script>
    import Game from "./Game.svelte";

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
        }
    ]
    let rank = 1
    
  
    // Temporary rank assigning
    const appendRank = (game) => {
        game.rank = rank
        rank++
    }

    gameList.forEach(appendRank)
</script>

<div class="leader-board">
    <h1>Leader Board</h1>
    <div class="game-list">
        {#each gameList as game}
            <Game {game}/>
        {/each}
    </div>
</div>

<style>
    h1 {
        margin-bottom: 24px;
    }

    .game-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
</style>

