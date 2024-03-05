<script>
    /** @type {import('./$types').LayoutData} */
    import '@fontsource/Silkscreen'
</script>

<slot></slot>

<style>
    :global(body) {
        margin: 0;
        font-family: 'Silkscreen', sans-serif;
        height: 100svh;
        background-color: #53a788;
        display: flex;
        flex-direction: column;
    }

    :global(button) {
        cursor: pointer;
    }
</style>