<script>
    export let data;

    console.log(data);
    let post = data.post
</script>

<div class="gamePage">
    <h1>{post.title}</h1>
    <body>
        {post.body}
    </body>
    <a href="/games">Back to games</a>
</div>

<style>
    .gamePage {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 64px;
    }

    h1 {
        margin-bottom: 24px;
    }

    a {
        margin-top: 24px;
    }
</style>