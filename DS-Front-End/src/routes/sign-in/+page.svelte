<script>
    import SignIn from "$lib/User/signIn.svelte";
    import SignUp from "$lib/User/SignUp.svelte";
	import Header from "$lib/Header/Header.svelte";

    let signingIn = true;

    let userData

    const handleSubmit = (event) => {
        userData = event.detail
    }

    /** @type {import('./$types').PageData} */
	export let data;

    /** @type {import('./$types').ActionData} */
    export let form;
</script>
 
<header>
    <Header />
</header>

<main>
    {#if signingIn}
        <SignIn on:submit={handleSubmit} on:signUp={() => signingIn = false} form={form}/>
    {:else}
        <SignUp on:submit={handleSubmit} on:signIn={() => signingIn = true} />
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
