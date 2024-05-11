<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import PendingScores from '$lib/Admin/PendingScores.svelte';
</script>

<div class="pending-scores">
    {#if data.scores === null}
        <h1>No pending scores</h1>
    {:else}
        {#each data.scores as score}
        <PendingScores {score}/>
        {/each}
    {/if}
</div>

<style>
    .pending-scores {
        padding: 24px 64px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 5em;
        max-height: 100%;
    }
</style>