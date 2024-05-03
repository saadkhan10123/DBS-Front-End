<script>
    export let user;
</script>

<div class="signin-status">
    {#if user}
        <a href="/profile/me">
            <div class="nav-profile">
                <img src="/placeHolderPFP.png" alt="Profile">
                <p>{user.username}</p>
            </div>
        </a>
    {:else}
        <div class="signin-options">
            <button class="sign-in"><a href="/sign-in/login">Log In</a></button>
            <button class="sign-up"><a href="/sign-in/signup" style="color: #f74d40;">Sign Up</a></button>
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
    justify-content: center;
    gap: 1em;
    box-sizing: border-box;
    max-height: 100%;
}

.nav-profile img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
   
    cursor: pointer;
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
    width: 100%;
    height: 100%;
    display: inline-block;
    padding: 12px 32px;
    box-sizing: border-box;
}

a:visited {
    color: white;
}

button {
    padding: 0;
    margin: 0 6px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1em;
}

.sign-in {
    background-color: #f74d40;
}

.sign-in:hover {
    background-color: #ff6961;
}

.sign-up {
    background-color: white;
}

.sign-up:hover {
    background-color: rgba(255, 255, 255, 0.7);
}

</style>