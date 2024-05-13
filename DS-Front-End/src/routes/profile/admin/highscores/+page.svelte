<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Card from '$lib/General/Card.svelte';
    
    console.log(data.highscores);
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="admin-highscores">
    <div class="search-highscores">
        <input type="text" placeholder="Search for highscores" />
        <button><i class="fa fa-search"></i></button>
    </div>
    <div class="highscore-list">
        {#each data.highscores as highscore}
            <Card data = {highscore} isAdmin = {true}/>
        {/each}
    </div>
</div>