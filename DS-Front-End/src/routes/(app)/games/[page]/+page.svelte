<script>
    export let data;

    import LeaderBoard from '$lib/Games/LeaderBoard.svelte';

    console.log(data);
    let post = data.post
</script>

<div class="gamePage">
    <h1>{post.title}</h1>
    <body>
        {post.body}
    </body>
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