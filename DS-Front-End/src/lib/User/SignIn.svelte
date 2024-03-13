<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function signUp() {
        dispatch("signUp");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        dispatch("submit", data)
    }

    export let form;

    console.log(form)
</script>

<div class="sign-in">
    <h1>Sign In</h1>
    <form method="POST" action="/sign-in?/login" on:submit>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
        <div class="button-container">
            <button type="submit">Sign In</button>
            <button type="button" class="sign-up-button" on:click={signUp}>Sign Up</button>
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

    .sign-up-button {
        background-color: #121212;
    }

    button:hover,
    button:focus {
        background-color: #ff6961;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
</style>