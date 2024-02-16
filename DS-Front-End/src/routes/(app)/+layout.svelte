<script>
    /** @type {import('./$types').LayoutData} */
    //export let data;
    import Header from "$lib/Header.svelte";
    import SideBar from "$lib/SideBar.svelte";
</script>

<header>
    <Header/>
</header>

<main>
    <div class="slot">
        <slot></slot>
    </div>
    <SideBar />
</main>

<footer>

</footer>

<style>
    :global(body) {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    main {
        display: flex;
        padding: 24px 64px;
    }

    .slot {
        flex: 4;
    }
</style>