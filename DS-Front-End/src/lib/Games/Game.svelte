<script>
    export let game

</script>

<div class="game-entry">
    <h2>{game.playerName}</h2>
    <p>Score: {game.score}</p>
    <p>Rank: {game.rank}</p>
</div>

<style>
    .game-entry {
        margin-bottom: 24px;
        border: 1px solid green;
    }
</style>