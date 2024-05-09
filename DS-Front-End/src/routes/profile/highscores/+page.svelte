<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import AddHighScore from '$lib/User/AddHighScore.svelte';

    const scores = data.data.result

    console.log(scores)

    let addingHighscore = false
    const addHighscore = () => {
        console.log("Add Highscore")
        addingHighscore = true
    }
</script>

<div class="highscores">
    {#if scores.length === 0} 
        <h1>You have no higscores right now</h1>
        <button on:click={addHighscore}>Add Highscore</button>
    {:else}
        {#each scores as score}
            <p>{score.user_rank}</p>
            <p>{score.highscore}</p>
        {/each}
    {/if}
    {#if addingHighscore}
        <AddHighScore on:disableModal={() => {addingHighscore = false}}/>
    {/if}
</div>