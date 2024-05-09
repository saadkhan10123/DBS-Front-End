<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const scores = data.data.result

    console.log(scores)

</script>

<div class="highscores">
    {#if data === null} 
        <h1>You have no higscores right now</h1>
    {:else}
        {#each scores as score}
            <p>{score.user_rank}</p>
            <p>{score.highscore}</p>
        {/each}
    {/if}
</div>