<script>
    import Modal from "$lib/General/Modal.svelte";
    import ChangePassword from "$lib/User/ChangePassword.svelte";

    /** @type {import('./$types').PageData} */
    // export let data;
    // Insert country flag in nationality

    let data = {
        userName: "John Doe",
        email: "jdoe@gmail.com",
        password: "password",
        nationality: "Pakistan ",
        profilePic: "/placeHolderPFP.png"
    }

    let changingPassword = false
</script>


<div class="profile-wrapper">
    <div class="profile-section">
        <div class="profile-pic">
            <img src={data.profilePic} alt="Profile">
        </div>
        <div class="profile-info">
            <h2>{data.userName} </h2>
            <p>Email ID: {data.email}</p>
            <p>Nationality: {data.nationality}</p>
            <button class="change-password" on:click={() => changingPassword = true}>Change Password</button>
            {#if changingPassword}
                <Modal on:disableModal = {() => changingPassword = false}>
                    <ChangePassword on:disableModal = {() => changingPassword = false}/>
                </Modal>
            {/if}
        </div>
    </div>
</div>

<style>
    .profile-wrapper {
        padding: 24px 64px;
        align-items: center;
        justify-content: center;
    }

    .profile-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 24px 64px;
        background-color: #222222;
        color: white;
        border-radius: 1em;

    }

    .profile-pic {
        overflow: hidden;
        border-radius: 50%;
    }

    .profile-info {
        padding: 0 24px;
    }

    .change-password {
        padding: 12px 32px;
        border-radius: 1em;
        font-size: 1em;
        background-color: #121212;
        color: white;
        border: none;
        cursor: pointer;
    }

    .change-password:hover {
        background-color: #ff6961;
    }
</style>