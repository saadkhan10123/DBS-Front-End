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
            <button class="sign-in"><a href="/sign-in">Sign In</a></button>
            <button class="sign-up"><a href="/sign-in">Sign Up</a></button>
        </div>
    {/if}
</div>

<style>
    .signin-status {
        text-align: right;
        height: 100%;
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
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        vertical-align: middle;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:visited {
        color: white;
    }

    button {
        margin: 0px 5px;
        border-radius: 5px;
        background-color: rgb(75, 75, 75);
        color: white;
        transition: all 0.3s;
        cursor: pointer;
        border: 1px solid black;
        padding: 0;
        width: auto;
        height: auto;
    }
    
    button > a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 5px 10px;
        text-align: center;
        box-sizing: border-box;
    }

    .sign-in {
        background-color: white;
    }

    .sign-in > a {
        color: black;
    }

    .sign-in:hover {
        background-color: black;
        border: 1px solid white;
    }

    .sign-in:hover > a {
        color: white;
    }

    .sign-up {
        background-color: green;
    }

    .sign-up:hover {
        background-color: rgb(76, 183, 76);
    }
</style>