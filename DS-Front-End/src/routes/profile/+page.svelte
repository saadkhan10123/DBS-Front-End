<script>
    import Modal from "$lib/Modal.svelte";
    import ChangePassword from "$lib/ChangePassword.svelte";

    /** @type {import('./$types').PageData} */
    // export let data;
    let data = {
        userName: "John Doe",
        email: "jdoe@gmail.com",
        password: "password",
        bio: "I am a software developer",
        profilePic: "/placeHolderPFP.png"
    }

    let changingPassword = true
</script>

<div class="profile-section">
    <div class="profile-pic">
        <img src={data.profilePic} alt="Profile">
    </div>
    <div class="profile-info">
        <h2>User Name: {data.userName}</h2>
        <p>Email: {data.email}</p>
        <p>Bio: {data.bio}</p>
        <button on:click={() => changingPassword = true}>Change Password</button>
        {#if changingPassword}
            <Modal on:disableModal = {() => changingPassword = false}>
                <ChangePassword on:disableModal = {() => changingPassword = false}/>
            </Modal>
        {/if}
    </div>
</div>

<style>
    .profile-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 24px 64px;
        background-color: grey;
        border-radius: 10px;
        margin: 0 auto;
        width: 70svw;
    }

    .profile-pic {
        overflow: hidden;
        border-radius: 50%;
    }

    .profile-info {
        padding: 0 24px;
    }
</style>