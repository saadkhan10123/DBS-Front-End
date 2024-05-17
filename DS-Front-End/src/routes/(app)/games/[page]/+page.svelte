<script>
    export let data;

    import LeaderBoard from '$lib/Games/LeaderBoard.svelte';

    const gameInfo = data.gameInfo;
    const scores = data.scores;
</script>

<div class="gamePage">
    <div class="game-info">
        <img src={'data:image/jpeg;base64,' + gameInfo.game_image.substring(20)} alt="The game">            
        <h1>{gameInfo.title}</h1>
        <h3>{gameInfo.rel_year}</h3>
        <div class="post-body">
            {gameInfo.description}
        </div>
    </div>
</div>
<div class="leaderboard">
    <LeaderBoard {scores}/>
    <button>
        <a href="/games">Back to Games</a>
    </button>

</div>

<style>
    .gamePage, .leaderboard {
        padding: 24px 64px;
    }

    h1 {
        margin-bottom: 24px;
    }

    button {
        background-color: #f74d40;
        border-color: #f74d40;
        margin-top: 32px;
        transition: all 0.2s;
    }

    button:hover {
        background-color: #ff6961;
    }

    a {
        color: white;
    }


</style>