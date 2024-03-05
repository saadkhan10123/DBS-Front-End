<script>
    /** @type {import('./$types').LayoutData} */
    //export let data;
    import Header from "$lib/Header/Header.svelte";
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
    main {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

</style>