<script>
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
</script>

<div class="sign-up">
    <h1>Sign Up</h1>
    <form action="" on:submit={signUp}>
        <label for="userName">User Name</label>
        <input type="text" id="userName" name="userName" required bind:value={userName}>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required bind:value={email}>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required bind:value={password}>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required bind:value={confirmPassword}>
        <button type="submit">Sign Up</button>
    </form>
</div>

<style>
    .sign-up {
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