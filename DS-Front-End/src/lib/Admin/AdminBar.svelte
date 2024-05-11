<script>
    import { page } from '$app/stores';

    let active = "users";

    page.subscribe(value => {
        const route = value.route.id;
        const routeName = route.split("/")[3];
        active = routeName;
    })
</script>

<nav class="admin-bar">
    <ul>
        <li ><a class:active={active === 'users'} href="/profile/admin/users">Users</a></li>
        <li class><a href="/profile/admin/games">Games</a></li>
        <li><a href="/profile/admin/highscores">Highscores</a></li>
        <li><a href="/profile/admin/pending-highscores">Pending Highscores</a></li>
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