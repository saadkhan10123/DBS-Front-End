<script>
    import Modal from "$lib/General/Modal.svelte";
    import ChangePassword from "$lib/User/ChangePassword.svelte";
    import Optionsbar from "$lib/User/optionsbar.svelte";

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

    let options = [
        {
            name: "Profile",
            link: "/profile"
        },
        {
            name: "Settings",
            link: "/settings"
        },
        {
            name: "My Highscores",
            link: `/highscores-${data.userName}`
        },
        {
            name: "Logout",
            link: "/logout"
        }
    ]
</script>

<div class="user-options">
    <Optionsbar { options }/>
    
    <div class="profile-wrapper">
        <div class="profile-section">
            <div class="profile-pic">
                <img src={data.profilePic} alt="Profile">
            </div>
            <div class="profile-info">
                <h2>User Name: {data.userName} </h2>
                <p>Email: {data.email}</p>
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
</div>

<style>
    .user-options {
        display: flex;
        height: 100%;
    }

    .profile-wrapper {
        flex: 10;
        padding: 24px 64px;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 400px;
    }

    .profile-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 24px 64px;
        background-color: white;
        border-radius: 10px;
    }

    .profile-pic {
        overflow: hidden;
        border-radius: 50%;
    }

    .profile-info {
        padding: 0 24px;
    }

    .change-password {
        padding: 8px 16px;
        border-radius: 5px;
        background-color: #70d38b;
        color: white;
        border: none;
        cursor: pointer;
    }

    .change-password:hover {
        background-color: #66c17e;
    }
</style>