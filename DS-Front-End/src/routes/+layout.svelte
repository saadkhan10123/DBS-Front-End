<script>
  /** @type {import('./$types').LayoutData} */
  import '@fontsource/Silkscreen'
  import Header from "$lib/Header/Header.svelte";

  export let data;

  let user = data.user

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<header>
  <Header {user}/>
</header>

<div class="page-body">
  <slot></slot>
</div>
  
<style>
  :global(body) {
      margin: 0;
      font-family: "Poppins", sans-serif;
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
    padding-top: 4em;
    min-height: 100svh;
    width: 100svw;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
</style>