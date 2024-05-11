<script>
    /** @type {import('./$types').PageData} */
    import PlayerCard from '$lib/General/PlayerCard.svelte';

    export let data;

    console.log(data.topUsers);
</script>

<div class="top-users">
    {#each data.topUsers as user}
        <PlayerCard {user}/>
    {/each}
</div>

<style>
    .top-users {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        box-sizing: border-box;
        gap: 2em 1em;
    }

    @media (max-width: 1200px) {
        .top-users {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (max-width: 1000px) {
        .top-users {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 800px) {
        .top-users {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    div {
        margin: 10px;
        padding: 10px;
    }
</style>