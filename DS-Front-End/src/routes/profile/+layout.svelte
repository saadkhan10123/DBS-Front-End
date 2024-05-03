<script>
    /** @type {import('./$types').LayoutData} */
    import Header from "$lib/Header/Header.svelte";
    import OptionsBar from "$lib/User/OptionsBar.svelte";
    export let data;

    let user = data.user

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
            link: `/profile/highscores`
        },
        {
            name: "Logout",
            link: "/profile/logout"
        }
    ]

    let active = "Profile"

    const handleOptionClicked = (e) => {
        active = e.detail;
    }
</script>

<header>
    <Header {user}/>
</header>

<main>
    <div class="options-bar">
        <OptionsBar { options } { active } on:option-clicked={handleOptionClicked}/>
    </div>
        <div class="slot">
            <slot></slot>
        </div>
</main>

<footer>

</footer>

<style>
    .options-bar {
        display: flex;
        height: 100%;
        grid-column: span 3;
    }

    .slot {
        grid-column: span 9;
    }
</style>