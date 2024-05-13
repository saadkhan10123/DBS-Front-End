<script>
    import Modal from '../General/Modal.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function disableModal() {
        dispatch('disableModal');
    }
</script>

<Modal on:disableModal={disableModal}>
    <div class="modal-content">
        <h2>Add Game</h2>
        <form>
            <label for="title">Title</label>
            <input type="text" name="title" required />
            <label for="description">Description</label>
            <textarea id="description" name="description" required></textarea>
            <label for="realease-date"></label>
            <input type="date" name="release-date" required />
            <label for="image">Game Image</label>
            <input type="file" name="image" required />
            <button type="submit">Add Game</button>
            <button type="button" on:click={disableModal}>Cancel</button>
        </form>
    </div>
</Modal>