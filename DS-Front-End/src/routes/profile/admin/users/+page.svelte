<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import AdminUserView from '$lib/Admin/AdminUserView.svelte'
    import {goto, invalidateAll} from '$app/navigation'

    $: users = data.users

    let user = ''
    const searchUser = async () => {
        // set the url to the search query
        await invalidateAll();
        await goto(`/profile/admin/users?param1=${user}`, { replaceState: true })
    }


</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="admin-users">
    <div class="user-search">
        <h1>User Search</h1>
        <input type="text" bind:value={user}>
        <button on:click={searchUser}><i class="fa fa-search"></i></button>
    </div>

    <div class="users">
        {#each users as user}
            <AdminUserView {user}/>
        {/each}
    </div>
</div>

<style>
    .admin-users {
        padding: 24px 64px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 5em;
        max-height: 100%;
    }

    .users {
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: 100%;
        align-items: center;
        height: 400px;
        overflow: auto;
    }

    button {
        background-color: #f74d01;
        color: white;
        border: none;
        padding: 0.75em 1em;
        border-radius: 0.5em;
        border-left: none;
    }

    button:hover { 
        background-color: #ff6961;
    }

    input {
        padding: 0.5em;
        border-radius: 0.5em;
        margin: 0em 1em;
        border: none;
        border-right: none;
    }

    .user-search {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px 64px;
        background-color: #222222;
        color: white;
        border-radius: 1em;
    }

    h1 {
        font-size: 1.25em;
        font-weight: bold;
        text-align: center;
        margin: 0em 0.5em;
    }
</style>