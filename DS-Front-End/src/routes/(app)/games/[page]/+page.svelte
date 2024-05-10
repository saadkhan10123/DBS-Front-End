<script>
    export let data;

    import LeaderBoard from '$lib/Games/LeaderBoard.svelte';

    // console.log(data);
    let post = data.post
</script>

<div class="gamePage">
    <div class="game-info">
        <img src="game-pic.png" alt="The game">            
        <h1>Game Title {post.title}</h1>
        <div class="post-body">
            {post.body}
        </div>
    </div>
</div>
<div class="leaderboard">
    <LeaderBoard />
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