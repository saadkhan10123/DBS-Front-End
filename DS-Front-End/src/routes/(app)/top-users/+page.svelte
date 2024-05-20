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
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    div {
        margin: 10px;
        padding: 10px;
    }
</style>