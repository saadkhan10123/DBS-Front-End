<script>
	import GameGrid from "$lib/General/GameGrid.svelte";

	export let data;

	console.log(data.actor);
	console.log(data)
</script>

<div class="main-screen">
	<div class="heading">Latest High Scores</div>
	<GameGrid data = {data.posts}/>
</div>

<style>
	.main-screen {
		padding: 0;
		display: flex;
		flex-direction: column;
		color: white;
	}

</style>