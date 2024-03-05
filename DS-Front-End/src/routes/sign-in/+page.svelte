<script>
    import SignIn from "$lib/User/signIn.svelte";
    import SignUp from "$lib/User/SignUp.svelte";

    let signingIn = false;
</script>
 
<header>
    <h1>Site Name</h1>
</header>

<main>
    {#if signingIn}
        <SignIn on:signUp={() => signingIn = false}/>
    {:else}
        <SignUp on:signIn={() => signingIn = true} />
    {/if}
</main>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
    }

    h1 {
        margin: 0;
    }

    header {
        background-color: #4e7f7d;
        color: white;
        height: 4em;
    }

    main {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>
