<script>
    import Modal from '../General/Modal.svelte';
</script>

<Modal>
    <form>
        <label for="game-name">Game Name</label>
        <input type="text" id="game-name" name="game-name" required>
        <label for="game-description">Game Description</label>
        <textarea id="game-description" name="game-description" required></textarea>
        <label for="game-image">Game Image</label>
        <input type="file" id="game-image" name="game-image" required>
        <button type="submit">Add Game</button>
    </form>
</Modal>