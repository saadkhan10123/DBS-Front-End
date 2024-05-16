<script>
    /** @type {import('./$types').LayoutData} */
    import Header from "$lib/Header/Header.svelte";
    import OptionsBar from "$lib/User/OptionsBar.svelte";
    import { page } from "$app/stores";

    export let data;

    $: user = data.userInfo

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

    let active = ["Profile"]

    if(data.isAdmin) {
        options.push({
            name: "Admin",
            link: "/profile/admin/users"
        })
    
    }

    options.push({
        name: "Logout",
        link: "/profile/logout"
    })

    page.subscribe(value => {
        const route = value.route.id;
        let routeName = route.split("/")[2];
        active[0] = routeName.charAt(0).toUpperCase() + routeName.slice(1);
        if(active[0] === "Me") {
            active[0] = "Profile"
        } else if (active[0] === "Highscores") {
            active[0] = "My Highscores"
        }
        
        routeName = route.split("/")[3];
        if(routeName) {
            active[1] = routeName.charAt(0).toUpperCase() + routeName.slice(1);
            if (active[1] === "Pending-highscores") {
                active[1] = "Pending Highscores"
            } else if (active[1] === "Add-game") {
                active[1] = "Add Game"
            }
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
        height: auto;
        max-height: 100%;
        grid-column: span 3;
    }

    .slot {
        grid-column: span 9;
    }
</style>