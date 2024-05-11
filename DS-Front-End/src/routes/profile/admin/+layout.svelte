<script>
    import AdminBar from '$lib/Admin/AdminBar.svelte';
</script>

<div class="admin">
    <AdminBar />
    <main>
        <div class="slot">
            <slot></slot>
        </div>
    </main>
</div>

<style>
    .slot {
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }

    main {
        max-width: 100%;
        min-height: 100%;
        padding: 0;
        box-sizing: border-box;
    }

    
</style>