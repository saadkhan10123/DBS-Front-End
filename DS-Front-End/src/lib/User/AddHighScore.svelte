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
</script>

<Modal on:disableModal={disableModal}>
    <form method="POST" action="?/addHighScore" use:enhance={({ submitter, formData }) => {
        submitter.disabled = true;
        formData.append("proofImage", proofImage);

        return ({ result }) => {
            console.log(result);
            if (result.type === "success") {
                disableModal();
            } else {
                submitter.disabled = false;
            }
        }
    } }>
        <label for="game-name">Game Name <small>*</small></label>
        <select name="game_id" required>
            {#each games as game}
                <option value="{game.game_id}">{game.title}</option>
            {/each}
        </select>
        <label for="score">Score <small>*</small></label>
        <input type="number" name="score" required>
        <label for="game-image">Proof Image <small>*</small></label>

        <div class="image-container">
            {#if proofImage}
                <img class="proof-image" src="{proofImage}" alt="d" on:click={()=>{fileinput.click();}}/>
            {:else}
                <img class="proof-image" src="\default.png" alt="" on:click={()=>{fileinput.click();}}/> 
            {/if}
            <div class="chan" on:click={()=>{fileinput.click();}}></div>
            <input style="display:none" type="file" accept=".jpg, .jpeg" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
        </div>

        <div class="button-container">
            <button type="submit">Add Highscore</button>
            <button type="button" on:click={disableModal}>Cancel</button>
        </div>
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
        width: 24svw;
    }

    label {
        padding: 8px 10px;
        font-size: 16px;
        color: white;
    }

    small {
        color: #f74d40;
    }

    input, select {
        padding: 8px 8px;
        border: 1px solid #ff6961;
        background-color: #1a1a1a;
        color: white;
        border-radius: 4px;
        font-size: 12px;
    }

    .image-container {
        margin: auto;
        align-items: center;
    }

    .proof-image {
        object-fit: fill;
        width: 100%;
        height: 100%;
    }

    .button-container {
        display: flex;
        flex-direction: row;
    }

    button {
        background-color: #f74d40;
        width: 50%;
        align-self: center;
        border: none;
        margin: 1em;
    }

    button:hover {
        background-color: #ff6961;
    }
</style>