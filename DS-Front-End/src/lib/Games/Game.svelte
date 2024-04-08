<script>
    export let game

</script>

<!-- Single entry for latest highscores -->
<div class="game-entry">
    <h2>{game.playerName}</h2>
    <p>Score: {game.score}</p>
    <p>Rank: {game.rank}</p>
</div>

<style>
    .game-entry {
<<<<<<< HEAD
        margin-bottom: 24px;
        border: 1px solid #ff6961;
=======
        background-color: #222222;
        padding: 1em;
        border-radius: 1em;
        margin: .5rem;
    }
</style>