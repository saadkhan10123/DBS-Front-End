<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import AdminScoreCard from '$lib/Admin/AdminScoreCard.svelte'

    $: scores = data.highscores
    
    let user = ''
    const searchScore = async () => {
        // set the url to the search query
        await goto(`/profile/admin/users?param1=${user}`, { replaceState: true })
    }
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="admin-highscores">
    <div class="search-highscores">
        <input bind:value={user} type="text" placeholder="Search for highscores" />
        <button on:click={searchScore}><i class="fa fa-search"></i></button>
    </div>
    <div class="highscore-list">
        {#each scores as highscore}
            <AdminScoreCard {highscore}/>
        {/each}
    </div>
</div>