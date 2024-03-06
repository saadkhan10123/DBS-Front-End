<script>
    /** @type {import('./$types').LayoutData} */
    //export let data;
    import Header from "$lib/Header/Header.svelte";
    import SideBar from "$lib/General/SideBar.svelte";
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
    main {
        display: flex;
        padding: 24px 80px;
        margin-top: 4.5em;
    }

    .slot {
        flex: 4;
        background-color: #1a1a1a;
        border-radius: 20px;
        padding: 20px;
    }

</style>