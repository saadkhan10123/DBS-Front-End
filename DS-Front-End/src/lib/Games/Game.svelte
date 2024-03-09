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
        background-color: #222222;
        padding: 1em;
        border-radius: 1em;
        margin: .5rem;
    }
</style>