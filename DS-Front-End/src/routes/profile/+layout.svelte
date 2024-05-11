<script>
    /** @type {import('./$types').LayoutData} */
    import Header from "$lib/Header/Header.svelte";
    import OptionsBar from "$lib/User/OptionsBar.svelte";
    import { page } from "$app/stores";

    export let data;

    let user = data.userInfo

    let options = [
        {
            name: "Profile",
            link: "/profile/me"
        },
        {
            name: "My Highscores",
            link: `/profile/highscores`
        }

    ]

    let active = "Profile"

    console.log(data)

    if(data.isAdmin) {
        options.push({
            name: "Admin",
            link: "/profile/admin"
        })
    
    }

    options.push({
        name: "Logout",
        link: "/profile/logout"
    })

    page.subscribe(value => {
        const route = value.route.id;
        const routeName = route.split("/")[2];
        active = routeName.charAt(0).toUpperCase() + routeName.slice(1);
        if(active === "Me") {
            active = "Profile"
        } else if (active === "Highscores") {
            active = "My Highscores"
        }
    })
</script>

<header>
    <Header {user}/>
</header>

<main>
    <div class="options-bar">
        <OptionsBar { options } { active }/>
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