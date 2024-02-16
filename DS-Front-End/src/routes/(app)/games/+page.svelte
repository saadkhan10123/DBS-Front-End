<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let games = data.games;
</script>

<div class="gamesList">
    {#each games as game}
        <div>
            <h2>{game.title}</h2>
            <p>{game.body}</p>
        </div>
    {/each}
</div>

<style>
    .gamesList {
        display: flex;
        flex-direction: column;
    }

    div {
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
    }
</style>