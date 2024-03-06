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
        background-color: #121212;
        display: flex;
        flex-direction: column;
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
  </style>