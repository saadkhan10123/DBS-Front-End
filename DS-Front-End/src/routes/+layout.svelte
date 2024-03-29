<script>
    /** @type {import('./$types').LayoutData} */
    import '@fontsource/Silkscreen'
    import Header from "$lib/Header/Header.svelte";
</script>

<header>
  <Header />
</header>

<div class="page-body">
  <slot></slot>
</div>
  
<style>
  :global(body) {
      margin: 0;
      font-family: 'Silkscreen', sans-serif;
      height: 100svh;
      background-color: #121212;
      display: flex;
      flex-direction: column;
      color: white;
  }

  /* Removed font face rules as they are not needed for this pixelated font */

  :global(button) {
    cursor: pointer;
    padding: 12px 24px; /* Increased padding for better legibility with pixelated font */
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: transparent;
    color: #fff;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }

  :global(button:hover) {
    background-color: #333;
  }

  :global(a) {
    text-decoration: none;
  }

  .page-body {
    box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
  }

  :global(main) {
    padding-top: 6em;
    min-height: 100svh;
    width: 100svw;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
</style>