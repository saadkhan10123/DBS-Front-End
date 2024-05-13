<script>
    import { createEventDispatcher } from 'svelte';
    import Modal from '../General/Modal.svelte';
    import { enhance } from '$app/forms';

    export let games;

    const dispatch = createEventDispatcher();

    const disableModal = () => {
        dispatch("disableModal");
    }

    let proofImage, fileinput;
	
	const onFileSelected =(e)=>{
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            proofImage = e.target.result
        };
    }  

    console.log(games)
</script>

<Modal on:disableModal={disableModal}>
    <form method="POST" action="?/addHighScore" use:enhance={({ submitter }) => {
        submitter.disabled = true;
    } }>
        <label for="game-name">Game Name</label>
        <select name="game" required>
            {#each games as game}
                <option value="{game.game_id}">{game.title}</option>
            {/each}
        </select>
        <label for="score">Score</label>
        <input type="number" name="score" required>
        <label for="game-image">Proof Image</label>

        <div class="image-container">
            {#if proofImage}
                <img class="proof-image" src="{proofImage}" alt="d" on:click={()=>{fileinput.click();}}/>
            {:else}
                <img class="proof-image" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" on:click={()=>{fileinput.click();}}/> 
            {/if}
            <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
            <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
        </div>

        <button type="submit">Add Highscore</button>
        <button type="button" on:click={disableModal}>Cancel</button>
    </form>
</Modal>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: #222222;
        padding: 1rem;
        border-radius: 1rem;
        color: white;
        width: 40svw;
    }

    label {
        font-size: 1.2em;
    }

    .proof-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 1rem;
    }

    button {
        background-color: #121212;
        width: 50%;
        align-self: center;
        border: none;
    }

    button:hover {
        background-color: #ff6961;
    }
</style>