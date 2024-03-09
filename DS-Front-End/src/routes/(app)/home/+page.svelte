<script>
	import GameGrid from "$lib/General/GameGrid.svelte";

	export let data;

</script>

<div class="main-screen">
	<h1>Latest Highscores</h1>
	<GameGrid data = {data.posts}/>
</div>

<style>
	.main-screen {
		padding: 0;
		display: flex;
		flex-direction: column;
		color: white;
	}

	h1 {
		font-size: 2em;
		margin: 0;
		padding: 1em 1em 1.5em;
	}
</style>