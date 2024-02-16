<script>
    /** @type {import('./$types').LayoutData} */
    //export let data;
    import Header from "$lib/Header.svelte";
</script>

<header>
    <Header/>
</header>

<main>
    <slot></slot>
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
</style>