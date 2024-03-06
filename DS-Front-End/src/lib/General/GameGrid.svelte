<script>
    import Card from "./Card.svelte";
    export let data;

    let smallData = data.slice(0, 8);
</script>

<div class="grid">
    {#each smallData as item}
        <Card data={item}/>
    {/each}
</div>

<style>
    .grid {
		display: flex;
		gap: 2em;
        flex: 5;
        flex-direction: column;
        padding: 10px 10px;
        border-radius: 5px;
	}
</style>