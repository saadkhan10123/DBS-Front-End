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
    }

    .slot {
        flex: 4;
        background-color: #4e7f7d;
        border-radius: 20px;
        padding: 20px;
    }

</style>