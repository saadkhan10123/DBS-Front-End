<script>
    export let signedIn = true;
    
    let name = "John Doe"
</script>

<div class="signin-status">
    {#if signedIn}
        <a href="/profile/me">
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
    justify-content: center;
    gap: 1em;
    padding: 5px 0px;
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
}

a:visited {
    color: white;
}

button {
    margin: 0px 5px;
    border-radius: 5px;
    transition: all 0.3s;
    cursor: pointer;
    padding: 0.5em 1.2em; 
    text-align: center;
    box-sizing: border-box;
    border: none;
    font-size: 1em;
    }

.sign-in {
    background-color: rgba(75, 75, 75, 0.2); 
    color: white; 
}

.sign-in:hover {
    background-color: rgba(75, 75, 75, 0.4); 
}

.sign-up {
    background-color: white;
    color: #4e7f7d;
}

.sign-up:hover {
    background-color: rgb(216, 216, 216);
}

</style>