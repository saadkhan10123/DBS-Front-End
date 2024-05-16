<script>
    import OptionsBar from '$lib/User/OptionsBar.svelte';

    export let options;
    export let active;

    let adminOptions = [
        {
            name: "Users",
            link: "/profile/admin/users"
        },
        {
            name: "Add Game",
            link: "/profile/admin/add-game"
        },
        {
            name: "Highscores",
            link: "/profile/admin/highscores"
        },
        {
            name: "Pending Highscores",
            link: "/profile/admin/pending-highscores"
        }
    ]

    if (typeof active !== 'object') {
        active = [active, ''];
    }
</script>

<div class="options-bar">
    {#each options as option}
        {#if option.name === "Admin"}
            <a data-sveltekit-reload data-sveltekit-preload-data="off" class:active = {active[0] === option.name} class="option" href={option.link}>{option.name}</a>
            {#if active[0] === 'Admin'}
            <div class="sub-options">
                <OptionsBar options={adminOptions} active={active[1]}/>
            </div>
            {/if}
        {:else}
            <a data-sveltekit-reload data-sveltekit-preload-data="off" class:active = {active[0] === option.name} class="option" href={option.link}>{option.name}</a>
        {/if}
    {/each}
</div>

<style>
    .sub-options {
        height: fit-content;
        margin-left: 0.5em;
        margin-right: 0.5em;
    }

    .options-bar {
        display: flex;
        flex-direction: column;
        justify-content: start;
        flex: 3;
        background-color: #f74d40;
        height: auto;
        box-sizing: border-box;
        padding-top: 15px;
    }
    

    .option {
        display: block;
        text-decoration: none;
        color: white;
        font-size: 1.2em;
        padding: 1em 1em;
        box-sizing: border-box;
        width: 100%;
        transition: all 0.2s;
    }

    .options-bar > a:hover {
        color: #ff6961;
        background-color: white;
    }

    .active {
        color: #ff6961;
        background-color: white;
    }

</style>