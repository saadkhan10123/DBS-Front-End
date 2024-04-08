<script>
    /** @type {import('./$types').PageData} */
    import { goto } from "$app/navigation"
    import { enhance, applyAction  } from '$app/forms';
    
	/** @type {import('./$types').PageData} */
	//export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

    let password;
</script>

<div class="sign-in">
    <h1>Sign In</h1>
    <form method="POST" action="/sign-in?/login" use:enhance={({ submitter }) => {
        password = ''
        submitter.disabled = true;
        return async( { result } ) => {
            console.log(result);
            if (result.type === "success") {
                goto("/home");
            } else {
                await applyAction(result);
                submitter.disabled = false;
            }
        }}
    }>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required bind:value={password}>
        <div class="error">
            {#if form?.message}
                {form.message}
            {/if}
        </div>
        <div class="button-container">
            <button type="submit">Sign In</button>
            <button type="button" class="sign-up-button" on:click={() => goto("/sign-in/signup")}>Sign Up</button>
        </div>
    </form>
</div>

<style>
    .sign-in {
        display: flex;
        flex-direction: column;
        padding: 32px 32px;
        color: #fff;
        background-color: #222222;
        border-radius: 12px;
        margin: 0 auto;
        width: 16vw;
        height: 16vw;
        box-shadow: 0 4px 8px rgba(244, 192, 192, 0.15);
        transition: all 0.2s ease-in-out;
    }

    h1 {
        margin: 0 0 12px;
        font-size: 1.25em;
        font-weight: bold;
        text-align: center;
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
        margin-top: 2em;
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

    button:disabled {
        background-color: #ff6961;
        cursor: not-allowed;
    }

    .sign-up-button {
        background-color: #121212;
    }

    button:hover,
    button:focus {
        background-color: #ff6961;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .error {
        color: #ff6961;
        font-size: 12px;
        margin-top: 8px;
    }
</style>