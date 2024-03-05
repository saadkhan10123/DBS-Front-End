<script>
    export let options ;

</script>

<div class="options-bar">
    {#each options as option}
        <a href={option.link}>{option.name}</a>
    {/each}
</div>

<style>
    .options-bar {
        display: flex;
        flex-direction: column;
        justify-content: start;
        flex: 3;
        background-color: #53a788;
        height: 100%;
        box-sizing: border-box;
        padding-top: 15px;
    }

    a {
        display: block;
        text-decoration: none;
        color: white;
        font-size: 24px;
        padding: 16px 16px;
        box-sizing: border-box;
        width: 100%;
        transition: all 0.2s;
    }

    a:hover {
        color: #70d38b;
        background-color: white;
    }
</style>