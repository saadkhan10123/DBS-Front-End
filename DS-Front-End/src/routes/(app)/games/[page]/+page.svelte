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
    <LeaderBoard />
    <a href="/games">Back to games</a>
</div>

<style>
    .gamePage {
        padding: 24px 64px;
    }

    h1 {
        margin-bottom: 24px;
    }

    a {
        margin-top: 24px;
    }
</style>