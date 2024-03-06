<script>
    import SignIn from "$lib/User/signIn.svelte";
    import SignUp from "$lib/User/SignUp.svelte";
	import Header from "../../lib/Header/Header.svelte";

    let signingIn = false;
</script>
 
<header>
    <Header />
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
