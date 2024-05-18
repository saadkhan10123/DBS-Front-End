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
        <h1>Search Highscore</h1>
        <input bind:value={user} type="text" placeholder="" />
        <button on:click={searchScore}><i class="fa fa-search"></i></button>
    </div>
    <div class="highscore-list">
        {#each scores as highscore}
            <AdminScoreCard {highscore}/>
        {/each}
    </div>
</div>

<style>
    .admin-highscores {
        padding: 24px 64px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 5em;
        max-height: 100%;
    }

    .search-highscores {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px 64px;
        background-color: #222222;
        color: white;
        border-radius: 1em;
    }

    h1 {
        font-size: 1.25em;
        font-weight: bold;
        text-align: center;
        margin: 0em 0.5em;
    }

    input {
        padding: 0.5em;
        border-radius: 0.5em;
        margin: 0em 1em;
        border: none;
        border-right: none;
    }

    button {
        background-color: #f74d01;
        color: white;
        border: none;
        padding: 0.75em 1em;
        border-radius: 0.5em;
        border-left: none;
    }

    button:hover { 
        background-color: #ff6961;
    }

</style>