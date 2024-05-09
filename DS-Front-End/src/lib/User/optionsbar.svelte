<script>
    export let options;
    export let active;    
</script>

<div class="options-bar">
    {#each options as option}
        <a class:active = {active === option.name} class="option" href={option.link}>{option.name}</a>
    {/each}
</div>

<style>
    .options-bar {
        display: flex;
        flex-direction: column;
        justify-content: start;
        flex: 3;
        background-color: #f74d40;
        height: 100%;
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