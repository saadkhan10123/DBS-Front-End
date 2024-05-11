<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import AddHighScore from '$lib/User/AddHighScore.svelte';


    $: scores = data.data.highscores
    $: games = data.data.games

    let addingHighscore = false
    const addHighscore = () => {
        console.log("Add Highscore")
        addingHighscore = true
    }
</script>

<div class="highscores">
    {#if scores === null} 
        <h1>Sorry! You have no higscores right now</h1>
    {:else}
        {#each scores as score}
        <p>{score.user_rank}</p>
        <p>{score.highscore}</p>
        {/each}
    {/if}
    <button on:click={addHighscore}>Add Highscore</button>
    {#if addingHighscore}
        <AddHighScore {games} on:disableModal={() => {addingHighscore = false}}/>
    {/if}
</div>

<style>
    .highscores {
        margin-left: 3em;
        margin-top: 2em;
    }

    button {
        background-color: #f74d40;
        border: none;
        transition: all 0.2s;
        scale: 1.2;
        margin-left: 1em;
    }

    button:hover {
        background-color: #ff6961;
    }
</style>