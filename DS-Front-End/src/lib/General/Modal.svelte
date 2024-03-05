<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function disableModal() {
        console.log("Modal Disabled");
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
    }

    .modal-content {
        background-color: white;
        border-radius: 10px;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
</style>