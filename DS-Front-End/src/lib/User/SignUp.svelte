<script>
    import { createEventDispatcher } from "svelte";
    let signingIn = false;
    let userName = "";
    let email = "";
    let password = "";
    let confirmPassword = "";

    function signUp() {
        if (password === confirmPassword) {
            console.log("Signing Up");
        } else {
            console.log("Passwords do not match");
        }
    }

    const dispatch = createEventDispatcher();

    function signIn() {
        console.log("Signing In");
        dispatch("signIn");

    }
</script>

<div class="sign-up">
    <h1>Sign Up</h1>
    <form action="" on:submit={signUp}>
        <label for="userName">Username:</label>
        <input type="text" id="userName" name="userName" required bind:value={userName}>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required bind:value={email}>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required bind:value={password}>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required bind:value={confirmPassword}>
        <button type="submit" on:click={ signUp }>Sign Up</button>
        <button type="button" on:click={ signIn }>Sign In</button>
    </form>
</div>

<style>
    .sign-up {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 80px;
    color: #fff;
    background-color: #428d6d;
    border-radius: 12px;
    margin: 0 auto;
    width: 45vw;
    box-shadow: 0 4px 8px rgba(244, 192, 192, 0.15);
    transition: all 0.2s ease-in-out;
    }


    h1 {
    margin: 0 0 12px;
    font-size: 3em;
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
    font-size: 16px;
    color: #181c2d;
    }

    input {
    padding: 8px 10px;
    border: 1px solid #cbffd8;
    border-radius: 4px;
    font-size: 14px;
    }

    button {
    padding: 12px 24px;
    margin: 16px 0 8px 0;
    background-color: #23313d;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    }

    button:hover,
    button:focus {
    background-color: #213a45;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
</style>