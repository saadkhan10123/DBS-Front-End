<script>
    import { createEventDispatcher } from "svelte"
    import { enhance, applyAction } from '$app/forms';

    const dispatch = createEventDispatcher();

    function disableModal() {
        console.log("Modal Disabled");
        dispatch("disableModal");
    }

	/** @type {import('./$types').ActionData} */
	export let form;

    let error = null;
</script>

<div class="change-password">
    <h1>Change Password</h1>
    <form method="POST" action="?/changePassword" use:enhance={({ submitter, formData }) => {
            submitter.disabled = true;
            if (formData.newPassword !== formData.confirmPassword) {
                error = "Passwords do not match";
                return;
            }
            return async ({ result }) => {
                if (result.type === "success") {
                    disableModal();
                } else {
                    console.log(result);
                    error = result.data.message;
                    console.log(error)
                    submitter.disabled = false;
                }
            }
        }
    }>
        <label for="oldPassword">Old Password</label>
        <input type="password" name="oldPassword" required>
        
        <label for="newPassword">New Password</label>
        <input type="password" name="newPassword" required>
        
        <label for="confirmNewPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" required>
        
        {#if error}
            <div class="error">{error}</div>
        {/if}
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
    max-width: 400px;
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
    display: flex;
    align-items: center;
}

input {
    padding: 8px 10px;
    border: 1px solid #ff6961;
    background-color: #1a1a1a;
    color: white;
    border-radius: 4px;
    font-size: 12px;
    line-height: 1.5; 
}

.button-container {
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    gap: 1em; 
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

.error {
    color: #ff6961;
    font-size: 12px;
    margin-top: 8px;
}
</style>