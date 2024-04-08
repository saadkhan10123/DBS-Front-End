<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import { goto } from "$app/navigation"
    import { nations } from "$lib/Stores/nations"
    import { onDestroy } from "svelte";

    let userName = "";
    let email = "";
    let password = "";
    let confirmPassword = "";
    let nationality = "World";

    let samePassword = true;

    const unsubscribe = nations.subscribe(value => {
    });

    const handleSubmit = (event) => {
        if (password === confirmPassword) {
            console.log("Signing Up");
        } else {
            console.log("Passwords do not match");
            samePassword = false;
            event.preventDefault();
        }
    }

    //console.log(getNation("US"));

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="sign-up">
    <h1>Sign Up For Website</h1>
    <form method="POST" on:submit={ handleSubmit }>
        <label for="userName">Username <small>*</small></label>
        <input type="text" id="userName" name="userName" required bind:value={userName}>
        <label for="email">Email Address <small>*</small></label>
        <input type="email" id="email" name="email" required bind:value={email}>
        <label for="password">Password <small>*</small></label>
        <input type="password" id="password" name="password" required bind:value={password}>
        {#if !samePassword}
            <small class="warnings">Passwords do not match</small>            
        {/if}
        <label for="confirmPassword">Confirm Password <small>*</small></label>
        <input type="password" id="confirmPassword" name="confirmPassword" required bind:value={confirmPassword}>
        {#if !samePassword}
            <small class="warnings">Passwords do not match</small>            
        {/if}
        <label for="nationality">Nationality</label>
        <select name="nationality" id="nationality" bind:value={nationality} >
            {#each $nations as nation}
                <option value={nation.name}>{ nation.name }</option>
            {/each}
        </select>
        <div class="button-container">
            <button type="submit">Sign Up</button>
            <button type="button" class="sign-in-button" on:click={ () => goto("/sign-in/login") }>Sign In</button>
        </div>
    </form>
</div>

<style>
    .sign-up {
        display: flex;
        flex-direction: column;
        padding: 32px 32px;
        color: #fff;
        background-color: #222222;
        border-radius: 12px;
        margin: 0 auto;
        width: 18vw;
        box-shadow: 0 4px 8px rgba(244, 192, 192, 0.15);
        transition: all 0.2s ease-in-out;
    }

    h1 {
        margin: 0 0 12px;
        font-size: 1.25em;
        font-weight: bold;
        text-align: center;
    }

    small {
        color: #ff6961;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    label {
        padding: 8px 10px;
        font-size: 12px;
        color: white;
    }

    input {
        padding: 8px 10px;
        border: 1px solid #ff6961;
        background-color: #1a1a1a;
        color: white;
        border-radius: 4px;
        font-size: 12px;
    }

    .button-container {
        margin-top: 1em;
        display: flex; 
        justify-content: space-between; 
    }

    button {
        padding: 12px 24px;
        margin: 0; 
        background-color: #f74d40;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .sign-in-button {
        background-color: #121212;
    }

    button:hover,
    button:focus {
        background-color: #ff6961;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .warnings {
        color: #ff6961;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
    }

</style>