<script>
    /** @type {import('./$types').LayoutData} */
    import Header from "$lib/Header/Header.svelte";
    import OptionsBar from "$lib/User/OptionsBar.svelte";

    let options = [
        {
            name: "Profile",
            link: "/profile/me"
        },
        {
            name: "Settings",
            link: "/settings"
        },
        {
            name: "My Highscores",
            link: `/highscores`
        },
        {
            name: "Logout",
            link: "/profile/logout"
        }
    ]

    let active = "Profile"
</script>

<header>
    <Header/>
</header>

<main>
    <div class="user-options">
        <OptionsBar { options } { active }/>
        <slot></slot>
    </div>
</main>

<footer>

</footer>

<style>
    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-top: 4em;
    }

    .user-options {
        display: flex;
        height: 100%;
    }
</style>