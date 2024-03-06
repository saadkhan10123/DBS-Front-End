<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function disableModal() {
        dispatch("disableModal");
    }
</script>

<div class="modal" on:click|self={disableModal}>
    <div class="modal-content">
        <slot></slot>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100svw;
        height: 100svh;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>