<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function signUp() {
        dispatch("signUp");
    }
</script>

<div class="sign-in">
    <h1>Sign In</h1>
    <form action="">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Sign In</button>
        <button type="button" on:click={signUp}>Sign Up</button>
    </form>
</div>

<style>
    .sign-in {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 64px;
        background-color: white;
        border-radius: 10px;
        margin: 0 auto;
        width: 40svw;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        padding: 5px;
    }

    input {
        padding: 5px;
        margin: 5px 0;
    }

    button {
        padding: 5px;
        margin: 5px 0;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
    }
</style>