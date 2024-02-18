<script>
    import NavBar from "./NavBar.svelte";
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
    }

    .title {
        flex: 1;
    }

    .title > a{
        text-align: center;
        padding: 5px;
        width: 100%;
        height: 100%;
        border: 1px solid yellow;
        display: inline-block;
        box-sizing: border-box;
    }

    .nav {
        flex: 3;
    }

    .signIn {
        flex: 1;
        border: 1px solid pink;
    }
</style>