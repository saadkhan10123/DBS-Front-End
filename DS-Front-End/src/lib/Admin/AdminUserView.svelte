<script>
    export let user;
    import { invalidateAll } from '$app/navigation';

    const sendDelReq = async () => {
        const res = await fetch(`api/delUser?userId=${user.user_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            console.log("User deleted successfully");
        } else {
            console.log("Failed to delete user");
        }
        await invalidateAll();
    }

</script>

<div class="user-card">
    <div class="user-info">
        <h2>{user.username}</h2>
        <p>Email ID: {user.email}</p>
        <p>Nationality: {user.nationality}</p>
        <button on:click={sendDelReq}>Delete Account</button>
    </div>
</div>

<style>
    .user-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 24px 64px;
        background-color: #222222;
        color: white;
        border-radius: 1em;
        width: 40%;
    }

    .user-info {
        padding: 0 24px;
    }

    button {
        padding: 12px 32px;
        border-radius: 1em;
        font-size: 1em;
        background-color: #121212;
        color: white;
        border: none;
        transition: all 0.2s;
    }

    button:hover {
        background-color: #ff6961;
    }
</style>