<script>
	import GameGrid from "$lib/GameGrid.svelte";

	export let data;

</script>

	<div class="main-screen">
		<GameGrid data = {data.posts}/>
	</div>

<style>
	.main-screen {
		padding: 0;
	}

</style>