<script>
    import { page } from '$app/stores';

    let active = "users";

    page.subscribe(value => {
        const route = value.route.id;
        const routeName = route.split("/")[3];
        active = routeName;
        if (routeName === "users") {
            active = "users";
        } else if (routeName === "games") {
            active = "games";
        } else if (routeName === "highscores") {
            active = "highscores";
        } else if (routeName === "pending-highscores") {
            active = "pending highscores";
        }
    })

    let links = [
        {
            name: "Users",
            link: "/profile/admin/users"
        },
        {
            name: "Games",
            link: "/profile/admin/games"
        },
        {
            name: "Highscores",
            link: "/profile/admin/highscores"
        },
        {
            name: "Pending Highscores",
            link: "/profile/admin/pending-highscores"
        }
    ]
</script>

<nav class="admin-bar">
    <ul>
        {#each links as link}
            <li><a data-sveltekit-reload class:active={active === link.name.toLowerCase()} href={link.link}>{link.name}</a></li>
        {/each}
    </ul>
</nav>

<style>
    .admin-bar {
        background-color: #f74d40;
        box-sizing: border-box;
        width: 100%;
    }
    

    .admin-bar > ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-around;
    }

    .admin-bar > ul > li {
        margin: 0;
        padding: 0;
    }

    .admin-bar > ul > li > a {
        display: block;
        text-decoration: none;
        color: white;
        font-size: 1.2em;
        padding: 1em 1em;
        box-sizing: border-box;
        width: 100%;
        transition: all 0.2s;
    }

    .admin-bar > ul > li > a:hover {
        color: #ff6961;
        background-color: white;
    }

    .admin-bar > ul > li > a.active {
        color: #ff6961;
        background-color: white;
    }
</style>