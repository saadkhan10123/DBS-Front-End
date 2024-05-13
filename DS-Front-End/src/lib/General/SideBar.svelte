<script>
    export let latestGames;
</script>

<div class="side-bar">
    <h3>Latest Games</h3>
    {#each latestGames as game}
        <div class="side-item"><a data-sveltekit-reload href={`/games/${game.game_id}`}>{game.title}</a></div>
    {/each}
</div>

<style>
h3 {
    margin-left: 1em;
}

.side-bar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    flex: 1;
    margin-left: 3rem; 
    border-radius: 1rem;
    background-color: #1A1A1A;
}

.side-item {
    background-color: #222222;
    color: white;
    border-radius: 1rem;
}

a {
    color: white;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0.75rem 1.5rem; 
    box-sizing: border-box;
}
</style>