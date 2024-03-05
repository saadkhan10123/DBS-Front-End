<script>
    import NavBar from "./Nav/NavBar.svelte";
    import HeaderAccount from "./HeaderAccount.svelte";
    let signedIn = true;
</script>

<div class="header">
    <div class="title">
        <a href="/home">WebSite Title</a>
    </div>
    <div class="nav">
        <NavBar />
    </div>
    <div class="signIn">
        <HeaderAccount {signedIn} />
    </div>
</div>

<style>
    .header {
        display: flex;
        background-color: #23313d;
        color: white;
        height: 4em;
    }

    .title {
        flex: 1;
    }

    .title > a{
        text-align: center;
        padding: 5px;
        width: 100%;
        height: 100%;
        display: inline-block;
        box-sizing: border-box;
        text-decoration: none;
        color: white;
    }

    .nav {
        flex: 3;
    }

    .signIn {
        flex: 1;
        transition: all 0.3s;
    }

</style>