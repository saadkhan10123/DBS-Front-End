<script>
    /** @type {import('./$types').PageData} */
    import GameCard from '$lib/Games/GameCard.svelte';

    export let data;


    console.log(data);
    let games = data.popularGames;
</script>

<div class="gamesGrid">
    {#each games as game}
        <GameCard game={game}/>
    {/each}
</div>

<style>
    .gamesGrid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        box-sizing: border-box;
        gap: 2em 1em;
    }

    @media (max-width: 1200px) {
        .gamesGrid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (max-width: 1000px) {
        .gamesGrid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 800px) {
        .gamesGrid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    div {
        margin: 10px;
        padding: 10px;
    }
</style>