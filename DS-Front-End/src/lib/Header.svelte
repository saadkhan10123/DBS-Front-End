<script>
    import NavBar from "./NavBar.svelte";
    import HeaderAccount from "./HeaderAccount.svelte";
    let signedIn = false;
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
        background-color: black;
        color: white;
        height: 50px;
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