<script>
    import { createEventDispatcher } from "svelte"

    let oldPassword = document.getElementById("oldPassword");
    let newPassword = document.getElementById("newPassword");
    let confirmNewPassword = document.getElementById("confirmNewPassword");

    function changePassword() {
        if (newPassword.value === confirmNewPassword.value) {
            console.log("Password Changed");
        } else {
            console.log("Passwords do not match");
        }
    }

    const dispatch = createEventDispatcher();

    function disableModal() {
        console.log("Modal Disabled");
        dispatch("disableModal");
    }
</script>

<div class="change-password">
    <h1>Change Password</h1>
    <form action="" on:submit={changePassword}>
        <label for="oldPassword">Old Password:</label>
        <input type="password" id="oldPassword" name="oldPassword" required>
        <label for="newPassword">New Password:</label>
        <input type="password" id="newPassword" name="newPassword" required>
        <label for="confirmNewPassword">Confirm New Password:</label>
        <input type="password" id="confirmNewPassword" name="confirmNewPassword" required>
        <button type="submit">Change Password</button>
        <button type="button" on:click={disableModal}>Cancel</button>
    </form>
</div>

<style>
    .change-password {
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