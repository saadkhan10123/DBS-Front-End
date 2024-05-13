<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import AddingGame from '$lib/Admin/AddingGame.svelte';

    let addingGame = false;

    const games = data.games;
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

{#if addingGame}
    <AddingGame on:disableModal={() => {addingGame = false}} />
{/if}
<div class="admin-games">
    <div class="games-search">
        <input type="text" placeholder="Search for games" />
        <button><i class="fa fa-search"></i></button>
        <button on:click={() => {addingGame = true}}>Add Game</button>
    </div>
    <div class="games-list">
        {#each games as game}
            <div class="game-item">
                <a href={`/games/${game.game_id}`}>{game.title}</a>
            </div>
        {/each}
    </div>
</div>

