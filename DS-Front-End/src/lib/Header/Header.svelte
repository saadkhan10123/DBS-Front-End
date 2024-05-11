<script>
    import NavBar from "./Nav/NavBar.svelte";
    import HeaderAccount from "./HeaderAccount.svelte";
    export let user;
</script>

<div class="header">
    <div class="title">
        <a href="/home">Leaderboard.com</a>
    </div>
    <div class="nav">
        <NavBar />
    </div>
    <div class="signIn">
        <HeaderAccount {user} />
    </div>
</div>

<style>
.header {
    display: flex;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: #f74d40;
    color: white;
    height: 4em;
    width: 100%; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.title {
    flex: 1;
    display: flex; 
    align-items: center;
}

.title > a {
    text-align: center;
    padding: 24px 32px;
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    text-decoration: none;
    color: white;

    font-weight: bolder;
    font-size: 1.2em;
}

.title a:hover {
    font-size: 1.3em;
    margin-bottom: 12px;
    transition: all;
    transition-duration: .2s;
}

.nav {
    flex: 3;
}

.signIn {
    flex: 1;
    transition: all 0.3s;
}

</style>