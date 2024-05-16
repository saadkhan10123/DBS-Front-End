<script>
    /** @type {import('./$types').LayoutData} */
    //export let data;
    import Header from "$lib/Header/Header.svelte";
    import SideBar from "$lib/General/SideBar.svelte";

    export let data;

    $: user = data.userInfo
</script>

<header>
    <Header {user}/>
</header>

<main>
    <div class="slot">
        <slot></slot>
    </div>
    <div class="side-bar">
        <SideBar latestGames = {data.latestGames} />
    </div>
</main>
<footer>

</footer>

<style>
    .slot {
        background-color: #1a1a1a;
        border-radius: 20px;
        padding: 20px;
        grid-column: span 9;
        margin-left: 40px;
    }

    .side-bar {
        grid-column: span 3;
        margin-right: 40px;
    }

    main {
        margin-top: 4em;
        margin-left: 3em;
        margin-right: 2em;
    }
</style>