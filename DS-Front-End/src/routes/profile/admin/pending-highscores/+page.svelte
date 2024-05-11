<script>
    import PendingScores from '$lib/Admin/PendingScores.svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    console.log(data);

</script>

<div class="pending-scores">
    {#if data.pendingScores === null}
        <h1>No pending scores</h1>
    {:else}
        {#each data.pendingScores as score}
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