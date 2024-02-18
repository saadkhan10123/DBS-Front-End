<script>
    export let signedIn = false;

    let name = "John Doe"
</script>

<div class="signin-status">
    {#if signedIn}
        <a href="/profile">
            <div class="nav-profile">
                <img src="/placeHolderPFP.png" alt="Profile">
                <p>{name}</p>
            </div>
        </a>
    {:else}
        <div class="signin-options">
            <a href="/signIn">Sign In</a>
            <a href="/signUp">Sign Up</a>
        </div>
    {/if}
</div>

<style>
    .signin-status {
        text-align: right;
    }

    .nav-profile {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding: 5px 0px;
    }

    .nav-profile img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .signin-options {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    a {
        text-decoration: none;
        color: black;
    }

    a:visited {
        color: black;
    }
</style>