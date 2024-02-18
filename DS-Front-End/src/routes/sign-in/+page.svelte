<script>
    import SignIn from "$lib/signIn.svelte";
    import SignUp from "$lib/SignUp.svelte";

    let signingIn = false;
</script>
 
<header>
    <h1>Site Name</h1>
</header>

<main>
    {#if signingIn}
        <SignIn />
    {:else}
        <SignUp />
    {/if}
</main>

<style>
    :global(body) {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        height: 100svh;
        display: flex;
        flex-direction: column;
    }

    h1 {
        margin: 0;
    }

    main {
        box-sizing: border-box;
        background-color: grey;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>
