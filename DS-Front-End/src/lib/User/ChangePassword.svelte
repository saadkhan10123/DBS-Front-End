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
        <label for="oldPassword">Old Password</label>
        <input type="password" id="oldPassword" name="oldPassword" required>
        <label for="newPassword">New Password</label>
        <input type="password" id="newPassword" name="newPassword" required>
        <label for="confirmNewPassword">Confirm Password</label>
        <input type="password" id="confirmNewPassword" name="confirmNewPassword" required>
        <div class="button-container">
            <button type="submit">Change Password</button>
            <button type="button" on:click={disableModal}>Cancel</button>
        </div>
    </form>
</div>

<style>
    .change-password {
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

    button:hover,
    button:focus {
        background-color: #ff6961;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
</style>